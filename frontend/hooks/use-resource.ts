import { BaseService } from "@/lib/base.service"
import { useQuery, useMutation, useQueryClient, UseQueryOptions } from "@tanstack/react-query"

type ID = string | number

interface UseResourceOptions<T> {
    queryKey: string | any[]
    service: BaseService<T>
    filter?: Record<string, any>
    queryFn?: (filter?: Record<string, any>) => Promise<T[]>
    queryOptions?: Omit<UseQueryOptions<T[], Error>, 'queryKey'>
}

export function useResource<T>({
    queryKey,
    service,
    filter,
    queryFn,
    queryOptions
}: UseResourceOptions<T>) {
    const queryClient = useQueryClient()

    const normalizedQueryKey = Array.isArray(queryKey) ? queryKey : [queryKey]
    const effectiveQueryKey = filter ? [...normalizedQueryKey, filter] : normalizedQueryKey

    const baseQueryKey = [normalizedQueryKey[0]]

    const query = useQuery<T[], Error>({
        queryKey: effectiveQueryKey,
        queryFn: queryFn ? () => queryFn(filter) : () => service.getAll(filter),
        ...queryOptions,
    })
    const createMutation = useMutation({
        mutationFn: (data: Partial<T>) => service.create(data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: baseQueryKey }),
    })

    const updateMutation = useMutation({
        mutationFn: ({ id, data }: { id: ID; data: Partial<T> }) => service.update(id, data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: baseQueryKey }),
    })

    const deleteMutation = useMutation({
        mutationFn: (id: ID) => service.delete(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: baseQueryKey }),
    })

    return {
        ...query,
        create: createMutation.mutateAsync,
        update: updateMutation.mutateAsync,
        delete: deleteMutation.mutateAsync,
    }
}
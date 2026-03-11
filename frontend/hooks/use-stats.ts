import { Stats, StatsService } from "@/lib/stats.service";
import { useResource } from "./use-resource";

export const useStats = (filter?: Record<string, any>) => useResource<Stats>({
    queryKey: 'stats',
    service: new StatsService(),
    filter
})
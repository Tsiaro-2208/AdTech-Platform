"use client"
import { useForm } from "react-hook-form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import countryList, { Country } from "@/lib/countrylist"
import { useCampaigns } from "@/hooks/use-campaigns"
import { Campaign } from "@/lib/campaigns.service"
import { toast } from "sonner"

type CampaignFormData = {
    name: string
    advertiser: string
    startDate: string
    endDate: string
    budget: number
    countries: string[]
}

const CampaignForm = () => {
    const [countries, setCountries] = useState<Country[]>([])
    const { create } = useCampaigns();
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        watch,
        formState: { errors }
    } = useForm<CampaignFormData>({
        defaultValues: {
            countries: []
        }
    })

    const selectedCountries = watch("countries")

    useEffect(() => {
        countryList().then(setCountries)
    }, [])

    const onSubmit = async (data: CampaignFormData) => {
        await create(data as unknown as Campaign)
        reset()
        toast.success("Campagne enregistré")
    }

    const toggleCountry = (iso2: string) => {
        const current = selectedCountries || []
        if (current.includes(iso2)) {
            setValue("countries", current.filter(c => c !== iso2))
        } else {
            setValue("countries", [...current, iso2])
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto p-6  rounded-xl shadow-lg border border-border">
            <h2 className="text-2xl font-bold text-primary">Créer une campagne</h2>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Nom de la campagne</label>
                    <Input {...register("name", { required: "Le nom est requis" })} placeholder="Ex: Promo Été 2024" />
                    {errors.name && <span className="text-destructive text-xs">{errors.name.message}</span>}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Annonceur</label>
                    <Input {...register("advertiser", { required: "L'annonceur est requis" })} placeholder="Nom de l'entreprise" />
                    {errors.advertiser && <span className="text-destructive text-xs">{errors.advertiser.message}</span>}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Date de début</label>
                    <Input type="date" {...register("startDate", { required: "Date de début requise" })} />
                    {errors.startDate && <span className="text-destructive text-xs">{errors.startDate.message}</span>}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Date de fin</label>
                    <Input type="date" {...register("endDate", { required: "Date de fin requise" })} />
                    {errors.endDate && <span className="text-destructive text-xs">{errors.endDate.message}</span>}
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Budget</label>
                <Input type="number" {...register("budget", { required: "Le budget est requis", min: { value: 1, message: "Le budget doit être > 0" } })} placeholder="0.00" />
                {errors.budget && <span className="text-destructive text-xs">{errors.budget.message}</span>}
            </div>

            <div className="space-y-3">
                <label className="text-sm font-medium">Pays cibles</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-3 border border-input rounded-md">
                    {countries.map((country) => (
                        <div
                            key={country.Iso2}
                            onClick={() => toggleCountry(country.Iso2)}
                            className={`flex items-center gap-2 p-2 rounded cursor-pointer transition-colors text-xs ${selectedCountries.includes(country.Iso2)
                                ? "bg-primary/10 border-primary text-primary"
                                : "hover:bg-muted"
                                }`}
                        >
                            <input
                                type="checkbox"
                                checked={selectedCountries.includes(country.Iso2)}
                                readOnly
                                className="w-4 h-4 rounded border-input text-primary focus:ring-primary"
                            />
                            <span className="truncate">{country.name}</span>
                        </div>
                    ))}
                </div>
                {errors.countries && <span className="text-destructive text-xs">{errors.countries.message}</span>}
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4">
                Enregistrer la campagne
            </Button>
        </form>
    )
}

export default CampaignForm
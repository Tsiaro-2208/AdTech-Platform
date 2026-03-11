
"use client"
import { SearchIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect, useState } from "react"
import countryList, { Country } from "@/lib/countrylist"
import { useCampaigns } from "@/hooks/use-campaigns"
import CampaignsList from "./list"

type CampaignFilter = {
    status: string,
    advertiser: string,
    country: string
}

const CampaignsFilter = () => {

    const [countries, setCountries] = useState<Country[]>([])

    // Active filters sent to the API
    const [activeFilter, setActiveFilter] = useState<Record<string, any>>({})

    // Pending filter values in the inputs
    const [formValues, setFormValues] = useState({
        status: "all",
        advertiser: "",
        country: "all"
    })

    useEffect(() => {
        countryList().then((data) => {
            setCountries(data)
        })
    }, [])

    const { data: campaigns, isLoading } = useCampaigns(activeFilter);

    const handleSearch = () => {
        const newFilter: Record<string, any> = {}
        if (formValues.status !== "all") newFilter.status = formValues.status
        if (formValues.advertiser) newFilter.advertiser = formValues.advertiser
        if (formValues.country !== "all") newFilter.country = formValues.country
        
        setActiveFilter(newFilter)
    }

    if (isLoading) return <div className="p-10 text-center">Chargement des campagnes...</div>;

    return (
        <div className="w-full">
            <div className="w-full grid grid-cols-4 gap-5 px-10">
                <div className="col-span-1">
                    <Input 
                        placeholder="Annonceur" 
                        value={formValues.advertiser}
                        onChange={(e) => setFormValues({ ...formValues, advertiser: e.target.value })}
                    />
                </div>
                <div className="col-span-1">
                    <Select 
                        value={formValues.status} 
                        onValueChange={(val) => setFormValues({ ...formValues, status: val })}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Statut" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Tous</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="paused">En pause</SelectItem>
                            <SelectItem value="ended">Terminé</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="col-span-1">
                    <Select 
                        value={formValues.country} 
                        onValueChange={(val) => setFormValues({ ...formValues, country: val })}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Pays" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Tous</SelectItem>
                            {countries.map((country) => (
                                <SelectItem key={country.name} value={country.Iso2}>{country.name} - {country.Iso2}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="col-span-1">
                    <Button 
                        onClick={handleSearch}
                        className="w-full bg-secondary text-primary cursor-pointer"
                    >
                        <SearchIcon /> Rechercher
                    </Button>
                </div>
            </div>
            <div className="w-full px-10">
                <CampaignsList campaigns={campaigns || []} />
            </div>
        </div>
    )
}

export default CampaignsFilter
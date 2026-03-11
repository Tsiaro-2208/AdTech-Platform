import { Campaign } from "@/lib/campaigns.service"

const CampaignsList = ({ campaigns }: { campaigns: Campaign[] }) => {
    return (
        <>
            <h1 className="text-2xl font-bold m-4">Liste des campagnes</h1>
            <table className="min-w-full border-collapse border border-gray-500">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Nom</th>
                        <th className="px-4 py-2">Annonceur</th>
                        <th className="px-4 py-2">Statut</th>
                        <th className="px-4 py-2">Impression</th>
                        <th className="px-4 py-2">Budget</th>
                    </tr>
                </thead>
                <tbody>
                    

                    {campaigns.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                                Aucune campagne trouvée
                            </td>
                        </tr>
                    ) : (
                        campaigns.map((campaign) => (
                            <tr key={campaign.id} className="text-center">
                                <td className="px-4 py-2">{campaign.name}</td>
                                <td className="px-4 py-2">{campaign.advertiser}</td>
                                <td className="px-4 py-2">{campaign.status}</td>
                                <td className="px-4 py-2">{campaign.impressionsServed}</td>
                                <td className="px-4 py-2">{campaign.budget}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </>
    )
}

export default CampaignsList
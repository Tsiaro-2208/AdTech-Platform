import CampaignsFilter from "@/components/campaigns/filter"

export const metadata = {
    title: "Gérer les campagnes publicitaires",
    description: "Affichez, filtrez et gérez vos campagnes publicitaires en cours."
}

const CampaignsPage = () => {
  return (
    <div className="w-full">
      <CampaignsFilter />
    </div>
  )
}

export default CampaignsPage
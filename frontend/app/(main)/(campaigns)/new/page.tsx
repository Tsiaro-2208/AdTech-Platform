import CampaignForm from "@/components/campaigns/form"

export const metadata = {
    title: "Créer une nouvelle campagne",
    description: "Configurez une nouvelle campagne publicitaire pour atteindre votre audience cible."
}

const NewCampaignPage = () => {
  return (
    <div className="w-full">
      <CampaignForm />
    </div>
  )
}

export default NewCampaignPage
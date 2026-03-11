import DashboardCard from "@/components/campaigns/dashboard-card"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Medal } from "lucide-react"

const CampaignsDashboardPage = () => {
    return (
        <div className="w-full flex flex-col items-center ">
            <div className="w-2/3 grid grid-cols-3 gap-4">
                <DashboardCard title="Total des campagnes" value={10} />
                <DashboardCard title="Campagnes actives" value={10} />
                <DashboardCard title="Total des impressions" value={10} />
            </div>
            <Card className="w-2/3 grid grid-cols-4  bg-amber-500/50 border border-slate-50 p-5 text-slate-50 m-5">
                <CardTitle className="flex flex-col items-center justify-around">
                    <Medal size={64} />
                    <h2 className="text-xl">Meilleur annonçeur</h2>
                </CardTitle>
                <CardContent className="col-span-3 text-2xl text-right">
                    100
                </CardContent>
            </Card>
        </div>
    )
}

export default CampaignsDashboardPage
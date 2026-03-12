'use client'

import DashboardCard from "@/components/campaigns/dashboard-card"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { getStats, Stats } from "@/lib/stats.service"
import { Medal } from "lucide-react"
import { useEffect, useState } from "react"

const metadata = {
    title: "Tableau de bord des campagnes",
    description: "Vue d'ensemble des performances de vos campagnes publicitaires."
}

const CampaignsDashboardPage = () => {

    const [stats, setStats] = useState<Stats | null>(null)

    useEffect(() => {
        const fetchStats = async () => {
            const data = await getStats()
            setStats(data)
        }

        fetchStats()
    }, [])

    return (
        <div className="w-full flex flex-col items-center ">
            <div className="w-2/3 grid grid-cols-3 gap-4">
                <DashboardCard title="Total des campagnes" value={stats?.totalCampaigns ?? 0} />
                <DashboardCard title="Campagnes actives" value={stats?.activeCampaigns ?? 0} />
                <DashboardCard title="Total des impressions" value={stats?.totalImpressions ?? 0} />
            </div>
            <Card className="w-2/3 grid grid-cols-4  bg-amber-500/50 border border-slate-50 p-5 text-slate-50 m-5">
                <CardTitle className="flex flex-col items-center justify-around">
                    <Medal size={64} />
                    <h2 className="text-xl">Meilleur annonçeur</h2>
                </CardTitle>
                <CardContent className="col-span-3 text-2xl text-right">
                    {stats?.topAdvertiser._id}
                </CardContent>
            </Card>
        </div>
    )
}

export default CampaignsDashboardPage
import { Card, CardContent, CardTitle } from "../ui/card"

const DashboardCard = ({ title, value }: { title: string, value: number }) => {
    return (
        <Card className="bg-primary border border-slate-50 p-5 text-slate-50">
            <CardTitle>
                <h2 className="text-xl">{title}</h2>
            </CardTitle>
            <CardContent className="text-2xl text-right">
                {value}
            </CardContent>
        </Card>
    )
}

export default DashboardCard
import GooeyNav from "@/components/GooeyNav";

const MainLayout = ({ children }: { children: React.ReactNode }) => {

    const items = [
        { label: "Tableau de bord", href: "/campaigns/dashboard" },
        { label: "Liste des campagnes", href: "/campaigns" },
        { label: "Nouvelle campagne", href: "/campaigns/new" },
    ];

    return (
        <div className="w-full h-screen relative bg-primary text-slate-100">
            <div className="w-full flex justify-center py-5">
                <GooeyNav
                    items={items}
                    particleCount={15}
                    particleDistances={[90, 10]}
                    particleR={100}
                    initialActiveIndex={0}
                    animationTime={600}
                    timeVariance={300}
                    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                />
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}

export default MainLayout
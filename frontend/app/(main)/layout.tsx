import GooeyNav from "@/components/GooeyNav";

const MainLayout = ({ children }: { children: React.ReactNode }) => {

    const items = [
        { label: "Tableau de bord", href: "/dashboard" },
        { label: "Liste des campagnes", href: "/" },
        { label: "Nouvelle campagne", href: "/new" },
    ];

    return (
        <div className="w-full h-screen relative">
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
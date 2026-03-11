import z from "zod";

export const createCampaignSchema = z.object(
    {
        name: z.string().min(1, "Le nom est requis"),
        advertiser: z.string().min(1, "Le nom de l'annonceur est requis"),
        startDate: z.date().nonoptional("La date de début est requis"),
        endDate: z.date().nonoptional("La date de début est requis"),
        budget: z.number().min(1, "Le budget doit être supérieur à 0"),
        countries: z.array(z.string()).min(1, "Au moins un pays est requis"),
        // Il faut aussi une liste de pays
    }
)
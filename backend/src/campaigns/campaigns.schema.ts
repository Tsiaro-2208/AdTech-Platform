import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { v4 as uuidv4 } from 'uuid';

export type CampaignDocument = Campaign & Document;

@Schema()
export class Campaign {
    @Prop({
        type: String,
        unique: true,
        default: uuidv4
    })
    id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    advertiser: string;

    @Prop({ required: true })
    startDate: Date;

    @Prop({ required: true })
    endDate: Date;

    @Prop({ required: true })
    budget: number;

    @Prop({ required: true, default: 0 })
    impressionsServed: number;

    @Prop({ required: true })
    targetCountries: string[];

    @Prop({ required: true, default: "active" })
    status: "active" | "paused" | "ended";
}
export const CampaignSchema = SchemaFactory.createForClass(Campaign);
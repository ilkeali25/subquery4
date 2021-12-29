import { Entity, FunctionPropertyNames } from "@subql/types";
export declare class StakingReward implements Entity {
    constructor(id: string);
    id: string;
    account: string;
    balance: bigint;
    date: Date;
    blockHeight: number;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<StakingReward | undefined>;
    static create(record: Partial<Omit<StakingReward, FunctionPropertyNames<StakingReward>>> & Entity): StakingReward;
}

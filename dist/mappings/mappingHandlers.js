"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleStakingRewarded = void 0;
const types_1 = require("../types");
async function handleStakingRewarded(event) {
    const { event: { data: [account, newReward] } } = event;
    const entity = new types_1.StakingReward(`${event.block.block.header.number}-${event.idx.toString()}`);
    entity.account = account.toString();
    entity.balance = newReward.toBigInt();
    entity.date = event.block.timestamp;
    entity.blockHeight = event.block.block.header.number.toNumber();
    await entity.save();
}
exports.handleStakingRewarded = handleStakingRewarded;

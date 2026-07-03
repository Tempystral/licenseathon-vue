"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creditsRep = exports.commentatorsRep = void 0;
const nodecg_1 = require("./nodecg");
/**
 * This is where you can declare all your replicant to import easily into other files,
 * and to make sure they have any correct settings on startup.
 */
// YOU CAN REMOVE THIS RULE WHEN YOU GET MULTIPLE REPLICANTS!
const NAMESPACE = "licenseathon-vue";
exports.commentatorsRep = (0, nodecg_1.get)().Replicant("commentators", NAMESPACE, { defaultValue: { names: [] } });
exports.creditsRep = (0, nodecg_1.get)().Replicant("creditsStart", NAMESPACE, { defaultValue: false });

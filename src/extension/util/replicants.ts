import type { Commentators } from "@licenseathon-vue/types/schemas";
import { get as nodecg } from "./nodecg";

/**
 * This is where you can declare all your replicant to import easily into other files,
 * and to make sure they have any correct settings on startup.
 */

// YOU CAN REMOVE THIS RULE WHEN YOU GET MULTIPLE REPLICANTS!

const NAMESPACE = "licenseathon-vue";

export const commentatorsRep = nodecg().Replicant<Commentators>(
  "commentators",
  NAMESPACE,
  { defaultValue: { names: ["", ""] } }
);

export const creditsRep = nodecg().Replicant<boolean>(
  "creditsStart",
  NAMESPACE,
  { defaultValue: false }
);

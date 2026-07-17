import { computed } from "vue";
import { Incentive } from "./tiltify";

import { useReplicant } from "nodecg-vue-composable";
import { Total } from "../../../../nodecg-tiltify/src/types/schemas";
import tlcLogo from "../assets/TLC_primaryNOTAG.svg";

export function withCharityMessages() {
  const campaignTotal = useReplicant<Total>("total", "nodecg-tiltify");

  return computed<Incentive[]>(() => [
    {
      type: "message",
      item: {
        id: "tlclogo",
        orientation: "h",
        text: "In support of: ",
        img: tlcLogo,
      },
    },
    {
      type: "message",
      item: {
        text: "Donate at: licenseathon.live/donate",
        orientation: "v",
        id: "donomsg",
      },
    },
    {
      type: "message",
      item: {
        text: `$${campaignTotal.data?.value} raised for the Transgender Law Center!`,
        orientation: "v",
        id: "campaigntotal",
      },
    },
  ]);
}

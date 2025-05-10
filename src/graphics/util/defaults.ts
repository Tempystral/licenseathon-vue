import {
  RunData,
  RunDataPlayer,
  RunDataTeam,
  Timer,
} from "speedcontrol-util/types";

export const defaultRunDataPlayer: RunDataPlayer = {
  name: "",
  id: "",
  teamID: "",
  country: "",
  pronouns: "",
  social: {
    twitch: "",
  },
  customData: {},
};

export const defaultRunDataTeam: RunDataTeam = {
  name: "",
  id: "",
  players: [],
};

export const defaultRunData: RunData = {
  teams: [],
  customData: {},
  id: "",
};

export const defaultTimer: Timer = {
  time: "00:00:00",
  state: "stopped",
  milliseconds: 0,
  timestamp: 0,
  teamFinishTimes: {},
};

export const defaultTeamFinishTime = {
  time: "00:00:00",
  state: "stopped",
  milliseconds: 0,
  timestamp: 0,
};

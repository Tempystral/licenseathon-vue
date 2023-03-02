export const defaultRunDataPlayer = {
  name: '',
  id: '',
  teamID: '',
  country: '',
  pronouns: '',
  social: {
    twitch: '',
  },
  customData: { },
};

export const defaultRunDataTeam = {
  name: '',
  id: '',
  players: [],
};

export const defaultRunData = {
  teams: [],
  customData: {},
  id: '',
};

export const defaultTimer = {
  time: '00:00:00',
  state: 'stopped',
  milliseconds: 0,
  timestamp: 0,
  teamFinishTimes: {},
};

export const defaultTeamFinishTime = {
  time: '00:00:00',
  state: 'stopped',
  milliseconds: 0,
  timestamp: 0,
};

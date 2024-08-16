import { a } from "@aws-amplify/backend"

export const PlayerTeam = a
  .model({
    playerId: a.integer().required(),
    teamId: a.integer().required(),
    startDate: a.date().required(),
    endDate: a.date().required(),
  })
  .identifier([ "playerId", "teamId" ])
  .authorization((allow) => [ allow.guest().to([ "read" ]) ])

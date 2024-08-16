import { a } from "@aws-amplify/backend"

export const PlayerImage = a
  .model({
    id: a.integer().required(),
    playerId: a.integer().required(),
    order: a.integer().required(),
  })
  .identifier([ "id" ])
  .authorization((allow) => [ allow.guest().to([ "read" ]) ])

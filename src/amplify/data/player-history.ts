import { a } from "@aws-amplify/backend"

export const PlayerHistory = a
  .model({
    id: a.integer().required(),
    playerId: a.integer().required(),
    date: a.date().required(),
    description: a.string().required(),
  })
  .identifier([ "id" ])
  .authorization((allow) => [ allow.guest().to([ "read" ]) ])

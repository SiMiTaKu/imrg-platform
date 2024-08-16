import { a } from "@aws-amplify/backend"

export const PlayerVideo = a
  .model({
    id: a.integer().required(),
    playerId: a.integer().required(),
    url: a.string().required(),
  })
  .identifier([ "id" ])
  .authorization((allow) => [ allow.guest().to([ "read" ]) ])

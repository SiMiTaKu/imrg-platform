import { a } from "@aws-amplify/backend"

export const TeamVideo = a
  .model({
    id: a.integer().required(),
    teamId: a.integer().required(),
    url: a.string().required(),
  })
  .identifier([ "id" ])
  .authorization((allow) => [ allow.guest().to([ "read" ]) ])

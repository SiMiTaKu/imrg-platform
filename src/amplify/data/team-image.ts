import { a } from "@aws-amplify/backend"

export const TeamImage = a
  .model({
    id: a.integer().required(),
    teamId: a.integer().required(),
    order: a.integer().required(),
  })
  .identifier([ "id" ])
  .authorization((allow) => [ allow.guest().to([ "read" ]) ])

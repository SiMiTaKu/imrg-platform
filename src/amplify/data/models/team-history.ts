import { a } from "@aws-amplify/backend"

export const TeamHistory = a
  .model({
    id: a.integer().required(),
    teamId: a.integer().required(),
    date: a.date().required(),
    description: a.string().required(),
  })
  .identifier([ "id" ])
  .authorization((allow) => [ allow.guest().to([ "read" ]) ])

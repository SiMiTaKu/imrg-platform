import { a } from "@aws-amplify/backend"

export const Team = a
  .model({
    id: a.integer().required(),
    name: a.string().required(),
    nameKana: a.string().required(),
    goodAt: a.string().required(),
    comment: a.string().required(),
    state: a.enum([ "active", "inactive" ]),
  })
  .identifier([ "id" ])
  .authorization((allow) => [ allow.guest().to([ "read" ]) ])

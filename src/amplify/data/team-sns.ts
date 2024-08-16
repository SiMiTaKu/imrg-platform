import { a } from "@aws-amplify/backend"
import { SnsTypeCodes } from "$shared/constants"

export const TeamSns = a
  .model({
    id: a.integer().required(),
    teamId: a.integer().required(),
    snsType: a.enum(SnsTypeCodes.map((code) => `${code}`)),
    url: a.string().required(),
  })
  .identifier([ "id" ])
  .authorization((allow) => [ allow.guest().to([ "read" ]) ])

import { a } from "@aws-amplify/backend"
import { Sns } from "$shared/constants"

export const TeamSns = a
  .model({
    id: a.integer().required(),
    teamId: a.integer().required(),
    snsType: a.enum(Sns.Types.map((type) => type.slug)),
    url: a.string().required(),
  })
  .identifier([ "id" ])
  .authorization((allow) => [ allow.guest().to([ "read" ]) ])

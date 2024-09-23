import { a } from "@aws-amplify/backend"
import { Sns } from "../../shared/constants"

export const PlayerSns = a
  .model({
    id: a.integer().required(),
    playerId: a.integer().required(),
    snsType: a.enum(Sns.Types.map((type) => type.slug)),
    url: a.string().required(),
  })
  .identifier([ "id" ])
  .authorization((allow) => [ allow.guest().to([ "read" ]) ])

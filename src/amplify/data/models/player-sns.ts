import { a } from "@aws-amplify/backend"
import { SnsTypes } from "../../shared/constants"

export const PlayerSns = a
  .model({
    id: a.integer().required(),
    playerId: a.integer().required(),
    snsType: a.enum(SnsTypes.map((type) => type.slug)),
    url: a.string().required(),
  })
  .identifier([ "id" ])
  .authorization((allow) => [ allow.guest().to([ "read" ]) ])

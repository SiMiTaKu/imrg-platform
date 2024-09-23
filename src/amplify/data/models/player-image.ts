import { a } from "@aws-amplify/backend"
import { Image } from "../../shared/constants"

export const PlayerImage = a
  .model({
    id: a.integer().required(),
    playerId: a.integer().required(),
    order: a.integer().required(),
    imageType: a.enum(Image.Types),
  })
  .identifier([ "id", "playerId" ])
  .authorization((allow) => [ allow.guest().to([ "read" ]) ])

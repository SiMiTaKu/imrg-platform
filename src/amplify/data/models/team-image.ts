import { a } from "@aws-amplify/backend"
import { Image } from "$shared/constants"

export const TeamImage = a
  .model({
    id: a.integer().required(),
    teamId: a.integer().required(),
    order: a.integer().required(),
    imageType: a.enum(Image.Types),
  })
  .identifier([ "id" ])
  .authorization((allow) => [ allow.guest().to([ "read" ]) ])

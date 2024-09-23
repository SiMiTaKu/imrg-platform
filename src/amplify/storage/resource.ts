import { defineStorage } from "@aws-amplify/backend"

export const storage = defineStorage({
  name: "imrg",
  access: (allow) => ({
    "player/*": [
      allow.guest.to([ "read" ]), allow.entity("identity").to([ "read", "write", "delete" ]),
    ],
    "team/*": [
      allow.guest.to([ "read" ]), allow.entity("identity").to([ "read", "write", "delete" ]),
    ],
  }),
})

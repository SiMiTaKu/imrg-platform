import { defineStorage } from "@aws-amplify/backend"

export const storage = defineStorage({
  name: "imrg",
  access: (allow) => ({
    "1/*": [
      allow.guest.to([ "read", "write" ]), allow.entity("identity").to([ "read", "write", "delete" ]),
    ],
  }),
})

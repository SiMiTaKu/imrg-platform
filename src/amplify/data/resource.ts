import { type ClientSchema, a, defineData } from "@aws-amplify/backend"
import { Player } from "./models/player"
import { PlayerHistory } from "./models/player-history"
import { PlayerImage } from "./models/player-image"
import { PlayerSns } from "./models/player-sns"
import { PlayerTeam } from "./models/player-team"
import { PlayerVideo } from "./models/player-video"
import { Team } from "./models/team"
import { TeamHistory } from "./models/team-history"
import { TeamImage } from "./models/team-image"
import { TeamSns } from "./models/team-sns"
import { TeamVideo } from "./models/team-video"

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update",
and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Player: Player,
  PlayerHistory: PlayerHistory,
  PlayerImage: PlayerImage,
  PlayerSns: PlayerSns,
  PlayerTeam: PlayerTeam,
  PlayerVideo: PlayerVideo,
  Team: Team,
  TeamHistory: TeamHistory,
  TeamImage: TeamImage,
  TeamSns: TeamSns,
  TeamVideo: TeamVideo,
})

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: { defaultAuthorizationMode: "iam" },
})

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>

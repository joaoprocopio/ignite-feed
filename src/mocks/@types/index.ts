import type MirageSchema from "miragejs/orm/schema"
import type { Registry as MirageRegistry, Server as MirageServer } from "miragejs"

import { models } from "~/mocks/models"
import { factories } from "~/mocks/factories"

export type Registry = MirageRegistry<typeof models, typeof factories>
export type Schema = MirageSchema<Registry>
export type Server = MirageServer<Registry>

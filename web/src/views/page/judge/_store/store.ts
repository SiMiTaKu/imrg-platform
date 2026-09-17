import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'
import { ExecutionDeduct } from '../_model/execution-deduct'

export const executionDeduct: Writable<ExecutionDeduct> = writable(ExecutionDeduct.init())

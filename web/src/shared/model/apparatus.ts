import type { Apparatus as APPARATUS } from '../config/apparatus'

/** 手具のどれか1つ */
export type Apparatus = (typeof APPARATUS)[keyof typeof APPARATUS]

/** 手具の slug（`stick` / `ring` / `rope` / `club`） */
export type ApparatusSlug = Apparatus['slug']

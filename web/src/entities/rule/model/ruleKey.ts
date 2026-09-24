/**
 * 規則集の鍵の木。どの章がどの項を持ち、どの項がどの条を持つかを、ここだけで決める。
 *
 * @remarks
 * 冊子の章立てそのままに、章 → 項 → 条 → 号 の4段で並べてある。
 * 子を持たない節点は空の `{}`。
 *
 * **ここが唯一の正**。骨格（`api/structure`）も本文（`api/content`）も、
 * この木に無い鍵を書けず、この木にある鍵を書き漏らすと型で落ちる。
 * 節を増やすとき・減らすときは、まずここを直す
 */
export const RULE_KEY_TREE = {
  competition: {
    general: {
      purpose: {},
      amendment: {},
    },
    organization: {
      competitions: {},
    },
    conduct: {
      operation: {},
      entry: {},
      compulsoryRoutine: {},
      unwrittenMatters: {},
      flags: {},
      judgeSelection: {},
      competitionDirector: {},
      officialDuties: {},
      appealJury: {},
      rulings: {},
      scorePublication: {},
      audioEquipment: {},
      meetings: {},
      venue: {},
      equipment: {},
    },
    event: {
      guidelines: {},
      schedule: {},
      format: {},
      entryRules: {},
      musicEquipment: {},
      accident: {},
      areaAccess: {},
      ranking: {},
      tiebreak: {},
    },
    awards: {
      ceremony: {},
      medals: {},
    },
    gymnast: {
      regulations: {},
      registration: {},
      eligibility: {},
      duties: {},
      events: {},
      attire: {},
      clubMark: {},
      discipline: {},
    },
    coach: {
      manager: {},
      discipline: {},
      violation: {},
    },
    apparatus: {
      equipmentStandards: {},
      specifications: {},
      inspection: {},
      spare: {},
    },
    other: {
      routine: {},
      bodyElement: {},
      tumblingElement: {},
      music: {},
      score: {},
      duration: {},
      gymnastCount: {},
    },
    misc: {
      otherIssues: {},
    },
  },
  basics: {
    characteristics: {},
    techniques: {
      flexibility: {},
      speed: {},
      interval: {},
      jumpingPower: {},
      weightShift: {},
      tensionAndRelease: {},
      breathing: {},
      powerfulMovement: {},
      originality: {},
    },
  },
  scoring: {
    general: {
      role: {},
    },
    judges: {
      competition: {},
      regulations: {},
      meeting: {},
      oath: {},
      panel: {},
      superior: {},
      president: {},
      difficulty: {},
      artistry: {},
      execution: {},
      line: {},
      time: {},
      reserve: {},
      seating: {},
    },
    common: {
      method: {},
      baseScore: {},
      time: {},
      startTime: {},
      entrance: {},
      outOfBounds: {},
      uniform: {},
      music: {},
      apparatus: {},
      teamSize: {},
      forbidden: {},
      discipline: {},
    },
    group: {
      composition: {},
      requirements: {
        freeHand: {},
        acrobatic: {},
        acrobaticCount: {},
        acrobaticTypes: {},
        formation: {},
        start: {},
        finish: {},
        music: {},
      },
      scoreAllocation: {},
      difficulty: {
        value: {},
        freeHand: {},
        acrobatic: {},
        bonus: {},
      },
      artistry: {
        variety: {},
        expression: {},
        other: {},
        deductions: {},
      },
      execution: {
        impression: {},
        bodyTechnique: {},
        harmony: {},
        interruption: {},
        prohibition: {},
        deductions: {},
      },
    },
    individual: {
      composition: {},
      requirements: {},
      apparatusHandling: {},
      scoreAllocation: {},
      difficulty: {},
      artistry: {},
      execution: {},
    },
    difficultyTable: {
      freeHand: {
        jump: {},
        balance: {},
        handstand: {},
        flexibility: {},
      },
      acrobatic: {
        forward: {},
        backward: {},
        sideward: {},
        saltoSeries: {},
        connectedSeries: {},
      },
      illustrations: {
        freeHand: {},
        acrobatic: {},
      },
    },
    forms: {
      sheets: {},
      chiefJudge: {},
    },
    freeHand: {
      rules: {},
      allocation: {},
      judges: {},
      judgeRoles: {},
      composition: {
        routine: {},
        requirements: {},
        acrobatic: {},
      },
      difficulty: {
        table: {},
      },
      artistry: {},
      execution: {
        deductionTable: {},
      },
      difficultyFigures: {
        jump: {},
        flexibility: {},
        balance: {},
        handstand: {},
        turn: {},
        acrobatic: {},
      },
      scoreForms: {},
    },
  },
  amendments: {
    junior: {
      prohibited: {},
      requirement: {},
      specialDifficulty: {},
      relaxation: {},
      apparatus: {},
    },
    elementary: {
      groupFree: {},
      scoreSheet: {},
    },
  },
  appendix: {
    judge: {
      purpose: {},
      duties: {},
      authority: {},
      eligibility: {},
      course: {},
      briefing: {},
      validity: {},
      renewal: {},
      suspension: {},
      demotion: {},
      application: {},
      fee: {},
      card: {},
      supplementary: {},
      feeTable: {},
    },
    registration: {
      purpose: {},
      memberTypes: {},
      eligibility: {},
      procedure: {},
      dualAffiliation: {},
      delegation: {},
      fee: {},
      feeTable: {},
      memberCode: {},
      applicationPeriod: {},
      validity: {},
      unregistered: {},
      foreigners: {},
      affiliation: {},
      transferNotice: {},
      transferRestriction: {},
      participation: {},
      changeNotice: {},
      reviewCommittee: {},
      refusal: {},
      amendment: {},
      supplementary: {},
      memberTypeNotes: {},
    },
    athlete: {
      purpose: {},
      definition: {},
      spirit: {},
      categories: {},
      national: {},
      general: {},
      jocContract: {},
      portrait: {},
      commercial: {},
      commercialNotice: {},
      prohibited: {},
      prizeMoney: {},
      rights: {},
      supplementary: {},
    },
    antiDoping: {
      worldCode: {},
      scope: {},
      obligations: {},
      mutualRecognition: {},
      violation: {},
      sanctions: {},
      procedure: {},
      notification: {},
      appeal: {},
      review: {},
      interpretation: {},
      dates: {},
    },
  },
} as const

/** 鍵の木の形 */
type KeyTree = { readonly [key: string]: KeyTree }

/**
 * 木を点でつないだ鍵の並びにほどく。
 *
 * @remarks
 * `{ basics: { characteristics: {} } }` から
 * `'basics' | 'basics.characteristics'` を作る
 */
type Paths<T extends KeyTree> = {
  [K in keyof T & string]: keyof T[K] extends never ? K : K | `${K}.${Paths<T[K]>}`
}[keyof T & string]

/**
 * 規則の条文を指す鍵。
 *
 * @remarks
 * `basics.characteristics` のような、点でつないだ英字の名前。
 * 骨格（どこに何があるか）と本文（何が書いてあるか）を、この鍵でつなぐ
 */
export type RuleKey = Paths<typeof RULE_KEY_TREE>

/** 章の鍵。冊子の「1 競技規則」「2 新体操の特性とその基本」など */
export type RuleChapterKey = keyof typeof RULE_KEY_TREE

/**
 * ある鍵のすぐ下にぶら下がる鍵。孫は含まない。
 *
 * @remarks
 * 章に条をぶら下げる、項に別の項の条をぶら下げる、といった書き方を型で弾く
 */
export type RuleChildKey<K extends RuleKey> = {
  [Child in RuleKey]: Child extends `${K}.${infer Rest}`
    ? Rest extends `${string}.${string}`
      ? never
      : Child
    : never
}[RuleKey]

/** 章の下にぶら下がる項の鍵 */
export type RuleArticleKey<C extends RuleChapterKey> = RuleChildKey<C>

/** 項の下にぶら下がる条の鍵 */
export type RuleSectionKey<A extends RuleKey> = RuleChildKey<A>

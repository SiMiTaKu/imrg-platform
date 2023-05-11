import { writable } from 'svelte/store';

export const executionDeduct = writable({
  beautifulPose:       { title: "美しい姿勢",              value: undefined },
  flexibility:         { title: "柔軟性",                 value: undefined },
  naturalMovement:     { title: "動きの技術（自然・幅）",    value: undefined },
  bendingWeight:       { title: "動きの技術（膝の踏み込み）", value: undefined },
  jumpingHeight:       { title: "跳躍の高さ",              value: undefined },
  bodyControl:         { title: "四肢の制御",              value: undefined },
  heelRaise:           { title: "かかとの引き上げ",         value: undefined },
  weaknessAndStrength: { title: "張りや活気、間、アクセント", value: undefined },
  connectMovement:     { title: "運動のつなぎの技術",        value: undefined },
  apparatusControl:    { title: "自然な手具操作に欠ける",    value: undefined },
  musicImage:          { title: "音楽のイメージ",           value: undefined },
  miss:                { title: "ミスによる減点",           value: undefined },
})


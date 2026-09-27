import type { GlossaryGroup } from '../../model/glossary'

/**
 * 用語集（日本語）。
 *
 * @remarks
 * 読みと意味は `~/imrg/imrg-hub/knowledge/language/glossary-ja-en.md` と
 * `~/imrg/imrg-hub/vendor/rulebook/2025/` から起こした。説明は自分の言葉で書いている。
 *
 * `aliases` には、よくある誤記と英語を入れてある。
 * 検索で「体型移動」と打った人にも「隊形移動」が出るようにするため
 */
export const GLOSSARY_JA: readonly GlossaryGroup[] = [
  {
    name: '競技と種目',
    terms: [
      {
        term: '男子新体操',
        reading: 'だんししんたいそう',
        summary: '日本で生まれた競技。5人でそろえる団体と、手具を1つ持つ個人がある。',
        aliases: ["Men's Rhythmic Gymnastics", 'MRG'],
        to: 'basics',
      },
      {
        term: '団体',
        summary: '5人で行う種目。手具は持たない。演技時間は2分15秒から2分30秒。',
        aliases: ['Group', '団体競技'],
        to: 'group',
      },
      {
        term: '個人',
        summary: '1人で行う種目。手具を1つ持つ。演技時間は1分15秒から1分30秒。',
        aliases: ['Individual', '個人競技'],
        to: 'individual',
      },
      {
        term: '演技面',
        reading: 'えんぎめん',
        summary: '演技をする場所。内側13メートル四方。周りに2メートル以上の安全地帯をとる。',
        aliases: ['フロア', '13m'],
        to: 'basics',
      },
      {
        term: '手具',
        reading: 'しゅぐ',
        summary: '個人が持つ道具。スティック、リング、ロープ、クラブの4種類。',
        aliases: ['Apparatus', 'しゅぐ'],
        to: 'individual',
      },
    ],
  },
  {
    name: '動きの種類',
    terms: [
      {
        term: '徒手',
        reading: 'としゅ',
        summary: '手具を持たずに行う動き。団体の演技はまるごとこれにあたる。',
        aliases: ['Toshu', '徒手体操', 'としゅ'],
        to: 'toshu',
      },
      {
        term: '徒手系',
        reading: 'としゅけい',
        summary: '跳躍、柔軟、バランス、倒立など、体だけで行う要素のまとまり。',
        to: 'group.requirements',
      },
      {
        term: '転回系',
        reading: 'てんかいけい',
        summary: '宙返りや転回など、体を回転させる要素のまとまり。助走もこれに含む。',
        aliases: ['タンブリング'],
        to: 'group.requirements',
      },
      {
        term: '隊形移動',
        reading: 'たいけいいどう',
        summary: '演技の途中で並び方を変えること。団体では違う隊形を5つ以上入れる決まり。',
        aliases: ['体型移動', '体形移動', '体系移動', 'たいけいいどう'],
        to: 'group.formation',
      },
      {
        term: 'シリーズ',
        summary: '1人ずつ、またはグループごとに、途切れずに次々と転回系を行うもの。',
        to: 'group.requirements',
      },
      {
        term: '交差技',
        reading: 'こうさわざ',
        summary: '他の人の上を、転回しながら跳び越える技。',
        to: 'group.requirements',
      },
      {
        term: '組・組立運動',
        reading: 'くみ・くみたてうんどう',
        summary: '2人以上が組んで、体重や力を利用し合う動き。触れたところから転回系として扱う。',
        aliases: ['組立'],
        to: 'group.requirements',
      },
      {
        term: '同時技',
        reading: 'どうじわざ',
        summary: '全員が同時に始める転回系。終わりは同時でも別々でもよい。',
        to: 'group.requirements',
      },
    ],
  },
  {
    name: '基本徒手',
    terms: [
      {
        term: '基本徒手',
        reading: 'きほんとしゅ',
        summary: '徒手体操の土台になる8つの動き。大きく、自然に、美しくの順に身につける。',
        to: 'toshu',
      },
      {
        term: '振動',
        reading: 'しんどう',
        summary: 'すべての土台。膝、手の振り、胸の含み、頭の入れを合わせる。',
        aliases: ['Shindo'],
        to: 'toshu',
      },
      {
        term: '胸後反',
        reading: 'きょうこうはん',
        summary: '膝の屈伸の強さと、体のしなりを見せる動き。',
        aliases: ['Kyokohan'],
        to: 'toshu',
      },
      {
        term: '上下肢',
        reading: 'じょうかし',
        summary: '平面の動きでいちばん大きい徒手。',
        aliases: ['Jokashi'],
        to: 'toshu',
      },
      {
        term: '蛇動',
        reading: 'じゃどう',
        summary: '動きの流れと幅を見せる。「蛇道」ではなく動くの動。',
        aliases: ['Jado', '蛇道'],
        to: 'toshu',
      },
      {
        term: '体回旋',
        reading: 'たいかいせん',
        summary: '立体的な動きでいちばん大きい徒手。',
        aliases: ['Taikaisen'],
        to: 'toshu',
      },
      {
        term: '斜前屈',
        reading: 'しゃぜんくつ',
        summary: '深さと重さを見せる動き。',
        aliases: ['Shazenkutsu'],
        to: 'toshu',
      },
      {
        term: '前倒',
        reading: 'ぜんとう',
        summary: '前に踏み出して体を倒す姿勢。倒れるの倒。',
        aliases: ['Zento', '前頭'],
        to: 'toshu',
      },
      {
        term: '側倒',
        reading: 'そくとう',
        summary: '横に開いて体を倒す姿勢。つま先は外を向く。',
        aliases: ['Sokuto', '側頭'],
        to: 'toshu',
      },
    ],
  },
  {
    name: '採点',
    terms: [
      {
        term: '難度',
        reading: 'なんど',
        summary: '技の難しさ。AからEの5段階で、0.1点から0.7点。',
        aliases: ['D', 'Difficulty'],
        to: 'score.difficulty',
      },
      {
        term: '価値点',
        reading: 'かちてん',
        summary: '難度そのものの点。徒手系3つと転回系3つ、合わせて6つまで数える。',
        to: 'score.difficulty',
      },
      {
        term: '加点',
        reading: 'かてん',
        summary: '難度の値に表れない価値に付く点。手以外での投げ受けなど、1つ0.10点。',
        aliases: ['ボーナス', 'Bonus'],
        to: 'score.bonus',
      },
      {
        term: '構成',
        reading: 'こうせい',
        summary: '演技の組み立て方に付く点。多様性と芸術性を見る。上位で9点台。',
        aliases: ['A', 'Artistry', '芸術'],
        to: 'score.artistry',
      },
      {
        term: '実施',
        reading: 'じっし',
        summary: '正確さに付く点。減点方式で、ミスの分が引かれる。上位で9点台。',
        aliases: ['E', 'Execution'],
        to: 'score.execution',
      },
      {
        term: '要求要素',
        reading: 'ようきゅうようそ',
        summary: '必ず入れなければならない動き。抜けると減点される。',
        to: 'group.requirements',
      },
      {
        term: '投げ上げ',
        reading: 'なげあげ',
        summary: '手具を投げること。投げたところから2メートル以上でないと数えない。',
        to: 'individual.requirements',
      },
      {
        term: 'ころがし',
        summary: '手具を体や床にころがす操作。決められた長さに足りないと数えない。',
        to: 'individual.requirements',
      },
      {
        term: 'プロペラ回旋',
        reading: 'プロペラかいせん',
        summary: 'スティックやクラブを、プロペラのように回す操作。2回以上が要求要素。',
        to: 'individual.requirements',
      },
      {
        term: '基準点',
        reading: 'きじゅんてん',
        summary: '審判が協議しても決まらないときに使う点。有効点の平均と主任審判の点から出す。',
      },
    ],
  },
]

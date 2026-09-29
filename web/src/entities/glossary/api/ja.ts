import type { GlossaryTerm } from '../model/glossary'

/**
 * 用語集（日本語）。
 *
 * @remarks
 * 辞書のように、読みのあいうえお順で引けるようにする。
 * 並べる順とあ行・か行の分け方は `reading` から画面の側で決めるので、ここでの並びは読みやすさのため。
 * すべての語に `reading`（ひらがな）を付ける。付け忘れると並べられないので、テストで見ている。
 *
 * ルールの外の言葉も入れてよい。`slug` は語ごとのページの URL になるので、一度決めたら変えない。
 *
 * 読みと意味は `~/imrg/imrg-hub/knowledge/language/glossary-ja-en.md` と
 * `~/imrg/imrg-hub/vendor/rulebook/2025/` から起こした。説明は自分の言葉で書いている。
 *
 * `aliases` には、よくある誤記と英語を入れてある。
 * 検索で「体型移動」と打った人にも「隊形移動」が出るようにするため
 */
export const GLOSSARY_JA: readonly GlossaryTerm[] = [
  {
    slug: 'individual_all_around',
    term: '個人総合',
    reading: 'こじんそうごう',
    summary:
      '個人の4種目すべてを1つずつ演技し、その得点の合計で順位を決める競技。大会によっては2種目の合計のこともある。',
    to: 'individual',
  },
  {
    slug: 'floor_area',
    term: '演技面',
    reading: 'えんぎめん',
    summary: '演技をする場所。内側13メートル四方。周りに2メートル以上の安全地帯をとる。',
    aliases: ['フロア', '13m'],
    to: 'basics',
  },
  {
    slug: 'difficulty_value',
    term: '価値点',
    reading: 'かちてん',
    summary: '難度そのものの得点。徒手系3つと転回系3つ、合わせて6つまで数える。',
    to: 'score.difficulty',
  },
  {
    slug: 'bonus',
    term: '加点',
    reading: 'かてん',
    summary: '難度の値に表れない価値に付く得点。手以外での投げ受けなど、1つ0.10点。',
    aliases: ['ボーナス', 'Bonus'],
    to: 'score.bonus',
  },
  {
    slug: 'reference_score',
    term: '基準点',
    reading: 'きじゅんてん',
    summary: '審判が協議しても決まらないときに使う得点。有効点の平均と主任審判の得点から出す。',
  },
  {
    slug: 'basic_toshu',
    term: '基本徒手',
    reading: 'きほんとしゅ',
    summary:
      '徒手体操の土台になる動き。振動、胸後反、上下肢、蛇動などがある。大きく、自然に、美しくの順に身につける。',
    to: 'toshu',
  },
  {
    slug: 'kyokohan',
    term: '胸後反',
    reading: 'きょうこうはん',
    summary: '膝の屈伸の強さと、身体のしなりを見せる動き。',
    aliases: ['Kyokohan'],
    to: 'toshu',
  },
  {
    slug: 'partner_lifts',
    term: '組・組立運動',
    reading: 'くみ・くみたてうんどう',
    summary: '2人以上が組んで、体重や力を利用し合う動き。触れたところから転回系として扱う。',
    aliases: ['組立'],
    to: 'group.requirements',
  },
  {
    slug: 'crossing',
    term: '交差技',
    reading: 'こうさわざ',
    summary: '他の人の上を、転回しながら跳び越える技。',
    to: 'group.requirements',
  },
  {
    slug: 'artistry',
    term: '構成',
    reading: 'こうせい',
    summary:
      '演技の組み立て方に付く得点。英語のArtistryの頭文字でAと呼ぶ。多様性と芸術性を見る。上位で9点台。',
    aliases: ['A', 'Artistry', '芸術'],
    to: 'score.artistry',
  },
  {
    slug: 'individual',
    term: '個人',
    reading: 'こじん',
    summary:
      '1人で行う種目。スティック・リング・ロープ・クラブの4種目があり、1つの演技で手具を1つ使う。演技時間は1分15秒から1分30秒。',
    aliases: ['Individual', '個人競技'],
    to: 'individual',
  },
  {
    slug: 'roll',
    term: 'ころがし',
    reading: 'ころがし',
    summary: '手具を身体や床にころがす操作。決められた長さに足りないと数えない。',
    to: 'individual.requirements',
  },
  {
    slug: 'shazenkutsu',
    term: '斜前屈',
    reading: 'しゃぜんくつ',
    summary: '深さと重さを見せる動き。',
    aliases: ['Shazenkutsu'],
    to: 'toshu',
  },
  {
    slug: 'apparatus',
    term: '手具',
    reading: 'しゅぐ',
    summary:
      '個人が持つ道具。スティック、リング、ロープ、クラブの4種類があり、それぞれが1つの種目になる。',
    aliases: ['Apparatus', 'しゅぐ'],
    to: 'individual',
  },
  {
    slug: 'series',
    term: 'シリーズ',
    reading: 'しりーず',
    summary: '1人ずつ、またはグループごとに、途切れずに次々と転回系を行うもの。',
    to: 'group.requirements',
  },
  {
    slug: 'shindo',
    term: '振動',
    reading: 'しんどう',
    summary: 'すべての土台。膝、手の振り、胸の含み、頭の入れを合わせる。',
    aliases: ['Shindo'],
    to: 'toshu',
  },
  {
    slug: 'execution',
    term: '実施',
    reading: 'じっし',
    summary:
      '正確さに付く得点。英語のExecutionの頭文字でEと呼ぶ。減点方式で、ミスの分が減点される。上位で9点台。',
    aliases: ['E', 'Execution'],
    to: 'score.execution',
  },
  {
    slug: 'jado',
    term: '蛇動',
    reading: 'じゃどう',
    summary: '動きの流れと幅を見せる。「蛇道」ではなく動くの動。',
    aliases: ['Jado', '蛇道'],
    to: 'toshu',
  },
  {
    slug: 'jokashi',
    term: '上下肢',
    reading: 'じょうかし',
    summary: '平面の動きでいちばん大きい徒手。',
    aliases: ['Jokashi'],
    to: 'toshu',
  },
  {
    slug: 'zento',
    term: '前倒',
    reading: 'ぜんとう',
    summary: '前に踏み出して身体を倒す姿勢。倒れるの倒。',
    aliases: ['Zento', '前頭'],
    to: 'toshu',
  },
  {
    slug: 'sokuto',
    term: '側倒',
    reading: 'そくとう',
    summary: '横に開いて身体を倒す姿勢。つま先は外を向く。',
    aliases: ['Sokuto', '側頭'],
    to: 'toshu',
  },
  {
    slug: 'taikaisen',
    term: '体回旋',
    reading: 'たいかいせん',
    summary: '立体的な動きでいちばん大きい徒手。',
    aliases: ['Taikaisen'],
    to: 'toshu',
  },
  {
    slug: 'formation_change',
    term: '隊形移動',
    reading: 'たいけいいどう',
    summary: '演技の途中で並び方を変えること。団体では違う隊形を5つ以上入れる決まり。',
    aliases: ['体型移動', '体形移動', '体系移動', 'たいけいいどう'],
    to: 'group.formation',
  },
  {
    slug: 'mens_rhythmic_gymnastics',
    term: '男子新体操',
    reading: 'だんししんたいそう',
    summary: '日本で生まれた競技。5人でそろえる団体と、手具を操る個人がある。',
    aliases: ["Men's Rhythmic Gymnastics", 'MRG'],
    to: 'basics',
  },
  {
    slug: 'group',
    term: '団体',
    reading: 'だんたい',
    summary: '5人で行う種目。手具は持たない。演技時間は2分15秒から2分30秒。',
    aliases: ['Group', '団体競技'],
    to: 'group',
  },
  {
    slug: 'tumbling_elements',
    term: '転回系',
    reading: 'てんかいけい',
    summary: '宙返りや転回など、身体を回転させる要素のまとまり。助走もこれに含む。',
    aliases: ['タンブリング'],
    to: 'group.requirements',
  },
  {
    slug: 'toshu',
    term: '徒手',
    reading: 'としゅ',
    summary: '手具を持たずに行う動き。団体の演技はまるごとこれにあたる。',
    aliases: ['Toshu', '徒手体操', 'としゅ'],
    to: 'toshu',
  },
  {
    slug: 'toshu_elements',
    term: '徒手系',
    reading: 'としゅけい',
    summary: '跳躍、柔軟、バランス、倒立など、身体だけで行う要素のまとまり。',
    to: 'group.requirements',
  },
  {
    slug: 'simultaneous',
    term: '同時技',
    reading: 'どうじわざ',
    summary: '全員が同時に始める転回系。終わりは同時でも別々でもよい。',
    to: 'group.requirements',
  },
  {
    slug: 'throw',
    term: '投げ上げ',
    reading: 'なげあげ',
    summary: '手具を投げること。投げたところから2メートル以上でないと数えない。',
    to: 'individual.requirements',
  },
  {
    slug: 'difficulty',
    term: '難度',
    reading: 'なんど',
    summary: '技の難しさ。英語のDifficultyの頭文字でDと呼ぶ。AからEの5段階で、0.1点から0.7点。',
    aliases: ['D', 'Difficulty'],
    to: 'score.difficulty',
  },
  {
    slug: 'propeller',
    term: 'プロペラ回旋',
    reading: 'ぷろぺらかいせん',
    summary: 'スティックやクラブを、プロペラのように回す操作。2回以上が要求要素。',
    to: 'individual.requirements',
  },
  {
    slug: 'requirements',
    term: '要求要素',
    reading: 'ようきゅうようそ',
    summary: '必ず入れなければならない動き。抜けると減点される。',
    to: 'group.requirements',
  },
]

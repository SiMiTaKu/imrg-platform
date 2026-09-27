import type { GuideQuiz } from '../../model/quiz'

/**
 * 理解度チェック（日本語）。章ごとに、その章の最後のレッスンで出す。
 *
 * @remarks
 * 問題は各ページに書いたことからだけ出す。数値は
 * `~/imrg/imrg-hub/vendor/rulebook/2025/` で確かめたものと同じ。
 * ページの数値を直したら、ここも直す
 */
export const GUIDE_QUIZ_JA: GuideQuiz = {
  basics: [
    {
      question: '団体は何人で演技しますか。',
      choices: ['3人', '4人', '5人', '6人'],
      answer: 2,
      explanation: '5人です。4人でも出場できますが、減点されます。',
      from: 'basics',
    },
    {
      question: '演技をする場所（演技面）の広さはどれですか。',
      choices: ['10メートル四方', '12メートル四方', '13メートル四方', '15メートル四方'],
      answer: 2,
      explanation: '内側13メートル四方です。周りに2メートル以上の安全地帯をとります。',
      from: 'basics',
    },
    {
      question: '団体が持つ手具はどれですか。',
      choices: ['スティック', 'リング', 'クラブ', '何も持たない'],
      answer: 3,
      explanation: '団体は手具を持ちません。5人の体の動きだけで演技します。',
      from: 'basics',
    },
    {
      question: '個人の演技時間はどれですか。',
      choices: ['1分〜1分15秒', '1分15秒〜1分30秒', '2分15秒〜2分30秒', '3分ちょうど'],
      answer: 1,
      explanation: '個人は1分15秒から1分30秒です。団体は2分15秒から2分30秒です。',
      from: 'basics',
    },
  ],
  techniques: [
    {
      question: '「締めと抜き」と呼ばれるのは、どの技術ですか。',
      choices: ['間合い', '重心移動', '筋の緊張と解緊', '跳躍力'],
      answer: 2,
      explanation: '力を入れて締めたら、次に抜く。この繰り返しが動きのリズムの根っこです。',
      from: 'techniques',
    },
    {
      question: '腕を上げるとき、呼吸はどうするのが自然ですか。',
      choices: ['息を吸う', '息を吐く', '息を止める'],
      answer: 0,
      explanation: '吸うと胸が開き、顔も自然に上がります。腕を下ろすときに吐きます。',
      from: 'techniques',
    },
    {
      question: '男子新体操でいう「力強い動き」とは、どれですか。',
      choices: ['腕力が強いこと', '深く、大きく動くこと', 'とにかく速く動くこと'],
      answer: 1,
      explanation: '自然な動きにリズムを加え、深く大きく動くことで力強さが生まれます。',
      from: 'techniques',
    },
    {
      question: '速い動きが間合いなく続くと、どう見えますか。',
      choices: ['単調に見える', '難度が上がる', '必ず得点が上がる'],
      answer: 0,
      explanation: 'ゆっくり伸びる時間を挟むと、次の速い動きが際立ちます。',
      from: 'techniques',
    },
  ],
  toshu: [
    {
      question: '「徒手」とは、どういう意味ですか。',
      choices: ['手具を持たずに行う動き', '宙返りのこと', '手具を投げること'],
      answer: 0,
      explanation: '徒手は「手ぶら」という意味です。団体の演技はまるごと徒手体操にあたります。',
      from: 'toshu',
    },
    {
      question: '基本徒手の「蛇動」の読み方はどれですか。',
      choices: ['へびどう', 'じゃどう', 'だどう'],
      answer: 1,
      explanation: '「じゃどう」です。動くの「動」で、「蛇道」ではありません。',
      from: 'toshu',
    },
    {
      question: '徒手を身につける順番として正しいものはどれですか。',
      choices: ['美しく → 大きく → 自然に', '大きく → 自然に → 美しく', '自然に → 美しく → 大きく'],
      answer: 1,
      explanation: '大きく、自然に、美しく。この順に身につけていきます。',
      from: 'toshu',
    },
  ],
  score: [
    {
      question: '実施（E）の「E」は、英語で何の頭文字ですか。',
      choices: ['Excellent', 'Execution', 'Energy'],
      answer: 1,
      explanation: 'Execution（エグゼキューション）です。D は Difficulty、A は Artistry です。',
      from: 'score',
    },
    {
      question: 'E難度の技の価値点はどれですか。',
      choices: ['0.3', '0.5', '0.7', '1.0'],
      answer: 2,
      explanation: 'A=0.1、B=0.2、C=0.3、D=0.5、E=0.7 です。Eより上はありません。',
      from: 'score.difficulty',
    },
    {
      question: '難度として数えられる技は、いくつまでですか。',
      choices: ['3つ', '6つ', '10個', '上限はない'],
      answer: 1,
      explanation: '徒手系から3つ、転回系から3つの、合わせて6つです。高いものから選ばれます。',
      from: 'score.difficulty',
    },
    {
      question: '投げの難度は、何で決まりますか。',
      choices: [
        '手具が空中で何回転したか',
        '投げた高さ',
        '投げてから受けるまでに、体を360度回す技をいくつ入れたか',
      ],
      answer: 2,
      explanation: '間に入れた技の数で決まります。0回ならA、4回以上ならEです。',
      from: 'score.difficulty',
    },
    {
      question: '個人で「手以外で受けた」ときの加点はいくつですか。',
      choices: ['0.10点', '0.20点', '0.30点'],
      answer: 0,
      explanation: '1つ当てはまるごとに0.10点です。上限はありません。',
      from: 'score.bonus',
    },
    {
      question: '団体で、着地でしりもちをついたときの減点はいくつですか。',
      choices: ['0.10点', '0.20点', '0.30点', '0.50点'],
      answer: 2,
      explanation: '1回につき0.30点です。軽く手をついたときは0.20点です。',
      from: 'score.execution',
    },
    {
      question: '高校生の上位の演技で、難度（D）は得点全体のどれくらいですか。',
      choices: ['約2割', '約5割', '約8割'],
      answer: 0,
      explanation: '約2割です。残りの8割は、構成（A）と実施（E）で決まります。',
      from: 'score',
    },
  ],
  group: [
    {
      question: '団体の演技に入れなければならない隊形は、最低いくつですか。',
      choices: ['3つ', '4つ', '5つ', '6つ'],
      answer: 2,
      explanation: '違う隊形を最低5つです。足りないと減点されます。',
      from: 'group.requirements',
    },
    {
      question: '団体の演技に入れる転回系は何回ですか。',
      choices: ['1回', '2回', '3回', '5回'],
      answer: 2,
      explanation: '3回です。始め方にも決まりがあり、同時と2段は必ず入れます。',
      from: 'group.requirements',
    },
    {
      question: '団体で、徒手系の難度が認められるのはどんなときですか。',
      choices: ['1人以上が行ったとき', '3人以上が行ったとき', '5人全員が行ったとき'],
      answer: 2,
      explanation: '5人全員が、同時か次々に行ったときです。転回系は3人以上で認められます。',
      from: 'score.difficulty',
    },
    {
      question: '5人が同時に同じ転回技を行うと、難度はどうなりますか。',
      choices: ['1ランク上がる', '変わらない', '1ランク下がる'],
      answer: 0,
      explanation: '1ランク上がります。そろえること自体が得点になります。',
      from: 'group',
    },
  ],
  individual: [
    {
      question: '投げ上げとして認められるのは、投げたところから何メートル以上ですか。',
      choices: ['1メートル', '2メートル', '3メートル'],
      answer: 1,
      explanation: '2メートル以上です。それより低いと投げに数えません。',
      from: 'individual.requirements',
    },
    {
      question: 'クラブで必ず入れる「ころがし」の長さはどれですか。',
      choices: ['50センチ以上', '1メートル以上', '6メートル以上'],
      answer: 0,
      explanation: 'クラブは50センチ以上です。スティックとリングは1メートル以上です。',
      from: 'individual.requirements',
    },
    {
      question: '個人で、手具に関係なく必ず入れる転回運動はどれですか。',
      choices: ['前方だけ', '前方と後方', '前方・後方・側方のすべて'],
      answer: 2,
      explanation: '前方・後方・側方の転回運動を、すべて入れます。',
      from: 'individual.requirements',
    },
    {
      question: 'ロープで必ず入れる「移動しながらの連続跳び」の条件はどれですか。',
      choices: ['3メートル以上で2回以上', '6メートル以上で3回以上', '10メートル以上で5回以上'],
      answer: 1,
      explanation: '6メートル以上移動しながら、3回以上続けて跳びます。',
      from: 'individual.requirements',
    },
  ],
}

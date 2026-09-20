<script lang="ts">
  import { HairStyle, Pose, type CharacterProfile } from '../model/character'

  const {
    character,
    size = 160,
    showApparatus = false,
  }: {
    character: CharacterProfile
    /** 描く大きさ（px）。縦横は同じ */
    size?: number
    /** 手具（スティック）を持たせるか */
    showApparatus?: boolean
  } = $props()

  // 5人の身長（165〜180cm）を 0.94〜1.06 の倍率に写す。並べたときに差が分かる程度に留める
  const scale = $derived(0.94 + ((character.heightCentimeter - 165) / 15) * 0.12)

  /** 跳んでいる人は地面から離れる */
  const isAirborne = $derived(character.pose === Pose.LEAP)
</script>

{#snippet head(centerX: number, centerY: number)}
  <!-- 顔は体と同じ色、髪はその人の色。髪の形が5人の描き分けの主役 -->
  <g transform="translate({centerX - 60} {centerY - 46})">
    <circle cx="60" cy="46" r="14" fill="currentColor" />
    <g fill={character.color}>
      {#if character.hair === HairStyle.SPIKY}
        <path
          d="M46 44 Q46 32 60 32 Q74 32 74 44 L74 40 L70 30 L65 36 L60 26 L55 36 L50 30 L46 40 Z"
        />
      {:else if character.hair === HairStyle.BUZZ}
        <path d="M46 44 Q46 32 60 32 Q74 32 74 44 Q74 37 60 37 Q46 37 46 44 Z" />
      {:else if character.hair === HairStyle.WAVE}
        <path d="M46 44 Q46 32 60 32 Q74 32 74 44 L74 38 Q66 42 58 38 Q50 34 46 42 Z" />
        <path d="M72 38 Q80 44 77 54 Q73 46 70 42 Z" />
      {:else if character.hair === HairStyle.NEAT}
        <path d="M46 44 Q46 32 60 32 Q74 32 74 44 L74 38 Q62 30 52 36 L46 42 Z" />
        <path d="M62 33 L74 38 L74 34 Z" />
      {:else}
        <path d="M46 44 Q46 32 60 32 Q74 32 74 44 L74 38 Q60 30 46 38 Z" />
        <circle cx="77" cy="42" r="5" />
        <path d="M77 46 Q83 56 79 66 Q75 56 73 50 Z" />
      {/if}
    </g>
  </g>
{/snippet}

<svg
  class="figure"
  width={size}
  height={size}
  viewBox="0 0 120 160"
  role="img"
  aria-label="{character.name}（{character.specialty}）"
>
  <!-- 足元の影。浮いている人は小さく薄い -->
  <ellipse
    cx="60"
    cy="151"
    rx={isAirborne ? 14 : 24}
    ry={isAirborne ? 3 : 5}
    fill="currentColor"
    opacity={isAirborne ? 0.06 : 0.12}
  />

  <g transform="translate(60 152) scale({scale}) translate(-60 -152)">
    {#if character.pose === Pose.LEAP}
      <!-- 跳ぶ。前後に開いて空中で止まる -->
      <g class="limbs">
        <path d="M56 90 L94 72" />
        <path d="M62 92 L30 120" />
        <path d="M47 62 L18 48" />
        <path d="M73 62 L100 42" />
      </g>
      <path class="torso" d="M47 60 Q60 54 73 60 L70 92 Q59 96 50 92 Z" />
      <path d="M54 60 Q60 68 66 60 L63 56 Q60 60 57 56 Z" fill={character.color} />
      {@render head(60, 40)}
    {:else if character.pose === Pose.HANDSTAND}
      <!-- 倒立。手で支え、脚をまっすぐ上へ -->
      <g class="limbs">
        <path d="M49 90 L47 142" />
        <path d="M71 90 L73 142" />
        <path d="M55 60 L52 18" />
        <path d="M65 60 L68 18" />
      </g>
      <path class="torso" d="M49 88 Q60 94 71 88 L68 58 Q60 54 52 58 Z" />
      <path d="M54 86 Q60 78 66 86 L63 90 Q60 86 57 90 Z" fill={character.color} />
      {@render head(60, 116)}
    {:else if character.pose === Pose.SPLIT}
      <!-- 床で開脚。上体をまっすぐ立て、腕は横へ伸ばす -->
      <g class="limbs">
        <path d="M56 128 L14 140" />
        <path d="M64 128 L106 140" />
        <path d="M47 84 L18 96" />
        <path d="M73 84 L102 96" />
      </g>
      <path class="torso" d="M47 82 Q60 76 73 82 L70 130 Q60 134 50 130 Z" />
      <path d="M54 82 Q60 90 66 82 L63 78 Q60 82 57 78 Z" fill={character.color} />
      {@render head(60, 62)}
    {:else if character.pose === Pose.HOLD}
      <!-- 手具を掲げる -->
      {#if showApparatus}
        <line
          x1="98"
          y1="14"
          x2="88"
          y2="66"
          stroke={character.color}
          stroke-width="4"
          stroke-linecap="round"
        />
      {/if}
      <g class="limbs">
        <path d="M54 96 L48 146" />
        <path d="M66 96 L72 146" />
        <path d="M73 66 L93 26" />
        <path d="M47 68 L31 100" />
      </g>
      <path class="torso" d="M47 64 Q60 58 73 64 L70 98 Q60 102 50 98 Z" />
      <path d="M54 64 Q60 72 66 64 L63 60 Q60 64 57 60 Z" fill={character.color} />
      {@render head(60, 44)}
    {:else if character.pose === Pose.POINT}
      <!-- 指さす。ルールの案内役。片手を斜め上へ、もう片手は腰に -->
      <g class="limbs">
        <path d="M54 96 L50 146" />
        <path d="M66 96 L70 146" />
        <path d="M73 66 L98 40" />
        <path d="M47 68 L36 88 L50 96" />
      </g>
      <path class="torso" d="M47 64 Q60 58 73 64 L70 98 Q60 102 50 98 Z" />
      <path d="M54 64 Q60 72 66 64 L63 60 Q60 64 57 60 Z" fill={character.color} />
      {@render head(60, 44)}
    {:else}
      <!-- 立つ。肩を張って正面を向く -->
      <g class="limbs">
        <path d="M54 96 L50 146" />
        <path d="M66 96 L70 146" />
        <path d="M47 68 L37 102" />
        <path d="M73 68 L83 102" />
      </g>
      <path class="torso" d="M47 64 Q60 58 73 64 L70 98 Q60 102 50 98 Z" />
      <path d="M54 64 Q60 72 66 64 L63 60 Q60 64 57 60 Z" fill={character.color} />
      {@render head(60, 44)}
    {/if}
  </g>
</svg>

<style lang="scss">
  .figure {
    display: block;
    max-width: 100%;
    height: auto;

    // 体の線と面は文字色に合わせる。背景が変わっても浮かない
    color: map.get($gray, text);
  }

  .limbs path {
    fill: none;
    stroke: currentcolor;
    stroke-width: 8;
    stroke-linecap: round;
  }

  .torso {
    fill: currentcolor;
  }
</style>

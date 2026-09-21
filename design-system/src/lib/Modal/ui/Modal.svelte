<script lang="ts">
  import { onMount } from 'svelte'
  import type { Snippet } from 'svelte'
  import XIcon from '../../Icons/components/XIcon.svelte'

  /** 読み上げ用の名前。画面には出さない */
  interface Labels {
    /** 閉じるボタン（右上のばつ） */
    close: string
  }

  /** モーダルの引数 */
  interface Props {
    /** 見出し。読み上げのときのモーダルの名前にもなる */
    title: string
    /** 見出しを目で見えなくするか。読み上げには残る */
    titleHidden?: boolean
    /** 見出しの地の色。渡すと見出しを色の帯にする。省くと文字だけ */
    titleBackground?: string
    /** 中身の幅（px）。狭い画面では画面に収まるところまで縮む */
    width?: number
    /** 閉じたときに呼ぶ。ばつ・Esc・背景を押したときのどれでも呼ばれる */
    onclose: () => void
    /** 読み上げ用の名前。アイコンだけのボタンにも名前が要るため、使う側の言語で渡す */
    labels: Labels
    /** モーダルの中身 */
    children: Snippet
  }

  const {
    title,
    titleHidden = false,
    titleBackground,
    width = 720,
    onclose,
    labels,
    children,
  }: Props = $props()

  // 見出しと dialog をつなぐ id。同じ画面に2つ出しても重ならないよう Svelte に振ってもらう
  const titleId = $props.id()

  let dialog = $state<HTMLDialogElement>()
  let closeButton = $state<HTMLButtonElement>()

  onMount(() => {
    // 開く前に触っていた場所を覚えておき、閉じたらそこへ戻す
    const lastFocused = document.activeElement
    const lastOverflow = document.body.style.overflow

    dialog?.showModal()
    // showModal だけでは中身へ焦点が移るとは限らないので、ばつへ移す
    closeButton?.focus()
    // 開いている間は後ろの画面を動かさない
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = lastOverflow
      if (lastFocused instanceof HTMLElement) lastFocused.focus()
    }
  })

  /**
   * 閉じる。dialog の close から onclose が呼ばれる
   */
  const close = () => {
    dialog?.close()
  }

  // 背景を押して閉じる。
  // 中身の上で押し始めて背景で指を離したときに閉じないよう、押し始めた場所も見る
  let pressedOnBackdrop = false

  /**
   * 押し始めた場所が背景かどうかを覚える
   * @param event - 押し始めた出来事
   */
  const onpointerdown = (event: PointerEvent) => {
    pressedOnBackdrop = event.target === dialog
  }

  /**
   * 背景で押し始めて背景で離したときだけ閉じる
   * @param event - 押し終えた出来事
   */
  const onclick = (event: MouseEvent) => {
    if (pressedOnBackdrop && event.target === dialog) close()
  }
</script>

<!--
  背景を押して閉じるのは補助の手だて。Esc と右上のばつでも同じことができるので、
  鍵だけを使う人がここを押せなくても困らない
-->
<dialog
  bind:this={dialog}
  class="modal"
  style:--modal-width={`${width}px`}
  aria-labelledby={titleId}
  {onclose}
  {onpointerdown}
  {onclick}
>
  <div class="panel">
    <div class="head">
      <h2
        class="title"
        class:hidden={titleHidden}
        class:tinted={titleBackground !== undefined}
        style:--modal-title-background={titleBackground}
        id={titleId}
      >
        {title}
      </h2>
      <button
        bind:this={closeButton}
        class="close"
        type="button"
        aria-label={labels.close}
        onclick={close}
      >
        <XIcon size={24} color="gray" />
      </button>
    </div>

    <div class="body">
      {@render children()}
    </div>
  </div>
</dialog>

<style lang="scss">
  .modal {
    // スマホでも PC でも、画面からはみ出さないところまで縮める
    width: min(var(--modal-width), calc(100vw - #{$space-size-32}));
    max-width: none;
    max-height: calc(100vh - #{$space-size-32});
    padding: 0;
    border: 0;
    border-radius: $border-radius-8;
    background: $white;
    box-shadow: $black-box-shadow;
  }

  .modal::backdrop {
    background: rgb(0 0 0 / 70%);
  }

  .panel {
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - #{$space-size-32});
  }

  // 見出しは左、閉じるばつは右上。見出しを隠したときもばつは右上のまま
  .head {
    display: flex;
    gap: $space-size-16;
    align-items: flex-start;
    justify-content: flex-end;
    padding: $space-size-16 $space-size-16 0;
  }

  .title {
    flex: 1;
    min-width: 0;
    margin: 0;
    font-size: $font-size-20;
    color: map.get($gray, text);
  }

  .title.tinted {
    flex: 0 0 auto;
    padding: $space-size-4 $space-size-20;
    color: $white;
    border-radius: $border-radius-8;
    background: var(--modal-title-background);
  }

  // 目には見せず、読み上げにだけ残す
  .title.hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  .close {
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    border-radius: 999px;
    background: transparent;
    cursor: pointer;
  }

  .close:hover {
    background: map.get($gray, 50);
  }

  // 中身が長いときはここだけが動く。見出しとばつは動かさない
  .body {
    min-height: 0;
    padding: $space-size-16;
    overflow: auto;
  }
</style>

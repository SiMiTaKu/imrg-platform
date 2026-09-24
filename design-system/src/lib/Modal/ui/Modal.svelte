<script lang="ts">
  import { onMount } from 'svelte'
  import XIcon from '../../Icons/components/XIcon.svelte'
  import type { ModalProps } from '../model/props'

  const { title, titleVariant, titleBackground, width, onclose, labels, children }: ModalProps =
    $props()

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
    <h2
      class="title"
      class:tinted={titleVariant === 'tinted'}
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

  // ばつを角に置くための基準。中身が長いときは .body だけが動く
  .panel {
    position: relative;
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - #{$space-size-32});
  }

  .title {
    margin: 0;

    // 右上のばつに掛からないところで折り返す
    padding: $space-size-16 $space-size-56 0 $space-size-16;
    font-size: $font-size-20;
    color: map.get($gray, text);
  }

  .title.tinted {
    margin: $space-size-16 $space-size-56 0 $space-size-16;
    padding: $space-size-4 $space-size-20;
    color: $white;
    border-radius: $border-radius-8;
    background: var(--modal-title-background);
    align-self: flex-start;
  }

  // 見出しの長さや有無に関わらず、いつもモーダルの右上角に置く
  .close {
    position: absolute;
    top: $space-size-8;
    right: $space-size-8;
    display: grid;
    place-items: center;
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

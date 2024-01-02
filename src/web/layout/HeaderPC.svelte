<script lang="ts"></script>

<header id="common-header">
  <div class="header">
    <img
      class="header__icon"
      src="image/common/imrg-logo.png"
      alt="男子新体操国際化プロジェクト"
    />
    <div class="header__title">
      <span class="header__title--main">男子新体操国際化プロジェクト</span>
      <span class="header__title--sub"
        >Internationalize Men's Rhythmic Gymnastics</span
      >
    </div>
  </div>
</header>
<div id="common-header-space"></div>

<style lang="scss">
  #common-header-space {
    display: block;
    height: 80px;
    background: transparent;
  }

  #common-header {
    position: fixed;
    display: block;
    top: 0;
    width: 100%;
    height: 80px;
    background: white;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
    z-index: 1000;
  }

  .header {
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    font-size: 24px;

    &__icon {
      position: absolute;
      height: 80px;
      opacity: 0.1;
    }

    &__title {
      display: inline-block;
      margin-top: 8px;
      font-weight: bold;
      color: #555;
      vertical-align: top;

      &--main {
        display: block;
        font-size: 30px;
      }

      &--sub {
        display: block;
        font-size: 12px;
      }
    }
  }
</style>

<script lang='ts'>
  import { createCustomForm } from "$lib/common/custom-felte"
  import { onMount } from "svelte"

  let formElement: HTMLFormElement

  type FormValue = {
    interestCategories: string[];
    text: string;
    radioSample: string;
  };

  const { form, data } = createCustomForm({
    onSubmit: async (value: FormValue) => {
      console.log(value)
    },
  })

  const categories = [ "Sports",
    "Music",
    "Art",
    "Technology",
    "Travel" ]

  onMount(() => {
    console.log(formElement.elements)
  })
</script>

<div>
  <div>{JSON.stringify($data)}</div>
  <form bind:this={formElement} use:form>
    <fieldset data-felte-ignore>
      <legend>興味あるカテゴリ</legend>
      {#each categories as category, index (index)}
        <div>
          <input
            id={category}
            name='interestCategories'
            type='checkbox'
            value={category}
            on:change={(element) => {
              console.log(element)
            }}
          />
          <label for={category}>{category}</label>
        </div>
      {/each}
    </fieldset>
    <div>
      <label for='text'>なんでもいいから書いてみて</label>
      <input id='text'
             name='text'
             type='text'
             value='なんでもいいから' />
    </div>
    <fieldset>
      <legend>ラジオボタン</legend>
      <div>
        <input id='radioSample1'
               name='radioSample'
               type='radio'
               value='1' />
        <label for='radioSample1'>1</label>
      </div>
      <div>
        <input id='radioSample2'
               name='radioSample'
               type='radio'
               value='2' />
        <label for='radioSample2'>2</label>
      </div>
      <div>
        <input id='radioSample2'
               name='radioSample'
               type='radio'
               value='3' />
        <label for='radioSample2'>3</label>
      </div>
    </fieldset>
    <fieldset>
      <legend>セレクトボックス</legend>
      <label>
        <select name='selectSample'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
      </label>
    </fieldset>
    <button type='submit'>Submit</button>
  </form>
  <div>ドキュメントだよ</div>
</div>

<style lang='scss'>
  /* Add your styles here */
</style>

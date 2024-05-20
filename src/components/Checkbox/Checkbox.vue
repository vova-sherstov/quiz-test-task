<script setup lang="ts">

</script>

<template>
  <label class="checkbox">
    <input class="checkbox__input" type="checkbox" name="name" value="text" />
    <span class="checkbox__emoji">🫣</span>
    <span class="checkbox__label">Label</span>
  </label>
</template>

<style scoped lang="scss">
.checkbox {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-inline: 16px;

  height: 64px;
  background-color: var(--color-light);
  border: 1px solid var(--color-gray-light);
  border-radius: var(--border-radius);

  @include hover {
    border-color: var(--color-accent);
    box-shadow: 0px 6px 24px 0px #1819251a;
  }

  &__input {
    position: relative;
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    background-color: #fff;

    width: 16px;
    height: 16px;
    border: 1px solid var(--color-gray-light-alt);
    border-radius: 6px;

    display: grid;
    place-content: center;

    &::after {
      content: url(./assets/icons/сheckmark.svg);
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      opacity: 0;
      transition-duration: 120ms;
    }

    &:checked::after {
      opacity: 1;
    }

    &::before {
      content: '';
      width: 16px;
      height: 16px;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em var(--color-accent);
      border-radius: 6px;
    }

    &:checked::before {
      transform: scale(1);
    }
  }

  &__emoji {
    font-size: 30px;
    vertical-align: middle;
    line-height: 2;
  }
}
</style>
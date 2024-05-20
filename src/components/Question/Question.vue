<script setup lang="ts">
import Checkboxes from '../Checkboxes/Checkboxes.vue';
</script>

<template>
  <hgroup class="question__description">
    <h3 class="question__title">Heading</h3>
    <p class="question__subtitle">Choose all that apply</p>
  </hgroup>

  <Checkboxes />
</template>

<style scoped lang="scss">
.question {
  &__description {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 12px;
  }

  &__title {
    font-size: 22px;
    line-height: 28px;
  }

  &__subtitle {
    line-height: 24px;
    color: var(--color-gray);
  }
}
</style>

<script setup lang="ts">
import Question from '../Question/Question.vue';
import Button from '../Button/Button.vue';
</script>

<template>
  <div class="quiz">
    <div class="quiz__progress"></div>

    <div class="quiz__body container">
      <form class="quiz__form" action="">
        <Question />

        <Button />
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.quiz {
  &__progress {
    position: relative;
    display: block;
    height: 4px;
    background-color: var(--color-gray-light-alt);

    &::before {
      content: '';
      position: absolute;
      width: 50%;
      height: 100%;
      background-color: var(--color-accent);
      border-radius: 0px 2px 2px 0px;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-top: 38px;
  }

  &__body {
    max-width: 720px;
  }
}
</style>

<script setup lang="ts">
const props = defineProps({
  questionNumber: Number,
  totalQuestions: Number,
});
</script>

<template>
  <header class="header">
    <div class="header__inner container">
      <button class="header__btn icon-btn" @click="$emit('setPrevPage')">
        <img
          src="../../assets/icons/arrow-left.svg"
          alt="left arrow"
          width="16"
          height="16"
          loading="lazy"
        />

        <span class="visually-hidden">Go back</span>
      </button>

      <a class="header__logo logo" href="/">
        <img
          class="logo__image"
          src="../../assets/logo.svg"
          alt="Liven"
          width="32"
          height="32"
          loading="lazy"
        />

        <span class="visually-hidden">Home</span>
      </a>

      <span class="header__steps">{{ `${questionNumber} / ${totalQuestions}` }}</span>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding-block: 8px;
  background-color: var(--color-light);

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__btn {
    padding: 5px 5px 5px 0;
    background-color: inherit;
    border: none;
    cursor: pointer;
  }

  &__steps {
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
  }
}

.logo {
  line-height: 0;

  @include hover {
    opacity: 0.8;
  }
}

.icon-btn {
  @include flex-center;
}
</style>
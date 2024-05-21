<script setup lang="ts">
import type { PropType } from 'vue';

type Answer = {
  smile: String;
  text: String;
}

const props = defineProps({
  type: String,
  title: String,
  description: String,
  answers: Object as PropType<Answer[]>,
  isShow: Boolean,
})

const emit = defineEmits(['setNextPage', 'setAnswers'])

function handleClick(answer: Answer) {
  if (props.type === 'single') {
    emit('setNextPage')
  }

  emit('setAnswers', answer);
}
</script>

<template >
  <div v-show="isShow">
    <hgroup class="question__description">
      <h3 class="question__title">{{ title }}</h3>
      <p class="question__subtitle">{{ description }}</p>
    </hgroup>

    <fieldset class="checkboxes">
      <legend class="checkboxes__title visually-hidden">{{ title }}</legend>

      <label class="checkbox" v-for="(answer, index) in props.answers">
          <input
            class="checkbox__input"
            :type="props.type === 'multiple' ? 'checkbox' : 'radio'"
            :name="`${props.title}`"
            :value="`${props.title}`"
            @click="handleClick(answer)"
          />
          <span class="checkbox__emoji">{{ answer?.smile }}</span>
          <span class="checkbox__label">{{ answer?.text }}</span>
      </label>
    </fieldset>
  </div>
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

.checkboxes {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 0;
  border: none;
}

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
      content: url(../../assets/icons/сheckmark.svg);
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

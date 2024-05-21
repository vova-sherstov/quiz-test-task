<script setup lang="ts">
import { ref, watch } from 'vue'
import { quizeData } from '../../assets/quizeData';
import Header from '../Header/Header.vue';
import Question from '../Question/Question.vue'
import Button from '../Button/Button.vue'

type Answer = {
  smile: String;
  text: String;
}

const quizQuestions = quizeData;
const questionNumber = ref(0);

const selectedAnswers = ref<Answer[]>([]);

const setAnswers = (answer: Answer) => {
  selectedAnswers.value.push(answer);
}

function setNextPage() {
  if (questionNumber.value < (quizQuestions.length - 1)) {
    questionNumber.value++;
  }
}

function setPrevPage() {
  if (questionNumber.value > 0) {
    questionNumber.value--;
  }
}

watch(questionNumber, () => {
  selectedAnswers.value = [];
})
</script>

<template>
  <Header
    :questionNumber="questionNumber + 1"
    :totalQuestions="quizQuestions.length" 
    @setPrevPage="setPrevPage"
  />

  <div class="quiz">
    <div class="quiz__progress"></div>

    <div class="quiz__body container">
      <form class="quiz__form" action="">
        <Question
          v-for="(question, index) in quizQuestions" 
          :type="question.type"
          :title="question.title"
          :description="question.description"
          :answers="question.answers"
          :isShow="questionNumber === index"
          @setNextPage="setNextPage"
          @setAnswers="setAnswers"
        />

        <Button
          v-if="quizQuestions[questionNumber].type === 'multiple'"
          @click.prevent="setNextPage"
          :class="{ button__disabled: selectedAnswers.length <= 1 }"
        />
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

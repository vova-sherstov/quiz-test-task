<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="header__inner container">
      <button class="header__btn icon-btn">
        <img
          src="./assets/icons/arrow-left.svg"
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
          src="./assets/logo.svg"
          alt="Liven"
          width="32"
          height="32"
          loading="lazy"
        />

        <span class="visually-hidden">Home</span>
      </a>

      <span class="header__steps">1 / 26</span>
    </div>
  </header>

  <div class="quiz">
    <div class="quiz__progress"></div>

    <div class="quiz__body container">
      <form class="quiz__form" action="">
        <hgroup class="quiz__description">
          <h3 class="quiz__title">Heading</h3>
          <p class="quiz__subtitle">Choose all that apply</p>
        </hgroup>

        <fieldset class="quiz__inputs checkboxes">
          <legend class="checkboxes__title visually-hidden">Heading</legend>
          <label class="checkboxes__item checkbox">
            <input class="checkbox__input" type="checkbox" name="name" value="text" />
            <span class="checkbox__emoji">🫣</span>
            <span class="checkbox__label">Label</span>
          </label>
          <label class="checkboxes__item checkbox">
            <input class="checkbox__input" type="checkbox" name="name" value="text" />
            <span class="checkbox__emoji">🫣</span>
            <span class="checkbox__label">Label</span>
          </label>
        </fieldset>

        <button class="quiz__btn button">Continue</button>
      </form>
    </div>
  </div>
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

.quiz {
  &__body {
    max-width: 720px;
  }

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

.button {
  @include flex-center;

  height: 48px;
  font-size: 20px;
  color: var(--color-light);
  background-color: var(--color-accent);
  border-radius: var(--border-radius);
  border: none;

  @include hover {
    opacity: 0.8;
  }
}
</style>

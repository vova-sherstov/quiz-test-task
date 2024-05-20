<script setup lang="ts">

</script>

<template>
  <button type="submit" class="button">Continue</button>
</template>

<style scoped lang="scss">
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
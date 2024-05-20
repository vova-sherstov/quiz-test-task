<script setup lang="ts">
import Checkbox from '../Checkbox/Checkbox.vue';
</script>

<template>
  <fieldset class="checkboxes">
    <legend class="checkboxes__title visually-hidden">Heading</legend>
    <Checkbox />
    <Checkbox />
  </fieldset>
</template>

<style scoped lang="scss">
.checkboxes {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 0;
  border: none;
}
</style>

<template>
  <li>
    {{ todo.text }}
    <button @click="$emit('remove', todo.id)">X</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Obejct,
      required: true,
    },
  },
};
</script>

<style></style>

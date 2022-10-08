<template>
  <label class="text-sm group-focus-within:text-at-blue">{{ label }}</label>
  <input
    :value="modelValue"
    class="border-b border-light-text-color focus:outline-none group-focus-within:border-at-blue"
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    label: {
      type: [String],
      defautlt: "",
    },
    modelValue: {
      type: [String, Number],
      defautlt: "",
    },
  },
};
</script>

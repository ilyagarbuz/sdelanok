<template>
  <label class="text-sm group-focus-within:text-at-blue">{{ label }}</label>
  <input
    :value="modelValue"
    class="focus:outline-none border-b border-light-text-color group-focus-within:border-at-blue rounded-none bg-transparent"
    v-bind="$attrs"
    v-maska="maska"
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
    maska: {
      type: String,
      defautlt: "",
    },
    modelValue: {
      type: [String, Number],
      defautlt: "",
    },
  },
};
</script>

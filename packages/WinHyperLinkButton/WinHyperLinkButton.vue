<template>
  <a :href="to">
    <slot></slot>
  </a>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  padding: 5px 12px 7px 12px;
  border-radius: 4px;
  transition: 0.1s all;
  color: var(--fillcolor-accenttext-primary);
  background: var(--fillcolor-subtle-transparent);
  &:hover {
    color: var(--fillcolor-accenttext-secondary);
    background: var(--fillcolor-subtle-secondary);
  }
  &:active {
    color: var(--fillcolor-accenttext-tetiary);
    background: var(--fillcolor-subtle-tetiary);
  }
}
</style>

<script>
export default {
  props: {
    to: String,
  },
};
</script>

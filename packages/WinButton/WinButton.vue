<template>
  <button :class="type" class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: String,
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding: 5px 24px 7px 24px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid var(--elevation-border);
  transition: 0.1s all;
  margin: 0.2rem;

  &:disabled {
    scale: none !important;
    transition: none;
  }

  &.primary {
    color: var(--fillcolor-text-primary);
    background: var(--fillcolor-control-default);

    &:disabled {
      background: var(--fillcolor-control-disabled) !important;
      color: var(--fillcolor-text-disabled) !important;
    }

    &:hover {
      background: var(--fillcolor-control-secondary);
    }

    &:active {
      color: var(--fillcolor-text-secondary);
      background: var(--fillcolor-control-tetiary);
    }
  }

  &.accent {
    color: var(--fillcolor-textonaccent);
    background: var(--fillcolor-accent-default);

    &:disabled {
      background: var(--fillcolor-accent-disabled) !important;
      color: var(--fillcolor-textonaccent) !important;
    }

    &:hover {
      background: var(--fillcolor-accent-secondary);
    }

    &:active {
      //color: var(--button-accent-focus-text);
      background: var(--fillcolor-accent-tetiary);
    }
  }

  &:active {
    scale: 0.93;
  }
}
</style>

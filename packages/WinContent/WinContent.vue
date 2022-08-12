<template>
  <div class="win-content" :class="level">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    level: String,
  },
};
</script>
<style lang="scss">
.display {
  font-weight: 600;
  font-size: 68px;
}

.title-large {
  font-weight: 600;
  font-size: 40px;
}

.title {
  font-weight: 600;
  font-size: 28px;
}

.subtitle {
  font-weight: 600;
  font-size: 20px;
}

.body-large {
  font-weight: 400;
  font-size: 18px;
}

.body-strong {
  font-weight: 600;
  font-size: 14px;
}

.body {
  font-weight: 400;
  font-size: 14px;
}

.caption {
  font-weight: 400;
  font-size: 12px;
}
</style>

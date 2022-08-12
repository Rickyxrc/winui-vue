<template>
  <win-button @click="showDropDown = !showDropDown">{{ content }}</win-button>
  <div
    v-if="showDropDown"
    :style="{ width: boxWidth }"
    autofocus
    class="select-dropdown"
    @blur="showDropDown = false"
  >
    <div
      v-for="(i, k) in selectData"
      :key="k"
      class="select-data"
      @click="
        $emit('select', i);
        showDropDown = false;
      "
    >
      {{ i }}
    </div>
  </div>
</template>
<style lang="scss" scoped>
@keyframes opacity-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}

.select-dropdown {
  z-index: 12345;
  border: 1px solid var(--strokecolor-dividerstroke);
  border-radius: 4px;
  position: absolute;
  background: var(--background-fillcolor-acrylicbackground);
  backdrop-filter: blur(20px);

  animation: opacity-in 0.2s;
  padding: 2px 0 2px 0;

  .select-data {
    color: var(--fillcolor-text--primary);
    transition: 0.1s;
    padding: 5px 12px 7px 12px;
    text-align: center;
    border-radius: 4px;
    margin: 2px 4px 2px 4px;

    &:hover {
      background: var(--fillcolor-subtle);
    }

    &:active {
      scale: 0.93;
    }
  }
}
</style>
<script>
import WinButton from "../WinButton";

export default {
  props: {
    content: String,
    selectData: Array,
    boxWidth: String,
  },
  components: {
    WinButton,
  },
  data() {
    return {
      showDropDown: false,
    };
  },
};
</script>

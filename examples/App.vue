<template>
  <win-content level="display">Button 按钮</win-content>
  <win-content level="body">按钮提供了如下类型(在type中的取值)</win-content>
  <win-button type="primary" @click="clickk">primary</win-button>
  <win-button disabled type="primary" @click="clickk"
    >primary(disabled)</win-button
  >
  <win-button type="accent" @click="clickk">accent</win-button>
  <win-button disabled type="accent" @click="clickk"
    >accent(disabled)</win-button
  >
  <div>count&nbsp;{{ clickcount }}</div>
  <win-divider />
  <win-content level="display">DropDownButton 选择按钮</win-content>
  <win-drop-down-button
    disabled
    :select-data="seldat"
    box-width="6rem"
    content="select..."
    @select="handleselect"
  />
  <win-divider />
  <win-hyper-link-button to="https://rickyxrc.top"
    >visit my website</win-hyper-link-button
  >
</template>
<script>
import WinButton from "../packages/WinButton";
import WinContent from "../packages/WinContent";
import WinDivider from "../packages/WinDivider";
import WinDropDownButton from "../packages/WinDropDownButton/WinDropDownButton";
import WinHyperLinkButton from "../packages/WinHyperLinkButton/WinHyperLinkButton";

export default {
  data() {
    return {
      clickcount: 0,
      seldat: ["123", "234", "345", "372", "547", "996", "1500"],
    };
  },
  components: {
    WinHyperLinkButton,
    WinDropDownButton,
    WinButton,
    WinContent,
    WinDivider,
  },
  methods: {
    clickk() {
      this.clickcount++;
    },
    handleselect(sel) {
      console.log(sel);
    },
  },
};
</script>

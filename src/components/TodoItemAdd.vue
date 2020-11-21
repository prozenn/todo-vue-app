<template>
  <div class="todo-elem todo-elem--add">
    <input type="text" v-model="inputText" placeholder="Add new item..." />
    <button
      @click="addItem"
      class="todo-item-add__btn btn btn--add"
      :class="{ animation: this.animated }"
    />
  </div>
</template>

<script>
export default {
  props: {
    onAdd: Function,
  },
  data: () => {
    return {
      inputText: "",
      animated: false,
    };
  },
  methods: {
    addItem() {
      if (this.inputText !== "") {
        this.animated = true;
        this.onAdd(this.inputText);
        this.inputText = "";
        setTimeout(() => this.animated = false, 1500);
      }
    },
  },
};
</script>
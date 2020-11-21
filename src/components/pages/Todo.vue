<template>
  <div class="container">
    <div class="wrapper">
      <Header class="todo-header">
        <input class="header-text todo-header__title" v-if="this.list"  v-model="list.name" />
      </Header>
      <TodoList :items="this.list.items" />
    </div>
  </div>
</template>

<script>
import TodoList from "../TodoList";
import Header from "../Header";

export default {
  data() {
    return {
      list: null,
    };
  },
  props: ["id"],
  components: {
    TodoList,
    Header,
  },
  created() {
    // mount lists from shared var in shared.js -- demo data
    let index = this.$sharedVars.lists.findIndex(
      (e) => e.id === parseInt(this.id)
    );
    this.list = this.$sharedVars.lists[index];
    // this.list.name = this.$sharedVars.lists[index].name;
    // this.list.items = this.$sharedVars.lists[index].items;
  },
};
</script>
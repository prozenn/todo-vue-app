<template>
  <div class="container">
    <div class="wrapper">
      <Header>
        <span class="header-text">Just another ToDo list...</span>
      </Header>
      <ul class="todo-list">
        <li><todo-item-add :onAdd="itemAdd" /></li>
        <li v-for="list in lists" :key="list.id">
          <router-link :to="{ path: '/todo/' + list.id }" :list="list"
            ><div class="todo-elem todo-elem--item">
              {{ list.name }}
            </div></router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "../Header";
import TodoItemAdd from "../TodoItemAdd.vue";

export default {
  data: () => {
    return {
      lists: [],
    };
  },
  components: {
    Header,
    TodoItemAdd,
  },
  methods: {
    itemAdd(text) {
      let newId = this.lists.length ? Math.max.apply(Math, this.lists.map((e) => e.id)) + 1 : 1;
      this.lists.push({ id: newId, name: text, items: [] });
    },
  },
  created() {
    // mount lists from shared var in shared.js -- demo data
    this.lists = this.$sharedVars.lists;
  },
};
</script>
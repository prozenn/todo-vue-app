<template>
  <div class="todo-list">
    <todo-item-add :onAdd="itemAdd" />

    <div v-if="items">
    <todo-single-item
      v-for="item in items.slice().reverse()"
      :key="item.id"
      :item="item"
      :onDone="itemDone"
      :onRemove="itemRemove"
    />
    </div>
  </div>
</template>

<script>
import TodoItemAdd from "./TodoItemAdd.vue";
import TodoSingleItem from "./TodoSingleItem.vue";

export default {
  props: ["items"],
  components: {
    TodoItemAdd,
    TodoSingleItem,
  },
  methods: {
    itemDone(id) {
      let index = this.items.findIndex((e) => e.id === id);
      let completed = this.items.filter((e) => e.isCompleted);
      let currentCompleted = this.items[index].isCompleted;

      this.items[index].isCompleted = !currentCompleted;

      if (!currentCompleted) {
        this.items = this.items.move(index, completed.length);
      } else {
        this.items = this.items.move(index, completed.length - 1);
      }
    },
    itemAdd(text) {
      let newId = this.items.length ? Math.max.apply(Math, this.items.map((e) => e.id)) + 1 : 1;
      this.items.push({ id: newId, text: text, isCompleted: false });
    },
    itemRemove(id) {
      let index = this.items.findIndex((e) => e.id === id);
      if (index >= 0) {
        this.items.splice(index, 1);
      }
    },
  },
};
</script>
<template>
  <div
    class="todo-elem todo-elem--item"
    :class="{ completed: this.item.isCompleted }"
    :draggable="!this.item.isCompleted"
    @click="doneItem"
  >
    <p class="todo-item__text">{{ this.item.text }}</p>
    <div class="todo-elem__btn-box">
      <button
        v-if="this.item.isCompleted"
        class="todo-elem__remove btn btn--remove fa fa-trash-alt"
        @click.stop="removeItem"
      />
      <button
        class="todo-elem__btn btn btn--checkbox"
        :class="{ selected: this.item.isCompleted }"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    onDone: Function,
    onRemove: Function,
  },
  methods: {
    removeItem() {
      this.onRemove(this.item.id);
    },
    doneItem() {
      this.onDone(this.item.id);
    },
  },
};
</script>
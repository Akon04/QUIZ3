<template>
    <li class="todo-item" :class="{ completed: todo.completed }">
      <span @click="$emit('toggle', todo.id)">{{ todo.text }}</span>
      <button class="delete-btn" @click="$emit('delete', todo.id)">Delete</button>
    </li>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    props: {
      todo: {
        type: Object,
        required: true,
      },
    },
  });
  </script>
  
  <style scoped>
  .todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
  }
  .todo-item.completed span {
    text-decoration: line-through;
    color: #888;
  }
  .delete-btn {
    background-color: red;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  

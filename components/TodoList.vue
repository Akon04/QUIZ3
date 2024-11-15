<template>
    <div class="todo-list">
      <input
        type="text"
        v-model="newTodo"
        placeholder="Add a new task"
        @keyup.enter="addTodo"
      />
      <div class="filters">
        <button @click="filter = 'all'">All</button>
        <button @click="filter = 'completed'">Completed</button>
        <button @click="filter = 'incomplete'">Incomplete</button>
      </div>
      <transition-group name="fade" tag="ul">
        <TodoItem
          v-for="todo in filteredTodos"
          :key="todo.id"
          :todo="todo"
          @delete="deleteTodo"
          @toggle="toggleComplete"
        />
      </transition-group>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import TodoItem from "./TodoItem.vue";
  import TodoMixin from "@/mixins/TodoMixin";
  
  export default defineComponent({
    mixins: [TodoMixin],
    components: {
      TodoItem,
    },
  });
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .filters button {
    margin: 5px;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: #6200ea;
    color: white;
    cursor: pointer;
  }
  .filters button:hover {
    background-color: #3700b3;
  }
  .todo-container {
  max-width: 600px;
  margin: 50px auto;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.todo-header {
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

.todo-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
}

.add-btn {
  padding: 10px 20px;
  background-color: #6200ea;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.add-btn:hover {
  background-color: #3700b3;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.todo-item.completed {
  text-decoration: line-through;
  color: #888;
}

.delete-btn {
  background: none;
  border: none;
  color: #dc3545;
  cursor: pointer;
}

.delete-btn:hover {
  color: #c82333;
}

  </style>
  
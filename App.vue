<template>
  <div class="app">
    <h1>To-Do App</h1>
    <TodoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "@/components/TodoList.vue";

export default defineComponent({
  components: {
    TodoList,
  },
});
</script>

<style>
.app {
  text-align: center;
  margin: 20px;
}
.app-container {
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.app-header {
  background-color: #6200ea;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-buttons {
  display: flex;
  gap: 10px;
}

.nav-btn {
  color: white;
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.nav-btn:hover {
  color: #bbb;
}

.app-footer {
  background-color: #3700b3;
  color: white;
  text-align: center;
  padding: 10px;
}

</style>

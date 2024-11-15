export default {
    data() {
      return {
        todos: [
          { id: 1, text: "Learn Vue.js", completed: false },
          { id: 2, text: "Build a To-Do App", completed: true },
        ],
        newTodo: "",
        filter: "all", // 'all', 'completed', or 'incomplete'
      };
    },
    computed: {
      filteredTodos() {
        if (this.filter === "completed") {
          return this.todos.filter((todo) => todo.completed);
        } else if (this.filter === "incomplete") {
          return this.todos.filter((todo) => !todo.completed);
        }
        return this.todos;
      },
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim()) {
          this.todos.push({
            id: Date.now(),
            text: this.newTodo,
            completed: false,
          });
          this.newTodo = "";
        }
      },
      deleteTodo(id: number) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
      },
      toggleComplete(id: number) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo) todo.completed = !todo.completed;
      },
    },
  };

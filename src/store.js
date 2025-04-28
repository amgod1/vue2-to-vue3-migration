import { defineStore } from "pinia"

export const useTodoStore = defineStore("todo", {
  state: () => ({ list: ["demo todo"] }),
  actions: {
    addTodo(newTodo) {
      this.list.push(newTodo)
    },
    removeTodo(index) {
      this.list.splice(index, 1)
    },
  },
})

// import { createStore } from "vuex"

// export default createStore({
//   state: () => ({ todos: ["demo todo"] }),
//   mutations: {
//     addTodo: (state, newTodo) => {
//       state.todos.push(newTodo)
//     },
//     removeTodo: (state, index) => {
//       state.todos.splice(index, 1)
//     },
//   },
//   actions: {
//     addTodo: (context, newTodo) => {
//       context.commit("addTodo", newTodo)
//     },
//     removeTodo: (context, index) => {
//       context.commit("removeTodo", index)
//     },
//   },
// })

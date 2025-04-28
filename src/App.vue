<script setup>
import TodoList from "./components/TodoList.vue"
import AddTodo from "./components/AddTodo.vue"
</script>

<template>
  <div id="app">
    <h1><center>To-Do App</center></h1>
    <hr />
    <AddTodo />
    <hr />
    <TodoList />
  </div>
</template>

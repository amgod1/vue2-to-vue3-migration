<script setup>
import { ref } from "vue"
import { useTodoStore } from "@/store"

const newTodo = ref("")
const todos = useTodoStore()

const addNewTodo = () => {
  todos.addTodo(newTodo.value)
  newTodo.value = ""
}
</script>

<template>
  <div class="container">
    <h2 class="">Add Todo</h2>
    <div class="card">
      <div class="d-flex">
        <input class="form-control" placeholder="Add new todo" v-model="newTodo" />
        <button type="button" class="btn btn-primary" @click="addNewTodo">Add</button>
      </div>
    </div>
  </div>
</template>

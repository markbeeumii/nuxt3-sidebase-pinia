<script setup lang="ts">
  definePageMeta({
    // title: 'Home',
    // layout: 'home',
    // public: true,
    middleware: 'auth'
  })
import { useTodoStore } from "~/store/todo"
  //const {} = useAuth()
  const content = ref('')
  const todoService = useTodoStore()
  const todos: Ref<any[]> = computed(() => todoService.leftTasks)
  const AddNewTodo = () : void =>{
    try{
      if(content.value?.trim()!==''){
        todoService.addTask(content.value);
      }
    }catch(error){
      console.log('New',error)
    }
    console.log(todos)
  }
  const RemoveTodo = (id:number) : void => {
    todoService.removeTask(id)
  }
</script>

<template>
  <main class=" w-full flex justify-center p-10">

      <v-form class="w-[400px] h-[120px] mt-6 p-3 rounded-md bg-white" @submit.prevent="AddNewTodo">
        <input 
          class="w-full p-2 outline-none border-[1px] border-blue-100 rounded-md"
          type="text" 
          v-model="content"
          placeholder="Please input content" 
          required
        >
          <div class="w-full flex justify-end my-5">
            <button type="submit" @click="AddNewTodo" class="bg-slate-200 px-3 py-1 rounded-md cursor-pointer">
              Save
            </button>
          </div>
      </v-form>
  </main>
  <div class="w-full flex justify-center mt-8 text-gray-900 ">
    <ul>
      <li v-for="(todo) in todos" :key="todo._id" class="bg-orange-200 p-3 w-[300px] flex justify-around  my-4 rounded-sm">
        {{todo._id}}
        {{todo.content}}
        <span class="bg-red-400 text-white p-1 rounded-lg">{{todo.isFinished?"Complted":"Processing"}}</span>
        <span @click="RemoveTodo(todo._id)">
          <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" width="22" height="30" viewBox="0 0 24 24"><path fill="#888888" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"/></svg>
        </span>
      </li>
    </ul>
    </div>
</template>
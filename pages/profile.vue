<script lang="ts" setup>

definePageMeta({
  title: 'Home',
  layout: 'home',
  public: true,
  middleware: 'auth'
})

const { data, status, getSession } = useAuth()

// data - authenticated user data returned from getSession option that we setup on nuxt.config.ts
// status - unauthenticated | authenticated
// getSession - call this function asynchronusly to get the session data. i.e. The authenticated user data

</script>

<template>
  <div class="flex flex-col items-start justify-center p-5 sm:p-14">
    <h1 class="text-white text-2xl md:text-4xl  mb-5">
      Hello, 
      <span v-if="status === 'authenticated'">{{ data?.first_name + data?.email + ' ' + data?.last_name }}</span>
    </h1>
    <p class="text-white opacity-60">Welcome back</p>
    <Logout></Logout>
  </div>
</template>
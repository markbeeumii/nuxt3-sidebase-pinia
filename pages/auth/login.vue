<script lang="ts" setup>

const { signIn } = useAuth() // uses the default signIn function provided by nuxt-auth
const formData = reactive({
  email: '',
  password: '',
})


const login = async (e:any) => {
  //console.log(formData)
    try {
      e.preventDefault()
      let res = await signIn('credentials',{redirect:false,...formData})
      //@ts-ignore
      if(res.ok){
        navigateTo('/')
      }
    } catch (error) {
      console.log("error", error);
    } 
}

definePageMeta({
  title: 'Signin',
  layout: 'empty',
  public: true,
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  },
})


</script>

<template>
  <div class="w-full flex justify-center">
    <form @submit.prevent="login" class="mt-6 rounded-lg card custom-card mx-auto w-11/12 max-w-md bg-white p-6 shadow-lg">
      <h3 class="text-center mb-6 font-semibold">Signin</h3>
      <input type="text" v-model="formData.email" class="w-full outline-none p-2 rounded-md text-blue-950 border-[1.5px] border-[#ddd]" name="email" placeholder="email here.." />
      <input type="password" v-model="formData.password" class="w-full outline-none p-2 my-6 rounded-md text-blue-950 border-[1.5px] border-[#ddd]" name="password" />
      <div class="w-full flex justify-end">
        <button class="px-3 py-1 rounded-md text-gray-700 bg-red-300" type="submit">Sign In</button>
      </div>
    </form>
  </div>
</template>
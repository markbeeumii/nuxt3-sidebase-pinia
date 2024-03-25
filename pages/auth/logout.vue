<script lang="ts" setup> 
  //@ts-ignore
const { signOut, token} = useAuth()
async function _signOut() {
  try {
    await signOut({
      callbackUrl: '/auth/login',
      redirect: true
    })
   // Add after logout logic here, could be removing the session data from localstorage or whatever
  } catch (error: any) {
    //@ts-ignore
    toast.add({ severity: 'error', summary: 'error', detail: error?.data?.message || error?.message, life: 5000 });
  }
}
</script>
<template>
<button @click="_signOut()">
   Sign Out
</button>

</template>
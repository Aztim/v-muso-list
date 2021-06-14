<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/unnamed.jpg">
      <h1>
        <router-link :to="{name: 'Home'}">Muso List</router-link>
      </h1>
      <div class="links">
        <div v-if="user">
          <button @click="handleClick">Logout</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{name:'Signup'}">Signup</router-link>
          <router-link class="btn" :to="{name:'Login'}">Log in</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'

export default {
  name: 'Nabvar',
  setup() {
    const { logout } = useLogout()
    const { user } =  getUser()
    const { router } = useRouter()

    const handlClick = async () => {
      await logout()
      router.push({ name: 'Login'})
    }

    return { handlClick, user }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar {
    padding: 16px 10px;
    margin-bottom: 60px;
    background: white;
  }

  nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  nav h1 {
    margin-left: 20px;
  }

  nav .links {
    margin-left: auto;
  }

  nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
  }

  nav img {
    max-height: 60px;
    border-radius: 50%;
  }

</style>

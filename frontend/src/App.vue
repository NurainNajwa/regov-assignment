<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      loggedInUser: null
    };
  },
  mounted() {
    this.checkLoggedInUser();
  },
  methods: {
    checkLoggedInUser() {
      const user = JSON.parse(localStorage.getItem('loggedInUser'));
      if (user) {
        this.loggedInUser = user;
        this.$router.push('/profile'); 
      } else {
        this.$router.push('/login'); 
      }
    },
    handleLogout() {
      localStorage.removeItem('loggedInUser');
      this.loggedInUser = null;
      this.$router.push('/login');
    },
    handleLoginSuccess(userData) {
      this.loggedInUser = userData.user;
      this.$router.push('/profile'); 
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Open Sans, sans-serif;
}

header {
  width: 100vw;
  background-color: #222;
  padding: 15px;
}

.header-content {
  display: flex;
  align-items: center;
}

.logo {
  height: 50px;
  margin-right: 20px;
}
</style>

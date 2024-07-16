<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="btn-group">
          <div><button type="submit" class="btn btn-success">Login</button></div>
          <div><button><router-link to="/register" class="btn btn-secondary">Register</router-link></button></div>
        </div>
      </form>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Dummy login logic
      console.log('User logged in with:', this.email, this.password);
      this.$router.push('/profile');
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-top: 50px;
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 0.5rem;
  background-color: #ff7200;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ff7200;
}

.btn-group {
  display: flex;
  justify-content: space-between;
  margin: 5px;
}

.btn-secondary {
  background-color: #ff7200;
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.btn-group div {
  margin: 10px;
  padding: 20px;
  font-size: 30px;
  display: inline-block;
}
</style>

<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login" novalidate>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="user.username" 
            :class="{ 'is-invalid': errors.username }" required />
            <div v-if="errors.email" class="invalid-feedback">{{ errors.username }}</div>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="user.password" 
          :class="{ 'is-invalid': errors.password }" required />
          <div v-if="errors.password" class="invalid-feedback">{{ errors.password }}</div>
        </div>
        <div class="btn-group">
          <div><button type="submit" class="btn btn-success">Login</button></div>
          <div><button><router-link to="/register" class="btn btn-secondary">Register</router-link></button></div>
        </div>
      </form>
      <div v-if="message" class="message-container">
        <div class="alert alert-info small">{{ message }}</div>
      </div>      
    </div>
  </template>

<script>
import { login } from '@/services/api';

export default {
  data() {
    return {
      user: {
          username: '',
          password: ''
      },
      errors: {},
      message: ''
    };
  },
  methods: {
    validateForm() {
      this.errors = {};
      if (!this.user.username) {
          this.errors.username = 'Username is required.';
      }
      if (!this.user.password) {
          this.errors.password = 'Password is required.';
      }
      return Object.keys(this.errors).length === 0;
    },
    async login() {
      if (this.validateForm()) {
        try {
          console.log('Sending user data:', this.user);
          const response = await login(this.user);
          console.log('Response data:', response.data);
          this.message = 'Login successful!';
          this.$emit('updateUser', response.data.user);
          localStorage.setItem('loggedInUser', JSON.stringify(response.data.user));
          console.log('loggedInUser', JSON.stringify(response.data.user))
          setTimeout(() => {
            this.$router.push('/profile');
          }, 1000);
        } catch (err) {
          console.error('Error:', err);
          if (err.response && err.response.data) {
              this.message = `${err.response.data.error}`;
          } else {
              this.message = 'An unknown error occurred.';
          }
        }
      }
    },
    resetForm() {
      this.user = {
          username: '',
          password: ''
      };
      this.errors = {};
    },
    goToRegister() {
      this.$router.push('/register');
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

.invalid-feedback {
  color: red;
  font-size: 0.9rem;
}

.message-container {
  margin-top: 10px;
}
</style>

<template>
    <div class="profile-container">
      <h2>User Profile</h2>
      <div class="form-group">
        <label for="username">Username:</label>
        <div>{{ username }}</div>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <div>{{ email }}</div>
      </div>
      <div class="form-group">
        <label for="aboutMe">About Me:</label>
        <div>{{ aboutMe }}</div>
      </div>
      <button @click="editProfile">Edit Profile</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      username: String,
      email: String,
      aboutMe: String
    },
    methods: {
      editProfile() {
        this.$emit('edit'); // Emitting an event to notify parent component to switch to edit mode
      }
    }
  };
  </script>

  <style scoped>
  .profile-container {
    max-width: 400px;
    margin: auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  </style>
  
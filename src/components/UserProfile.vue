<template>
    <div class="profile-container">
      <h2>User Profile</h2>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" readonly>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" readonly>
      </div>
      <div class="form-group">
        <label for="aboutMe">About Me:</label>
        <textarea id="aboutMe" v-model="aboutMe"></textarea>
      </div>
      <button @click="saveDraft">Save as Draft</button>
      <button @click="submit">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: 'JohnDoe', // Replace with actual username from logged-in user data
        email: 'john.doe@example.com', // Replace with actual email from logged-in user data
        aboutMe: ''
      };
    },
    methods: {
      saveDraft() {
        // Logic for saving the draft
        console.log('Draft saved with:', this.aboutMe);
      },
      submit() {
        // Logic for submitting the "About Me" section
        console.log('About Me submitted with:', this.aboutMe);
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
  
  input, textarea {
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
  </style>
  
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
  import axios from 'axios';

  export default {
    data() {
      return {
        username: '', 
        email: '',
        aboutMe: ''
      };
    },
    created() {
      this.fetchUserProfile();
    },
    methods: {
      async fetchUserProfile() {
        try {
          const userId = this.$route.params.id; // Assuming user ID is passed as a route parameter
          const response = await axios.get(`http://localhost:5000/api/users/profile/${userId}`);
          this.username = response.data.username;
          this.email = response.data.email;
          this.aboutMe = response.data.aboutMe || '';
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      },
      saveDraft() {
        // Logic for saving the draft
        console.log('Draft saved with:', this.aboutMe);
      },
      submit() {
        try {
          const userId = this.$route.params.id; // Assuming user ID is passed as a route parameter
          await axios.put(`http://localhost:5000/api/users/profile/${userId}/aboutMe`, {
            aboutMe: this.aboutMe
          });
          console.log('About Me submitted with:', this.aboutMe);
        } catch (error) {
          console.error('Error submitting About Me:', error);
        }
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
  
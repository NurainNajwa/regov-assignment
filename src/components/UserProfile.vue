<template>
    <div class="profile">
      <h2>User Profile</h2>
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" readonly>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" readonly>
      </div>
      <div>
        <label for="aboutMe">About Me:</label>
        <textarea v-model="aboutMe"></textarea>
      </div>
      <button @click="saveDraft">Save as Draft</button>
      <button @click="submit">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: 'JohnDoe', // Fetch from the logged-in user data
        email: 'john.doe@example.com', // Fetch from the logged-in user data
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
.profile {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
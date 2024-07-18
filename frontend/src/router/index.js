import { createRouter, createWebHistory } from 'vue-router';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import UserProfile from '../components/UserProfile.vue';

const routes = [
  { path: '/register', 
    name: "Register",
    component: Register 
  },
  { path: '/login',
    name: "Login", 
    component: Login 
  },
  { path: '/profile', 
    name: "Profile",
    component: UserProfile 
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

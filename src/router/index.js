import  { createRouter, createWebHistory } from 'vue-router'
import side from '../components/side/side.vue'
import home from '../components/home/home.vue'
import task from '../components/task/task.vue'
const routes = [
    { path: '/', redirect: '/home'},
    { path: '/task', component: task, name: 'task'},
    { path: '/home', component: home, name: 'home'}
]
const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes
})
export { router }

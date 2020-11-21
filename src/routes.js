import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import Home from './components/pages/Home'
import Todo from './components/pages/Todo'

const routes = [
    { path: '/', component: Home },
    { path: '/todo/:id', component: Todo, props: true },
]

export default new VueRouter({
    routes,
    mode: 'history'
})
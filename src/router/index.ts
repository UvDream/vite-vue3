/*
 * @Author: wangzhongjie
 * @Date: 2021-07-02 09:42:52
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-07-02 09:47:43
 * @Description:路由
 * @Email: UvDream@163.com
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/home.vue';
const routes = [
    { path: '/', component: Home, meta: { title: 'Home' } },
]
export const router = createRouter({
    history: createWebHistory(),
    routes
})
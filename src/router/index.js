import Vue from 'vue'
import VueRouter from 'vue-router'

import Welcome from '../views/Welcome'
import about from '../views/about'
import contact from '../views/contact'
import course_details from '../views/course_details'
import courses from '../views/courses'
import news from '../views/news'
import news_details from '../views/news_details'
import teachers from "../views/teachers";
import teachers_2 from "../views/teachers_2";
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', component: Welcome },
    { path: '/about', component: about },
    { path: '/contact', component: contact },
    { path: '/course-details', component: course_details },
    { path: '/courses', component: courses },
    { path: '/news', component: news },
    { path: '/news-details', component: news_details },
    { path: '/teachers', component: teachers },
    { path: '/teachers-2', component: teachers_2 },
    { path: '*', component: NotFound },
  ]
})
router.beforeEach((to, from, next) => {
  /**
   * to: 将要访问的路径
   * from: 代表从哪个路径跳转而来
   * next：一个函数，表示放行
   * */
  next()
})

export default router

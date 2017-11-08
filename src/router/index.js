import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home/index.vue'
import Article from '@/page/article/index.vue'
import Photo from '@/page/photo/index.vue'
import About from '@/page/about/index.vue'
import Contact from '@/page/contact/index.vue'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/article',
      component: Article,
      meta: {
        title: '文章'
      }
    },
    {
      path: '/photo',
      component: Photo,
      meta: {
        title: '图库'
      }
    },
    {
      path: '/about',
      component: About,
      meta: {
        title: '关于'
      }
    },
    {
      path: '/contact',
      component: Contact,
      meta: {
        title: '联系'
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;

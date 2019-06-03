import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '@/layout/default'
import BlankPage from '@/layout/blank'


Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'default',
            component: DefaultPage,
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: () => import('./views/index')
                },
                {
                    path: '/changecity',
                    name: 'changeCity',
                    component: () => import('./views/changeCity')
                },
                {
                    path: '/s',
                    name: 'search',
                    component: () => import('./views/search')
                }
            ]
        },
        {
            path: '/blank',
            name: 'blank',
            component: BlankPage
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('./views/test')
        }
    ]
})

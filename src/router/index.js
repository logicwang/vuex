import Vue from 'vue'
import Router from 'vue-router'

export default new Router({
    mode: 'hash',
    linkActiveClass: 'isactive',
    routes: [
        {
            path: '/',
            component: () => import('../view/pageone.vue'),
        },
        {
            path: '/pageone',
            component: () => import('../view/pageone.vue'),
        },
        {
            path: '/pagetwo',
            component: () => import('../view/pagetwo.vue'),
        },
        {
            path: '/vuex',
            component: () => import('../view/vuex.vue'),
        },
        {
            path: '/one',
            component: () => import('../view/one.vue'),
        },
    ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => {
        return err
    })
}

Vue.use(Router);
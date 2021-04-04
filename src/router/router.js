import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const order = r => require.ensure([], () => r(require('../page/order/order')), 'order')
const bidding = r => require.ensure([], () => r(require('../page/bidding/bidding')), 'bidding')



export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面 
        {
            path: '',
            redirect: '/home'
        },
        //首页
        {
            path: '/home',
            component: home
        },
        //登陆注册页 
        {
            path: '/login',
            component: login
        },
        //订单列表页 
        {
            path: '/order',
            component: order,
        },
        //标书填写页 
        {
            path: '/bidding',
            component: bidding,
        },
    ]
}]
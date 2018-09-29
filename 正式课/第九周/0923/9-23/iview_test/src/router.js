const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve),
        children:[
            {
                path:'/home',
                component: (r) => require(['./views/home'],r)
            },
            {
                path: '/lesson',
                component: (r) => require(['./views/lesson'], r)
            },
            {
                path: '/about',
                component: (r) => require(['./views/about'], r)
            },
        ]
    },
];
export default routers;
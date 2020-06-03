const Login = () => import('../components/Login.vue')
const HelloWorld = () => import('../components/HelloWorld.vue')
const Template = () => import('../components/Template.vue')
const GoogleMap = () => import('../components/GoogleMap.vue')

export const routes = [
    /* PUBLIC ROUTES */
    {
        path: '/',
        name: "login",
        component: Login,
    },
    /* Template ROUTES */
    {
        path: '/template',
        component: Template,
        children: [
            {
                path: '/template/hello', name: 'hello-world', component: HelloWorld 
            },
            {
                path: '/template/mapa', name: 'maps', component: GoogleMap 
            },
            
        ]
    },
    

]

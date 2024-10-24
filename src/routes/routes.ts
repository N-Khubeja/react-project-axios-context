export interface Iroutes {
    path:string,
    label:string
}

export const routes:Iroutes[] = [
    {path:'/',label:'home'},
    {path:'/about',label:'about'},
    {path:'/contact',label:'contact'},
    {path:'/users',label:'users'}
]
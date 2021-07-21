// Vue.component('test', {
//     props:['name'],
//     template:`<p>{{message}}</p>`,
//     data(){
//         return {message: `this is ${ this.name } test.`}
//     }
// });

let app = new Vue({
    el:'#app',
    data : {
        name : null,
        comment : null,
        posts:[]
    },
    methods:{
        save(){
            const posts={
                name:this.name,
                comment:this.comment
            };
            this.posts.unshift(posts)
            this.name=null
            this.comment=null
        }
    }
});
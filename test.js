let app = new Vue({
    el: '#app',
    data: {
            message:'select a user',
            users:[{ name:'User' }, {name:"Admin"}],
    },   
    methods:{
        sayHi(name){
            this.message='hi, ' + name
        }
    }
});

let app2= new Vue({
    el:'#app2',
    data:{
        comment:'',
        link:'https://www.naver.com'
    }
});

let app3= new Vue({
    el:'#app3',
    data:{
        comment:''
    }
});

let app4= new Vue({
    el:'#app4',
    data:{
        value=false,
        values:[]
    }
});

let app5= new Vue({
    el:'#app5',
    data:{
        age:20
    }
})

let app6= new Vue({
    el:'#app6',
    data:{
        value:'hello',
        value2:'hello'
    }
})

let app7 = new Vue({
    el:'#app7',
    data:{
        Amessage:''
    }
})
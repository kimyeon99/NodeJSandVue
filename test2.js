let app = new Vue({
    el: '#app',
    data: {
        user_id: '123',
        user_grade: 'silver',
        age: ''
    },
    computed: { // computed : 아래의 userid, grade, age가 바뀌지 않는 이상
        // 결과 값이 유지된다.(바뀌는 도중에 결과 값이 같이
        //    바뀌지 않음)
        user_info: function () {
            return this.user_id + '{' + this.user_grade + '}'
        },
        age_info: function () {
            if (this.age >= 20) {
                return this.age + ' ' + 'you are adult'
            }
            return this.age + ' ' + 'you are not adult'
        }
    }

});
// component를 전역변수로 선언함.(위에 포함시켜 지역변수로도 가능)
Vue.component('hello', {
    props: ['name'],
    template: '<p>{{message}}</p>',
    data: function () {
        return { message: 'hello! ' + this.name }
    }
});

Vue.component('add', {
    template: '<button @click="add">{{count}}</button>',
    data() {
        return { count: 0 }
    },
    methods: {
        add() {
            this.count += 1;
            this.$emit('event-add', 1);
        }
    }
});

let app2 = new Vue({
    el: '#app2',
    data: {
        totalCount: 0
    },
    methods: {
        updateTotal(count) {
            this.totalCount += count
        }
    }
});
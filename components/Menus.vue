<template lang="">
  <div id="app">
    <h1>Menus</h1>
    <h1>{{menu_name}}</h1>
    <ul>
      <li v-for="menu in menus" :key="menu.id">
        <a :href="menuAddress(menu.id)">{{menu.name}}</a>
      </li>
    </ul>
    <h1>{{searched_menu}}</h1>
  </div>
</template>

<script>
export default {
  name: "Menus",
  data(){
    return{
      menu:[{id:1, name:"a", price:100},
            {id:2, name:"b", price:200},]
    }
  },
  computed:{
    menu_name(){
      const id = this.$route.params.menu_id
      if(id=='1') return '아이스 에이지'
      else if(id=='2') return '카페라떼'
      else return ''
    },
    searched_menu(){
      const id=this.$route.query.menu_id
      if(id=='1') return '아이스 에이지'
      else if(id=='2') return '카페라떼'
      else return ''
    }
    },
    methods:{
      menuAddress(id){
        return '/menus/'+id
      }
    }
  };
</script>

<style lang=""></style>

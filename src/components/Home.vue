<template>
  <div id="home">
    <app-header :title="title" @titleChanged="updateTitle($event)"></app-header>
    <users v-bind:users="users"></users>
    <app-footer :title="title"></app-footer>
  </div>
</template>

<script>
import Footer from './Footer'
import Users from './Users'
import Header from './Header'
export default {
  name: 'home',
  data(){
    return{
      // title:'这是我的第一个vue脚手架项目',
      users:[
                {name:'1',position:'Web开发',show:false},
                {name:'2',position:'Web开发',show:false},
                {name:'3',position:'Web开发',show:false},
                {name:'4',position:'Web开发',show:false},
                {name:'5',position:'Web开发',show:false},
                {name:'6',position:'Web开发',show:false},
                {name:'7',position:'Web开发',show:false},
                {name:'8',position:'Web开发',show:false},
                {name:'9',position:'Web开发',show:false},
                {name:'11',position:'Web开发',show:false},
                {name:'22',position:'Web开发',show:false},
                {name:'33',position:'Web开发',show:false},
            ],
      title:"传递的事宜值，(number string boolean)"
    }
  },
  methods:{
    updateTitle(title){
      this.title=title;
    }
  },
  components:{
    "users":Users,
    "app-header":Header,
    "app-footer":Footer
  },
  created(){
      
  }
}
</script>

<style>
</style>

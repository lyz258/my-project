<template>
    <div class="users">
        <ul>
            <li v-for="(user,index) in users" :key="index"
                @click="user.show=!user.show">
                <h2>{{user.name-1}}</h2>
                <h3 v-show="user.show">{{user.position}}</h3>
                <button @click="deleteUsers(index)">删除</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Users',
    props:{
        users:{
            type:Array,
            required:true
        }
    },
    data(){
        return{
        }
    },
    methods:{
        deleteUsers:function(index){
            this.users=this.users.splice(index,1);
        }
    }
}
</script>

<style scoped>
.users{
    width: 100%;
    margin: 40px auto;
    max-width: 1200px;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border:1px solid #222;
    margin: 10px;
}
</style>

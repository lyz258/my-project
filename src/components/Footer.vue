<template>
    <div class="footer" @click="deleteTitle">
        <h1>{{copyright}}{{title}}</h1>
    </div>
</template>

<script>
export default {
    name:'Footer',
    props:{
        title:{
            type:String,
            required:true
        }
    },
    data(){
        return{
            copyright:'Copyright 2017 Vue Demo'
        }
    },
    methods:{
        deleteTitle:function(){
            this.title="changed"
        }
    }
}
</script>

<style scoped>
.footer{
    background: #222;
    padding: 6px;
}
h1{
    color: lightgreen;
    text-align: center;
}
</style>

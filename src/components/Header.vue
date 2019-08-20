<template>
    <div class="header" @click="changedTitle">
        <h1>{{copyright}}{{title}}</h1>
    </div>
</template>

<script>
export default {
    name:'Header',
    props:{
        title:{}
    },
    data(){
        return{
            copyright:'Copyright 2017 Vue Demo',
            timer: null
        }
    },
    methods:{
        changedTitle:function(){
            // this.title="changed";
            this.$emit("titleChanged","子向父组件传值");
        }
    },
    beforeCreate:function(){
        console.log("beforeCreate:组件实例化之前执行的函数 1");
    },
    created:function(){
        console.log("created:组件实例化完毕，但页面还未显示 2");
    },
    beforeMount:function() {
        console.log("beforeMount:组件挂载前，页面仍未展示，但虚拟Dom已经配置 3");
    },
    mounted(){
        this.copyright="zxczxc1";
        console.log("mounted:组件挂载后，此方法执行后，页面显示 4");
        this.timer = setInterval(() => {
            // 定时器操作
            this.$destroy();
	    }, 100)
    },
    beforeUpdate:function(){
        console.log("beforeUpdate:组件跟新前，页面仍未更新，但虚拟Dom已经配置 5");
    },
    updated:function(){
        console.log("updated:组件更新，此方法执行后，页面显示 6");
    },
    beforeDestroy:function(){
        clearInterval(this.timer);
        console.log("beforeDestroy:组件销毁前 7");
    },
    destroyed:function(){
        console.log("destroyed:组件销毁 8");
    }
}
</script>

<style scoped>
.header{
    background: lightgreen;
    padding: 6px;
}
h1{
    color: #222;
    text-align: center;
}
</style>

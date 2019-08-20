<template>
  <div></div>
</template>

<script>
export default {
    
		// name:"demo1",
		// data(){
        //     return{
		// 	test: 0,
		// 	filter : 1,
		// 	compute:2,
        //     flag: false
        //     }
		// },
		// created(){
		// 	console.log("同步的created开始 ")
		// 	this.test++;  //不会激活updated,filters,watch，但是会改变数据，说明此时可观测数据，且仅做数据前期处理。
		// 	//模拟异步
		// 	setTimeout(()=>{
		// 		console.log("异步的created开始 +++created")
		// 		this.test++;   //会激活updated,filters,watch
		// 	},100)
		// },
		// mounted(){
		// 	console.log("mounted开始 ")
		// 	this.test++;  //会激活updated,filters,watch，随后所有的操作都按如下顺序激活:操作方法->watch,filters(computed如果有则在此之后),beforeUpdate,updated
		// },
		// updated(){
		// 	console.log("updated开始  ++++updated")
		// },
		// watch:{
		// 	test:{
		// 		handler(){
		// 			console.log("watch变量： test");
		// 			if (this.test >= 10) {
		// 				this.flag = true;
		// 				this.filter = 2;
		// 			}
		// 		},
		// 		/*immediate: true,*/ //如果false，则第一次watch在所监控的值第一次发生变化是发生，否则就是在beforeCreated之后发生。
		// 	},
		// 	flag:{
		// 		handler(){
		// 			console.log("watch变量： flag");
		// 		},
		// 		immediate: true,
		// 	},
		// },
		// methods:{
		// 	add(){
		// 		this.test++;
		// 		if (this.test > 5) {
		// 			this.compute = 5;
		// 		}
		// 		if (this.test > 7) {
		// 			this.filter = 5;
		// 		}
		// 		console.log("add方法运行");
		// 	}
		// },
		// filters:{
		// 	filter1(data){
		// 		console.log("filters运行");
		// 		return data
		// 	}
		// },
		// computed:{
		// 	compute1(){
		// 		console.log("computed运行");
		// 		return this.compute
		// 	}
		// },
		// destroyed(){
		// 	console.log("destroyed运行 +++destroyed");
		// },
		// beforeCreate(){
		// 	console.log("beforeCreate运行  +++beforCreate",this.test);
		// 	this.test++; //这里是找不到test的，说明此时是观测不到数据的。
		// },
		// beforeDestroy(){
		// 	console.log("beforeDestroy运行  +++beforeDestroy");
		// },
		// beforeMount(){
		// 	this.test++;  //数据会变化，但是不会激活updated,filters,watch，随后filters和computed会运行，然后是mounted,
		// 	console.log("beforeMount运行   +++beforeMount",this.test);
		// },
		// beforeUpdate(){
		// 	console.log("beforeUpdate运行   +++beforeUpdate");
        // },
        //sadasdasd
        beforeCreate:function a(){
            console.log("beforeCreate:组件实例化之前执行的函数");  //没加载之前用加载动画
            // alert("beforeCreate:组件实例化之前执行的函数");  //没加载之前用加载动画
        },
        destroyed:function d(){
            console.log("destroyed:组件销毁");
            // alert("destroyed:组件销毁");
        },	
        created:function(){
            // console.log("created:组件实例化完毕，但页面还未显示");  //页面还未加载出来可以先获取数据
            alert("created:组件实例化完毕，但页面还未显示");  //页面还未加载出来可以先获取数据
        },
        beforeMount:function() {
            // console.log("beforeMount:组件挂载前，页面仍未展示，但虚拟Dom已经配置");
            alert("beforeMount:组件挂载前，页面仍未展示，但虚拟Dom已经配置");
        },
        mounted:function(){
            // console.log("mounted:组件挂载后，此方法执行后，页面显示 -----------------");
            alert("mounted:组件挂载后，此方法执行后，页面显示 -----------------");
        },
        beforeUpdate:function(){
            // console.log("beforeUpdate:组件跟新前，页面仍未更新，但虚拟Dom已经配置");
            alert("beforeUpdate:组件跟新前，页面仍未更新，但虚拟Dom已经配置");
        },
        updated:function b(){
            // console.log("updated:组件更新，此方法执行后，页面显示");
            alert("updated:组件更新，此方法执行后，页面显示");
        },
        beforeDestroy:function c(){
            // console.log("beforeDestroy:组件销毁前");
            alert("beforeDestroy:组件销毁前");
        },
        destroyed:function d(){
            // console.log("destroyed:组件销毁");
            alert("destroyed:组件销毁");
        }	
}
</script>

<style>

</style>
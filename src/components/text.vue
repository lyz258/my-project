<template>
  
</template>

<script>
export default {
    data () {
        return {

        }
    },
    mounted:function() {
        let json1 ={
            "0":"a",
            "1":"b",
            "2":"c",
            length:3
        }
        let arr=Array.from(json1)
        console.log(arr);
        let a ="[a,b,c,d]";
        let c = Array.of("a","sa","sad");
        console.log(c);
        let acc = [0,1,2,3,4,5,6];
        acc.fill('a',2,5);
        console.log(acc);
        let arr1=['jspang','技术胖','大胖逼逼叨']
        for (let [index,val] of arr1.entries()){
            console.log(index+':'+val);
        }
        for(let val of arr1){
            console.log(val);
        }
        let list = arr1.entries();
        console.log(list.next().value);
        console.log(list.next().value);
        console.log(list.next().value);

        function add(a,b=1){
            return a+b;
        }
        console.log(add(2));
        
        let json={
            a:'a',
            b:'s',
            c:'as'
        }
        function fun ({a,b,c}){
            console.log(a,b,c);
        }
        fun(json);

        let arr2=['sad','xzc',,'xzcz'];
        function fun1(a,v,c){
            console.log(a,v,c);
        }
        fun1(...arr2);
        console.log(0 in arr2); //这里的0代表下标位置是否为空
        arr2.forEach((index,val)=>console.log(val,index));
        arr2.filter(x=>console.log(x+1));
        arr2.some(x=>console.log(x));
        arr2.map(x=>console.log('web'));
        console.log(arr2.join('-'));
        console.log(arr2.toString(65969));
        let name='asd';
        let skill='xcz';
        let obj ={name,skill};
        console.log(obj);
        let key="skill";
        var obj1={
            [key]:'web'
        }
        console.log(obj1);
        let obj3={
            add:function(a,b){
                return a+b;
            }
        }
        console.log(obj3.add(1,6));
        console.log(Object.is(NaN,NaN));
        console.log(Object.is(-0,+0));
        console.log(-0===+0);
        console.log(NaN===NaN);
        
        let a5={a:'xzc'};
        let a6={b:'xc'};
        let a7={c:'vf'};
        let a8={d:'zs'};
        let a9=Object.assign(a5,a6,a7,a8);  //对象合并
        console.log(a9);
        
        let obj8={name:'sad',sex:'xzcvb'};
        let age=Symbol();
        obj8[age]=22;
        for(let item in obj8){
            console.log(item);
        }
        console.log(obj8[age]);
        
        let setArr= new Set(['zxc','xzc','zxc']);
        console.log(setArr.size);
        console.log(setArr);
        setArr.add('xasd');     //添加
        setArr.forEach((value=>console.log(value)));
        for (const iterator of setArr) {
            console.log(iterator);
        }
        for(let x in setArr){
            console.log(setArr[x]);
        }
        
        let setObj1=new WeakSet();
        let aaa={a:'xzc',b:'wewq'}
        setObj1.add(aaa);
        console.log(setArr.has('xzc')); //查找
        console.log(setObj1);
        setArr.clear();         //删除
        console.log(setArr);
    }
}
</script>

<style>

</style>
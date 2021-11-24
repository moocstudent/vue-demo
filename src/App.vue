<template>
    <div id="app">
        {{message}}

        <hr>

        <ul>
            <!--只有slot成对标签为vue2.5,2.5之后的使用v-slot指定-->
            <todo-list>
                <todo-item @delete="handleDelete" v-for="item in list" :key="item.title" type="square" :title="item.title" :del="item.del">
                    <template v-slot:pre-icon="{value}">
                        <span>前置图标 {{value}}</span>
                    </template>
                    <!--如果没有指定后置图标,则会使用slot标签组中的默认值->🙂-->
                    <!--                <template v-slot:suf-icon>-->
                    <!--                <span>后置图标</span>-->
                    <!--                </template>-->
                </todo-item>
            </todo-list>
        </ul>
        <dynamic-text :showText="showText"></dynamic-text>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import TodoList from "@/components/TodoList";
    import TodoItem from "@/components/TodoItem";
    import DynamicText from "@/components/DynamicText";

    export default {
        name: 'App',
        components: {
            // eslint-disable-next-line vue/no-unused-components
            TodoList, TodoItem,DynamicText
        },
        data() {
            return {
                showText: 'conquer',
                message: 'hello world',
                list: [
                    {
                        title: 'A-community',
                        del: false
                    },
                    {
                        title: 'B-community',
                        del: true
                    },
                    {
                        title: 'C-community',
                        del: true
                    }]
            }
        },
      methods:{
          handleDelete(val){
              console.log('handleDelete',val);
          }
      }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
      Side Menu
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Todo List Admin</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <h2 id="title">Todo List</h2>
      <add-item-form/>

      <list-view :items="items"/>
    </v-main>
  </v-app>
</template>

<script>
import addItemForm from "./addItemForm"
import ListView from './listView.vue'
export default {
    components:{
        addItemForm,
        ListView
    },
    data:function(){
        return{
            items:[],
            drawer: null 
        }
    },
    methods:{
        getList(){
            axios.get('api/items')
            .then(response =>{
                this.items = response.data
            })
            .catch(error=>{
                console.log(error);
            })
        }
    },
    created(){
        this.getList();
    }
}   
</script>
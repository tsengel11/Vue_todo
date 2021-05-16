<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
      Side Menu
    </v-navigation-drawer>

    <v-app-bar app >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Todo Admin Panels</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <h2 id="title">Todo Lists</h2>
      <add-item-form
      v-on:reloadlist = "getList()"
      />

      <list-view 
      :items="items"
      v-on:reloadlist = "getList()"
      />
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
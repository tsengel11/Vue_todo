<template>
    <v-form>
        <v-container>
            <v-row >
                <v-icon
                @click="addItem()" 
                :class="[item.name ? color='green darken-2':'blue darken-3','plus']">mdi-message-text</v-icon>
                <v-col cols="4">
                    <v-text-field label="To do Item" v-model="item.name"></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
export default {
    data:function(){
        return {
                item:{
                    name:""
            }
        }
    },
    methods:{
        addItem(){
            if(this.item.name==''){
                return
            }
            axios.post('api/item/store',{
                item:this.item
            }).then(response=>{
                if(response.status ==201){
                    this.item.name =="";
                }
            }).catch(error=>{
                    console.log(error);
                })
        }
    }
}
</script>
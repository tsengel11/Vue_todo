<template>
    <v-form>
        <v-container>
            <v-row >
                <v-icon
                @click="addItem()"
                large
                >mdi-message-text
                </v-icon>
                <v-col cols="4">
                    <v-text-field label="To do Item" v-model="item.name"></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
export default {
    computed:{
          

        },
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
                    this.item.name ="";
                    this.$emit('reloadlist')
                }
            }).catch(error=>{
                    console.log(error);
                })
        }
    }
}
</script>
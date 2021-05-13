<template>
    <v-form>
        <v-container>
            <v-row >
                <v-icon
                @click="addItem()"
                large
                :class="colorClass">mdi-message-text
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
            colorClass() {
                        let color = this.item.name ? 'green' : 'red';
                        return 'color: '+color;
            }
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
                    this.item.name =="";
                }
            }).catch(error=>{
                    console.log(error);
                })
        }
    }
}
</script>
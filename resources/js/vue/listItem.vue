<template>
    <div class="item">
         <input type="checkbox"
         @change="updateCheck()"
         v-model="item.completed"
         />
         <span :class="[item.completed ? 'completed':'','itemText']">{{item.name}}</span>
        <v-btn @click="removeItem()" color="red" dark>Delete
            <v-icon dark right>mdi-delete</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    props:['item'],
    methods:{
        updateCheck(){
            axios.put('api/item/' + this.item.id, {
                item:this.item
            })
            .then( response =>{
                if(response.status==200){
                    this.$emit('itemchanged')
                }
            })
            .catch(error =>{
                console.log(error);

            })
        },
        removeItem(){
            axios.delete('api/item/' + this.item.id)
            .then(response => {
                if(response.status == 200){
                    this.$emit('itemchanged')
                }
            })
            .catch(error =>{
                console.log(error);
            })
        }
    }
}
</script>
<style scoped>

.completed {
    text-decoration:line-through ;
    color:#999999
}
.item {
    display: flex;
    padding: 3px;
    justify-content: left;
    align-items: center;
}
.itemText{
    width: 50%;
    margin-left: 20px;
}
</style>
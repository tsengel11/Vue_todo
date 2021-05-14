<template>
    <div class="item">
         <input type="checkbox"
         @change="updateCheck()"
         v-model="item.completed"
         />
         <span :class="[item.completed ? 'completed':'','itemText']">{{item.name}}</span>
         <button @click="removeItem()" class="trashcan">remove</button>
    </div>
</template>

<script>
export default {
    props:['item'],

    methods:{

    }
}
</script>
<style scoped>

.completed {
    text-decoration:line-through ;
}
.trashcan {
    color:red
}

</style>
<template>
    <div
            class="list">
        <div v-for="(item,index) in items" :key="index">

        <list-item
            :item="item"
            class="item"
            v-on:itemchanged = "$emit('reloadlist')"
        />
        </div>
    </div>
</template>

<script>
import listItem from './listItem.vue'
export default {
  components: { listItem },
    props:['items']
}
</script>

<style scoped>
    .list{
        width: 300px;
    }
</style>
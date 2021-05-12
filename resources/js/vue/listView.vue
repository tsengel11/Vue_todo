<template>
    <div>
        <div v-for="(item,index) in items" :key="index">

        <list-item
            :item="item"
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
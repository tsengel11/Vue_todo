<template>
    <div class="item">
         <input type="checkbox"
         @change="updateCheck()"
         v-model="item.completed"
         />
         {{item.name}}
    </div>
</template>

<script>
export default {
    props:['item']
}
</script>
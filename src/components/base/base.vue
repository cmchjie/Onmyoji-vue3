<template>
    <div class="logo"></div>
    <div class="base">
        <ul>
            <li v-for="(item, i) in state.menuArr" :key="i" @click="goLink(item)" :class="{'active': item.value === current}">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script setup>
    import {reactive, ref} from 'vue'
    import {useRouter} from 'vue-router'
    const state = reactive({
        menuArr: [
            {name: '式神录', value: 'home'},
            // {name: '悬赏任务', value: 'task'},
        ]
    })
   
    const current = ref(localStorage.getItem('current') || 'home')
    const router = useRouter()
    const goLink = (a) => {
        current.value = a.value
        localStorage.setItem('current', a.value)
        router.push({name: a.value})
    }
</script>

<style scoped lang="less" src="./base.less"></style>

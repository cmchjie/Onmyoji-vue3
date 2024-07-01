<template>
    <div class="home">
        <div class="tab">
            <el-tabs v-model="state.activeName" @tab-click="handleClick">
                <el-tab-pane v-for="(item, i) in state.tabArr" :key="i" :name="item.value" :label="item.name">
                    <ul>
                        <li v-for="(a, j) in allArr" :key="j">
                            <img :src="imgUrl(a.id)" alt="">
                            <div>{{a.name}}</div>
                        </li>
                    </ul>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script setup>
    import {reactive, computed} from 'vue'
    import data from './data'
    const state = reactive({
        tabArr: [
            {name: '联动', value: 'interactive'},
            {name: 'SP', value: 'SP'},
            {name: 'SSR', value: 'SSR'},
            {name: 'SR', value: 'SR'},
            {name: 'R', value: 'R'},
            {name: 'N', value: 'N'},
            {name: '呱太', value: 'material'}
        ],
        activeName: 'interactive',
        imgUrl: ''
    })
    const allData = data
    const allArr = computed(() => {
        let arr = []
        allData.forEach(item => {
            if (item[state.activeName]) {
                arr.push(item)
            }
            if (item.level === state.activeName) {
                if (!item.material && !item.interactive) {
                    arr.push(item)
                }
            }
        })
        return arr
    })
    const imgUrl = (id) => {
        let str = ''
        str = 'src/assets/yys/' + id + '.png'
        return str
    }
    const handleClick = (tab, event) => {
        console.log(tab.paneName)
    }
</script>

<style scoped lang="less" src="./home.less"></style>

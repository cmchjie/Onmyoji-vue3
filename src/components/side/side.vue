<template>
    <div class="side">
        <div class="left">
            <baseMenu />
        </div>
        <div class="right">
            <router-view/>
        </div>
    </div>
</template>

<script setup>
    import baseMenu from './../base/base.vue'
</script>

<style scoped src="./side.less" lang="less"></style>

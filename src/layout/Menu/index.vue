<template>
  <el-menu
    active-text-color="menuActiveText"
    background-color="menuBg"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    router
    unique-opened
  >
    <el-sub-menu :index="item.id" v-for="item in menusList" :key="item.id">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :route="item1.path"
          v-for="item1 in item.children"
          :key="item1.id"
          @click="savePath(item1.path)"
          >{{ item1.authName }}</el-menu-item
        >
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import { menuList } from '@/api/menu'

const defaultActive = ref(sessionStorage.getItem('path') || '/user')

const menusList = ref([])

const initMenuList = async () => {
  const res = await menuList()
  menusList.value = res.data
}
const savePath = (path) => {
  sessionStorage.setItem('path', `/${path}`)
}
initMenuList()
</script>

<style></style>

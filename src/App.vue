<template>
  <div class="h-screen w-full bg-body-main bg-cover bg-center bg-no-repeat">
    <el-container class="h-full w-full !bg-transparent">
      <!-- 侧边栏 -->
      <el-aside width="256px" class="h-full">
        <SideMenu />
      </el-aside>
      <!-- 内容区域 -->
      <el-container class="h-full">
        <!-- 头部菜单栏-->
        <el-header height="60px" class="p-0">
          <Header />
        </el-header>
        <!-- 内容 -->
        <el-main>
          <router-view class="min-h-max-content w-full shadow-sm border-b border-gray-200 rounded-sm" />
        </el-main>
        <!-- 底部 -->
        <el-footer height="60px" class="p-0">
          <!-- <Footer /> -->
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="js" name="App">
import Header from './layout/Header.vue';
import SideMenu from './layout/SideMenu.vue';
</script>

<style scoped></style>

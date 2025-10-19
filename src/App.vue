<template>
  <div class="h-screen w-full  bg-cover bg-center bg-no-repeat">
    <el-container class="h-full w-full">
      <!-- 侧边栏 -->
      <el-aside width="256px" class="h-full">
        <SideMenu />
      </el-aside>
      <!-- 内容区域 -->
      <el-container class="h-full">
        <!-- 头部菜单栏-->
        <el-header height="60px" class="p-0 !bg-body-main bg-cover bg-center bg-no-repeat">
          <Header />
        </el-header>
        <!-- 内容 -->
        <el-main class="!bg-body-main bg-cover bg-center bg-no-repeat">
          <router-view
            class="min-h-max-content h-max-content w-full shadow-md bg-white p-4 border-b border-gray-200 rounded-md" />
        </el-main>
        <!-- 底部 -->
        <!-- <el-footer height="60px" class="p-0">
          <Footer />
        </el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="js" name="App">
import Header from './layout/Header.vue';
import SideMenu from './layout/SideMenu.vue';
</script>

<style scoped></style>

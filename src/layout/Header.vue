<template>
    <div class="w-full">
        <el-menu mode="horizontal"
            class="flex items-center justify-between w-full shadow-sm border-b border-gray-200 rounded-sm">
            <!-- 折叠/展开按钮 -->
            <div>
                <el-icon>
                    <Fold />
                </el-icon>
                <el-icon>
                    <Expand />
                </el-icon>
            </div>


            <div class="flex items-center gap-4">
                <el-menu-item v-for="item in menuList" :key="item.path" :index="item.path">
                    <el-icon>
                        <component :is="item.icon" />
                    </el-icon>
                    <span>{{ item.name }}</span>
                </el-menu-item>


                <!-- 右侧头像下拉菜单 -->
                <div class="flex items-center mr-8">
                    <el-menu-item>
                        <el-dropdown trigger="hover" placement="bottom" class="cursor-pointer">
                            <el-avatar src="@/assets/user.jpg" class="!w-12 !h-12">
                            </el-avatar>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item v-for="personalItem in personalList" :key="personalItem.path"
                                        :index="personalItem.path">
                                        <el-icon>
                                            <component :is="personalItem.icon" />
                                        </el-icon>
                                        <span>{{ personalItem.name }}</span>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </el-menu-item>
                    <p class="text-gray-500">昵称</p>
                </div>
            </div>
        </el-menu>

    </div>
</template>

<script setup lang="js" name="Header">
import { BellFilled, QuestionFilled, Operation } from '@element-plus/icons-vue';
import { ref, markRaw } from 'vue';


const menuList = ref([
    { name: '提醒通知', path: '/remind-notice', icon: markRaw(BellFilled) },
    { name: '帮助中心', path: '/help-center', icon: markRaw(QuestionFilled) },
])

const personalList = ref([
    { name: '登录/注册', path: '/login', icon: markRaw(Operation) },
    { name: '退出登录', path: '/logout', icon: markRaw(Operation) },
])
</script>

<style scoped></style>
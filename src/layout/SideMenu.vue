<template>
    <div class="w-64 h-full flex flex-col !shadow-r-sm border border-gray-200 rounded-sm">
        <h3 class="font-bold text-xl !text-title-text text-center w-full h-[60px] leading-[60px] !text-shadow-sm">
            慢性病健康管理
        </h3>
        <el-menu @select="handleMenuSelect" class="flex-1 !border-none">
            <el-menu-item v-for="item in menuList" :key="item.path" :index="item.path" class="!text-lg">
                <el-icon class="mr-2">
                    <component :is="item.icon" class="!text-primary" />
                </el-icon>
                <span>{{ item.name }}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="js" name="SideMenu">
import { ref, markRaw } from 'vue';
import { useRouter } from 'vue-router';
import { HomeFilled, Document, Notebook, List, Histogram, User, QuestionFilled } from '@element-plus/icons-vue';

const router = useRouter();

const menuList = ref([
    { name: '首页', path: '/home', icon: markRaw(HomeFilled) },
    { name: '健康指标录入', path: '/health-input', icon: markRaw(Document) },
    { name: '用药服务', path: '/medication-service', icon: markRaw(Notebook) },
    { name: '待办事项', path: '/todo-list', icon: markRaw(List) },
    { name: '健康趋势分析', path: '/health-trend', icon: markRaw(Histogram) },
    { name: '个人中心', path: '/personal-center', icon: markRaw(User) },
    { name: '帮助中心', path: '/help-center', icon: markRaw(QuestionFilled) },
])

const handleMenuSelect = (index) => {
    router.push(index);
}
</script>

<style scoped></style>
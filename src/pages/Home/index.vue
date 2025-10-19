<template>
    <div class="flex items-center justify-between">
        <el-card shadow="always" class="w-[400px] !bg-primary-secondary border border-gray-200 rounded-md">
            <template #header class="!p-0 !m-0">
                <div class="flex items-center">
                    <el-avatar :src="userAvatar" class="!w-20 !h-20 mr-4" />
                    <div class="flex items-center">
                        <span class="text-lg">用户：张爷爷</span>
                        <div class="text-sm text-white font-bold pr-1 pl-1 ml-2 mr-2">
                            <span class="pr-1 pl-1 ml-2 mr-2 bg-blue-400 border border-gray-200 rounded-[4px]">
                                {{ userInfo.gender }}</span>
                            <span class="pr-1 pl-1 mr-2 bg-orange-400 border border-gray-200 rounded-[4px]">{{
                                userInfo.age }}岁</span>
                        </div>
                    </div>
                </div>
            </template>
            <!-- 用户信息 -->
            <div class="body-class">
                <div class="w-full">
                    <h2 class="text-md">病种：</h2>
                    <div class="flex items-center gap-1 w-full bg-white rounded-[4px] border border-gray-200 p-1">
                        <span v-for="items in diseaseList" :key="items.id" :index="items.id"
                            class="text-sm bg-primary/50 rounded-[4px] border border-gray-200 pr-1 pl-1">{{
                                userInfo.disease
                            }}</span>
                    </div>
                </div>
                <!-- <div class="w-full">
                    <h2 class="text-md">联系方式：</h2>
                    <div class="flex items-center gap-1 w-full bg-white rounded-[4px] border border-gray-200 p-1">
                        <span class="text-sm bg-primary-secondary/80 rounded-[4px] border border-gray-200 pr-1 pl-1">{{
                            userInfo.contact
                        }}</span>
                    </div>
                </div>
                <div class="w-full">
                    <h2 class="text-md">住址：</h2>
                    <div class="flex items-center gap-1 w-full bg-white rounded-[4px] border border-gray-200 p-1">
                        <span class="text-sm bg-primary-secondary/80 rounded-[4px] border border-gray-200 pr-1 pl-1">{{
                            userInfo.address
                        }}</span>
                    </div>
                </div> -->
                <div class="w-full">
                    <h2 class="text-md">病史：</h2>
                    <div class="flex items-center gap-1 w-full bg-white rounded-[4px] border border-gray-200 p-1">
                        <span class="text-sm bg-primary-secondary/80 rounded-[4px] border border-gray-200 pr-1 pl-1">{{
                            userInfo.medicalHistory
                            }}</span>
                    </div>
                </div>

                <!-- <p>病种：{{ userInfo.disease }}</p>
                <p>联系方式：{{ userInfo.contact }}</p>
                <p>住址：{{ userInfo.address }}</p>
                <p>病史：{{ userInfo.medicalHistory }}</p> -->
            </div>
        </el-card>
        <el-card shadow="always" class="w-[400px] !bg-primary-secondary border border-gray-200 rounded-md">
            <template #header class="!p-0 !m-0">
                <h3 class="text-lg">今日最新指标：</h3>
            </template>
            <div class="body-class">
                <p>血压：180/120mmHg</p>
                <p>血糖：15.0mmol/L</p>
                <p>血脂：10.0mmol/L</p>
            </div>
        </el-card>

        <!-- 按钮 -->
        <div class="flex flex-col justify-center">
            <el-button type="link">快速录入健康数据</el-button>
            <el-button type="link">查看本周健康趋势</el-button>
        </div>
        <!-- 今日健康趋势 -->
        <el-card shadow="always" class="w-[400px] !bg-primary-secondary border border-gray-200 rounded-md !p-0">
            <HealthTrend />
        </el-card>
    </div>
    <!-- 用药 -->
    <el-card shadow="always" class="w-[400px] !bg-primary-secondary border border-gray-200 rounded-md">
        <template #header class="!p-0 !m-0">
            <h3 class="text-lg">用药：</h3>
        </template>
        <div class="body-class">
            <div v-for="item in medicationList" :key="item.id" :index="item.id" class="w-full">
                <h2 class="text-md">{{ item.name }}:</h2>
                <div class="flex items-center gap-1 flex-wrap w-full bg-white rounded-[4px] border border-gray-200 p-1">
                    <span v-for="med in item.medication.split(',')" :key="med" :index="med"
                        class="text-sm bg-primary/80 rounded-[4px] border border-gray-200 pr-1 pl-1">
                        {{ med }}
                    </span>
                </div>
            </div>
        </div>
    </el-card>
</template>

<script setup lang="js" name="Home">
import userAvatar from '@/assets/images/user.jpg';
import HealthTrend from './HealthTrend/index.vue';
import { ref } from 'vue';
const userInfo = ref({
    name: '张爷爷',
    gender: '男',
    age: 80,
    contact: '13800138000',
    address: '北京市海淀区',
    disease: '高血压',
    medicalHistory: '高血压病史10年，最高血压180/120mmHg，最高血糖15.0mmol/L，最高血脂10.0mmol/L'
})
const diseaseList = ref([
    { id: 1, name: '高血压' },
    { id: 2, name: '糖尿病' },
    { id: 3, name: '高血脂' },
])

const medicationList = ref([
    { id: 1, name: '降压药', medication: '氨氯地平片,硝苯地平片,硝苯地平片,硝苯地平片' },
    { id: 2, name: '降糖药', medication: '二甲双胍片,格列齐特片' },
    { id: 3, name: '降脂药', medication: '阿托伐他汀钙片,瑞舒伐他汀钙片' },
])


</script>

<style scoped></style>
<template>
    <div class="flex items-center justify-between">
        <el-card shadow="always" class="w-[400px] !bg-primary-secondary border border-gray-200 rounded-md">
            <template #header class="!p-0 !m-0">
                <div class="flex items-center">
                    <el-avatar :src="userAvatar" class="!w-20 !h-20 mr-4" />
                    <div class="flex items-center">
                        <span class="text-lg">用户：张爷爷</span>
                        <div class="text-sm text-white font-bold pr-1 pl-1 ml-2 mr-2">
                            <span class="pr-1 pl-1 ml-2 mr-2 bg-blue-500 border border-gray-200 rounded-sm">
                                {{ userInfo.gender }}</span>
                            <span class="pr-1 pl-1 mr-2 bg-orange-500 border border-gray-200 rounded-sm">{{
                                userInfo.age }}岁</span>
                        </div>
                    </div>
                </div>
            </template>
            <div class="body-class">
                <p>病种：{{ userInfo.disease }}</p>
                <p>年龄：{{ userInfo.age }}岁</p>
                <p>性别：{{ userInfo.gender }}</p>
                <p>联系方式：{{ userInfo.contact }}</p>
                <p>住址：{{ userInfo.address }}</p>
                <p>病史：{{ userInfo.medicalHistory }}</p>
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
        <el-card shadow="always" class="w-[400px] !bg-primary-secondary border border-gray-200 rounded-md">
            <template #header class="!p-0 !m-0">
                <h3 class="text-lg">用药：</h3>
            </template>
            <div class="body-class">
                <p>降压药：氨氯地平片</p>
                <p>降糖药：二甲双胍片</p>
                <p>降脂药：阿托伐他汀钙片</p>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="js" name="Home">
import userAvatar from '@/assets/images/user.jpg'
import { ref } from 'vue'

const userInfo = ref({
    name: '张爷爷',
    gender: '男',
    age: 80,
    contact: '13800138000',
    address: '北京市海淀区',
    disease: '高血压',
    medicalHistory: '高血压病史10年，最高血压180/120mmHg，最高血糖15.0mmol/L，最高血脂10.0mmol/L'
})
</script>

<style scoped></style>
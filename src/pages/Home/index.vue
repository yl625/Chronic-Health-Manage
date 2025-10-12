<template>
    <div>
        <el-card shadow="always" class="w-[400px] !bg-primary-secondary border border-gray-200 rounded-md">
            <template #header class="!p-0 !m-0">
                <div class="flex items-center">
                    <el-avatar :src="userAvatar" class="!w-20 !h-20 mr-4" />
                    <span class="text-lg">用户：张爷爷 </span>
                </div>
            </template>
            <div class="card-body">
                <p>病种：高血压</p>
                <p>年龄：80岁</p>
                <p>性别：男</p>
                <p>联系方式：13800138000</p>
                <p>住址：北京市海淀区</p>
                <p>病史：高血压病史10年，最高血压180/120mmHg，最高血糖15.0mmol/L，最高血脂10.0mmol/L</p>
                <p>用药：降压药：氨氯地平片，降糖药：二甲双胍片，降脂药：阿托伐他汀钙片</p>
                <p>今日最新指标：血压：180/120mmHg，血糖：15.0mmol/L，血脂：10.0mmol/L</p>

            </div>
        </el-card>
        <h1>Home</h1>
    </div>
</template>

<script setup lang="js" name="Home">
import userAvatar from '@/assets/images/user.jpg'
</script>

<style scoped></style>
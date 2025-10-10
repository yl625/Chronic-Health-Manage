<template>
    <div class="login-container min-h-screen flex items-center justify-center bg-gray-50">
        <div class="max-w-md w-full space-y-8">
            <div>
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    登录/注册
                </h2>
                <p class="mt-2 text-center text-sm text-gray-600">
                    慢性病健康管理系统
                </p>
            </div>
            <div class="mt-8 space-y-6">
                <el-form :model="loginForm" label-width="80px">
                    <el-form-item label="用户名">
                        <el-input v-model="loginForm.username" placeholder="请输入用户名" />
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" />
                    </el-form-item>
                    <el-form-item>
                        <div class="flex space-x-4">
                            <el-button type="primary" @click="handleLogin" class="flex-1">登录</el-button>
                            <el-button @click="handleRegister" class="flex-1">注册</el-button>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup lang="js" name="Login">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const loginForm = ref({
    username: '',
    password: ''
});

const handleLogin = () => {
    console.log('登录', loginForm.value);
    // 这里可以添加实际的登录逻辑
    router.push('/home');
};

const handleRegister = () => {
    console.log('注册', loginForm.value);
    // 这里可以添加实际的注册逻辑
};
</script>

<style scoped></style>

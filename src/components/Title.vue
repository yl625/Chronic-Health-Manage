<template>
    <div class="flex items-center">
        <h3 :class="titleClass">{{ title }}</h3>
        <img v-if="showIcon" :src="iconAssistantAuditTitle" :alt="title" :class="iconClass" />
    </div>
</template>

<script setup lang="js" name="Title">
import iconAssistantAuditTitle from '@/assets/images/icon-assistant-audit-title.png'
import { computed } from 'vue'

// 定义props
const props = defineProps({
    // 标题文本
    title: {
        type: String,
        required: true
    },
    // 标题级别，对应不同的字体大小
    level: {
        type: String,
        default: 'lg',
        validator: (value) => ['sm', 'base', 'lg', 'xl', '2xl', '3xl'].includes(value)
    },
    // 是否显示图标
    showIcon: {
        type: Boolean,
        default: true
    },
    // 图标大小
    iconSize: {
        type: String,
        default: 'md',
        validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    // 自定义标题样式类
    customTitleClass: {
        type: String,
        default: ''
    },
    // 自定义图标样式类
    customIconClass: {
        type: String,
        default: ''
    }
})

// 计算标题样式类
const titleClass = computed(() => {
    const baseClass = 'font-semibold text-title-text'
    const sizeClass = `text-${props.level}`
    const customClass = props.customTitleClass

    return `${baseClass} ${sizeClass} ${customClass}`.trim()
})

// 计算图标样式类
const iconClass = computed(() => {
    const baseClass = 'ml-3'
    const sizeClass = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6'
    }[props.iconSize]
    const customClass = props.customIconClass

    return `${baseClass} ${sizeClass} ${customClass}`.trim()
})
</script>

<style scoped></style>
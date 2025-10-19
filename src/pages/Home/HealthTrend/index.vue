<template>
    <div id="health-trend-chart" class="w-full h-[300px]">

    </div>
</template>

<script setup lang="js" name="HealthTrend">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import * as echarts from 'echarts';
let todayChart = ref(null);

let todayChartOption = ref({
    title: {
        text: '今日健康趋势',
        textStyle: {
            color: '#17b4b1',
            fontSize: 16,
            fontWeight: 'bold',
        },
        left: '2px',
        top: '0px',
    },
    tooltip: {
        trigger: 'axis',
        label: {
            backgroundColor: '#6a7985'
        },
        axisPointer: {
            type: 'cross',
        },

        showContent: true,
    },
    legend: {
        data: ['血压', '血糖', '血脂'],
    },
    toolbox: {
        feature: {
            saveAsImage: {
                name: '今日健康趋势',
                type: 'png',
            },
        },
    },
    grid: {
        top: '20%',
    },
    xAxis: {
        type: 'category',
        data: ['早上', '中午', '晚上'],
        axisLabel: {
            color: '#17b4b1',
            fontSize: 14,
            fontWeight: 'bold',
        },
        axisLine: {
            show: true,
            lineStyle: {
                type: 'solid',
            },
        },
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed',
            },
        },
    },
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    series: [
        {
            name: '血压',
            type: 'line',
            data: [100, 200, 300],
            smooth: true,
            symbol: 'circle',
            symbolSize: 10,
            emphasis: {
                focus: 'series'
            },
            lineStyle: {
                color: '#17b4b1',
                width: 2,
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#17b4b1',
                    },
                    {
                        offset: 1,
                        color: '#f2fbf6',
                    }],
                    global: false,
                },
            },
        },
        {
            name: '血糖',
            type: 'line',
            data: [100, 180, 245],
            smooth: true,
            symbol: 'circle',
            symbolSize: 10,
            emphasis: {
                focus: 'series'
            },
            lineStyle: {
                width: 2,
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#7b1b41',
                    },
                    {
                        offset: 1,
                        color: '#f2fbf6',
                    }],
                    global: false,
                },
            },
        },
        {
            name: '血脂',
            type: 'line',
            data: [100, 195, 367],
            smooth: true,
            symbol: 'circle',
            symbolSize: 10,
            emphasis: {
                focus: 'series'
            },
            lineStyle: {
                width: 2,
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#3942f5',
                    },
                    {
                        offset: 1,
                        color: '#f2fbf6',
                    }],
                    global: false,
                },
            },
        },
    ],
});

onMounted(async () => {
    await nextTick();
    todayChart.value = echarts.init(document.querySelector('#health-trend-chart'));
    todayChart.value.setOption(todayChartOption.value);
    window.addEventListener('resize', () => {
        todayChart.value.resize();
    })
})

onUnmounted(() => {
    todayChart.value.dispose();
})
</script>

<style scoped></style>
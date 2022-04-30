<template>
  <div>
    <!-- echarts -->
    <div id="main" class="main_container"></div>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  data() {
    return {}
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      // 初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"))
      const data = [["06-05", 116], ["06-06", 129], ["06-07", 135], ["06-08", 86], ["06-09", 73], ["06-10", 85], ["06-11", 73], ["06-12", 68], ["06-13", 92], ["06-14", 130], ["06-15", 245], ["06-16", 139], ["06-17", 115], ["06-18", 111], ["06-19", 309], ["06-20", 206], ["06-21", 137], ["06-22", 128], ["06-23", 85], ["06-24", 94], ["06-25", 71], ["06-26", 106], ["06-27", 84], ["06-28", 93], ["06-29", 85], ["06-30", 73], ["07-01", 83], ["07-02", 125], ["07-03", 107], ["07-04", 82], ["07-05", 44], ["07-06", 72], ["07-07", 106], ["07-08", 107], ["07-09", 66], ["07-10", 91], ["07-11", 92], ["07-12", 113], ["07-13", 107], ["07-14", 131], ["07-15", 111], ["07-16", 64], ["07-17", 69], ["07-18", 88], ["07-19", 77], ["07-20", 83], ["07-21", 111], ["07-22", 57], ["07-23", 55], ["07-24", 60]];
            const dateList = data.map(function (item) {
                return item[0];
            });
            const valueList = data.map(function (item) {
                return item[1];
            });
      // 绘制图表
      myChart.setOption({
        visualMap: [
                    {
                        show: false,
                        type: 'continuous',
                        seriesIndex: 0,
                        min: 0,
                        max: 400
                    },
                    {
                        show: false,
                        type: 'continuous',
                        seriesIndex: 1,
                        dimension: 0,
                        min: 0,
                        max: dateList.length - 1
                    }
                ],
                title: [
                    {
                        left: 'center',
                        text: '每日新增(单位例)'
                    },
                    {
                        top: '55%',
                        left: 'center',

                    }
                ],
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: [
                    {
                        data: dateList
                    },
                    {
                        data: dateList,
                        gridIndex: 1
                    }
                ],
                yAxis: [
                    {},
                    {
                        gridIndex: 1
                    }
                ],
                grid: [
                    {
                        bottom: '60%'
                    },
                    {
                        top: '10%',
                        bottom: '60%'
                    }
                ],
                series: [
                    {
                        type: 'line',
                        showSymbol: true,
                        data: valueList
                    },
                    // {
                    //   type: 'line',
                    //   showSymbol: false,
                    //   data: valueList,
                    //   xAxisIndex: 1,
                    //   yAxisIndex: 1
                    // }
                ]
      })
    },
  },
}
</script>

<style >
.main_container {
  width: 1000px;
  height: 700px;
  background-color: white;
            margin: auto;
            margin-top: 100px;
  overflow: hidden;
}
</style>
<template>
    <div>
        <chart-1 :cdata="cdata"></chart-1>
    </div>
</template>

<script>
import Chart1 from './Chart1.vue';

export default {
    data () {
    return {
      url : "api/webapiv2/app-top/v2/hits?dataSource=Android&from=0&limit=15&platform=android&type_name=action&X-UA=V%3D1%26PN%3DWebApp%26LANG%3Dzh_CN%26VN_CODE%3D100%26VN%3D0.1.0%26LOC%3DCN%26PLT%3DPC%26DS%3DAndroid%26UID%3D1e20887d-4248-4624-8ede-61548c607501%26DT%3DPC%26OS%3DWindows%26OSV%3D10.0.0",
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
      },
      list : [],
      cdata: {
        category: [],
        barData2: [],
        barData1: [],
        rateData: []
      }
    };
  },
  components: {
    Chart1,
  },
  mounted () {
    setInterval(this.setData, 10000)
  },
  methods: {
    setData () {
      this.$axios.get(this.url,{headers:this.headers}).then(response => {
        if(response.status === 200){
            let res = response.data
            this.list = res.data.list
        }
      })
      .catch(err=>{console.log(err.statusText)})
      this.cdata.category.length = 0
      this.cdata.barData1.length = 0
      this.cdata.barData2.length = 0
      this.list.forEach((item) => {
        this.cdata.category.push(item.app.title)
        this.cdata.barData2.push(item.app.stat.hits_total)
        this.cdata.barData1.push(item.app.stat.review_count)
      })
      for (let i = 0; i < this.cdata.barData1.length -1; i++) {
        let rate = this.cdata.barData1[i] / this.cdata.barData2[i];
        this.cdata.rateData.push(rate.toFixed(2));
      }
    },
  }
}
</script>

<style>

</style>
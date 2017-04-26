/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: -1,
  nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart() {
  console.log(pageState, chartData);
  const aqiChartTiltle = document.getElementById('aqi-chart-title');
  aqiChartTiltle.innerText = `${pageState.nowSelectCity}市空气质量指数图`;
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange(time) {
  // 确定是否选项发生了变化 
  const nowGraTime = pageState.nowGraTime;
  // 设置对应数据
  if(nowGraTime == time){
    return;
  }else{
    pageState.nowGraTime = time;
  }
  // 调用图表渲染函数
  renderChart();
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange(e) {
  const citySelect = document.getElementById('city-select');
  // 确定是否选项发生了变化 
  const cityName = citySelect.value;
  // 设置对应数据
  pageState.nowSelectCity = cityName;
  chartData = aqiSourceData[cityName];
  // 调用图表渲染函数
  renderChart();
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
  const fromGraTime = document.getElementById('form-gra-time');
  fromGraTime.addEventListener('click', (e) => {
    if(e.target.nodeName == 'INPUT'){
      const nowGraTime = e.target.id.replace(/gra\-/,'');
      graTimeChange(nowGraTime);
    }
  })
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
  const citySelect = document.getElementById('city-select');
  const citySource = Object.keys(aqiSourceData).map((item) => {
        return `<option>${item}</option>` ;
  })
  citySelect.innerHTML = citySource.join('');
  pageState.nowSelectCity = citySource[0].match(/\<option\>(\S*)\<\/option\>/)[1];
  // 给select设置事件，当选项发生变化时调用函数citySelectChange
  citySelect.addEventListener('change', citySelectChange);
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
  chartData = Object.keys(aqiSourceData).map((item) =>{
    const obj = {
      day: [],
      week: [],
      month: []
    };
  
    for(let key in aqiSourceData[item]){
      //处理按每天
      const temp = {
        time : key,
        aqi : aqiSourceData[item][key]
      };
      obj.day.push(temp);
    }

    let sum=0, sum1=0, day=0;
    obj.day.forEach((e, i) =>{
      const now = +(e.time.slice(-2));
      sum += e.aqi;
      sum1 += e.aqi;
      //处理每周
      if(i%7 == 6){
        obj.week.push(Math.round(sum/7));
        sum = 0;
      }
      //处理每月
      if(now > day && i < obj.day.length-1){
        day = now;
      }else{
        obj.month.push(Math.round(sum1/day));
        day = 0;
        sum1 = 0;
      }
    })

    return {
      city: item,
      data: obj
    }
  }).reduce((a, b) => {
    return a[b['city']] = b['data'], a;
  }, {});

  renderChart();
}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
}

init();

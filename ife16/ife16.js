/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function check(cn, val){
  const cnReg = /^[\u4e00-\u9fffa-zA-Z]+$/,
        valReg = /^\d+$/;
  return [cnReg.test(cn), valReg.test(val)];
}
function addAqiData() {
  const cityName = document.getElementById('aqi-city-input').value.trim(),
        aqiValue = document.getElementById('aqi-value-input').value.trim();
  if(!(check(cityName, aqiValue)[0] && check(cityName, aqiValue)[1])){
    if(!check(cityName, aqiValue)[0]){
      alert('城市名称不是中英文字符！')
    }
    if(!check(cityName, aqiValue)[1]){
      alert('空气质量不是整数！')
    }
    return;
  }else{
    aqiData[cityName] = +aqiValue;
    console.log(aqiData);
  } 

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
  const fragment = document.createDocumentFragment();
  const aqiDataArr = Object.keys(aqiData);
  document.getElementById('aqi-table').innerHTML = '';
  if(aqiDataArr.length > 0){
    const ndTitle = document.createElement('tr');
    ndTitle.innerHTML = `<td>城市</td><td>空气质量</td><td>操作</td>`;
    fragment.appendChild(ndTitle);
  }
  aqiDataArr.forEach((key) => {
    const ndTr = document.createElement('tr');
    ndTr.className = key;
    ndTr.innerHTML = `<td>${key}</td><td>${aqiData[key]}</td><td><button>删除</button></td>`;
    fragment.appendChild(ndTr);
  })
  document.getElementById('aqi-table').appendChild(fragment);
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(cls) {
  // do sth.
  delete aqiData[cls];
  renderAqiList();
}

function init() {
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  document.getElementById('add-btn').addEventListener('click',addBtnHandle);
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  document.getElementById('aqi-table').addEventListener('click', function(e){
    if(e.target.nodeName == 'BUTTON'){
      delBtnHandle(e.target.parentNode.parentNode.className);
    }
  })
}


var map1 = new BMap.Map("allmap");            // 创建Map实例
var point1 = new BMap.Point(120.0683017383,35.8881988901);
map1.centerAndZoom(point1, 16);
map1.enableScrollWheelZoom();                  //启用滚轮放大缩小
var marker = new BMap.Marker(point1);  // 创建标注
map1.addOverlay(marker);              // 将标注添加到地图中

var opts = {
    width: 200,     // 信息窗口宽度
    height: 80,     // 信息窗口高度
    title: "红树林会议会展中心", // 信息窗口标题
    enableMessage: true,//设置允许信息窗发送短息
    message: ""
};
var infoWindow1 = new BMap.InfoWindow("山东省青岛市黄岛区滨海大道3588号", opts);  // 创建信息窗口对象
marker.addEventListener("click", function () {
    map1.openInfoWindow(infoWindow1, point1); //开启信息窗口
});


//加载第二张地图
var map2 = new BMap.Map("mettingMap");            // 创建Map实例
var point2 = new BMap.Point(120.0683017383,35.8881988901);
map2.centerAndZoom(point2, 16);
map2.enableScrollWheelZoom();                  //启用滚轮放大缩小


var marker2 = new BMap.Marker(point2);  // 创建标注
map2.addOverlay(marker2);              // 将标注添加到地图中

var opts2 = {
    width: 200,     // 信息窗口宽度
    height: 80,     // 信息窗口高度
    title: "红树林会议会展中心", // 信息窗口标题
    enableMessage: true,//设置允许信息窗发送短息
    message: ""
};
var infoWindow2 = new BMap.InfoWindow("山东省青岛市黄岛区滨海大道3588号", opts2);  // 创建信息窗口对象
marker2.addEventListener("click", function () {
    map2.openInfoWindow(infoWindow2, point2); //开启信息窗口
});

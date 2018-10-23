var mettingM = new BMap.Map("mettingMap");
var point = new BMap.Point(120.0683017383,35.8881988901);
var marker = new BMap.Marker(point);  // 创建标注
mettingM.addOverlay(marker);              // 将标注添加到地图中
mettingM.centerAndZoom(point, 15);
mettingM.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
mettingM.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
var opts = {
  // width : 200,     // 信息窗口宽度
  // height: 100,     // 信息窗口高度
  title : "海底捞王府井店" , // 信息窗口标题
  enableMessage:true,//设置允许信息窗发送短息
  message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
}
var infoWindow = new BMap.InfoWindow("山东省青岛市黄岛区滨海大道3588号", opts);  // 创建信息窗口对象
marker.addEventListener("click", function(){
    mettingM.openInfoWindow(infoWindow,point); //开启信息窗口
});


// var markerArr = [
//             { title: "名称：山东省青岛市黄岛区滨海大道3588号。", point: "120.0683017383,35.8881988901", address: "山东省青岛市黄岛区滨海大道3588号(No. 600 West Binhai Road, Shahekou District, Dalian, Liaoning, China)"}
//         ];
// var map2;
// function map_init() {
//     map2 = new BMap.Map("mettingMap");
//     //第1步：设置地图中心点，山东省青岛市黄岛区滨海大道3588号
//     var point = new BMap.Point(120.0704717383,35.8877188901);
//     //第2步：初始化地图,设置中心点坐标和地图级别。
//     map2.centerAndZoom(point, 16);
//     //第3步：启用滚轮放大缩小
//     map2.enableScrollWheelZoom(true);
//     //第4步：向地图中添加缩放控件
//     // var ctrlNav = new window.BMap.NavigationControl({
//     //     anchor: BMAP_ANCHOR_TOP_LEFT,
//     //     type: BMAP_NAVIGATION_CONTROL_LARGE
//     // });
//     // map.addControl(ctrlNav);
//     //第5步：向地图中添加缩略图控件
//     var ctrlOve = new window.BMap.OverviewMapControl({
//         anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
//         isOpen: 1
//     });
//     map2.addControl(ctrlOve);

//     //第6步：向地图中添加比例尺控件
//     var ctrlSca = new window.BMap.ScaleControl({
//         anchor: BMAP_ANCHOR_BOTTOM_LEFT
//     });
//     map2.addControl(ctrlSca);

//     //第7步：绘制点
//     for (var i = 0; i < markerArr.length; i++) {
//         var p0 = markerArr[i].point.split(",")[0];
//         var p1 = markerArr[i].point.split(",")[1];
//         var maker = addMarker(new window.BMap.Point(p0, p1), i);
//         addInfoWindow(maker, markerArr[i], i);
//     }
// }

// // 添加标注
// function addMarker(point, index) {
//     var myIcon = new BMap.Icon("http://api.map.baidu.com/img/markers.png",
//         new BMap.Size(23, 25), {
//             offset: new BMap.Size(10, 25),
//             imageOffset: new BMap.Size(0, 0 - index * 25)
//         });
//     var marker = new BMap.Marker(point, { icon: myIcon });
//     map2.addOverlay(marker);
//     return marker;
// }

// // 添加信息窗口
// function addInfoWindow(marker, poi) {
//     //pop弹窗标题
//     var title = '<div style="font-weight:bold;color:#CE5521;font-size:14px">' + poi.title + '</div>';
//     //pop弹窗信息
//     var html = [];
//     html.push('<table cellspacing="0" style="table-layout:fixed;width:100%;font:12px arial,simsun,sans-serif"><tbody>');
//     html.push('<tr>');
//     html.push('<td style="vertical-align:top;line-height:16px;width:38px;white-space:nowrap;word-break:keep-all">地址:</td>');
//     html.push('<td style="vertical-align:top;line-height:16px">' + poi.address + ' </td>');
//     html.push('</tr>');
//     html.push('</tbody></table>');
//     var infoWindow = new BMap.InfoWindow(html.join(""), { title: title, width: 200 });

//     var openInfoWinFun = function () {
//         marker.openInfoWindow(infoWindow);
//     };
//     marker.addEventListener("click", openInfoWinFun);
//     return openInfoWinFun;
// }

// //异步调用百度js
// function map_load() {
//     var load = document.createElement("script");
//     load.src = "http://api.map.baidu.com/api?v=1.4&callback=map_init";
//     document.body.appendChild(load);
// }
// window.onload = map_load;

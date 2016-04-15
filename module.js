/**
 * Created  on 2016/4/12.
 */
function module_height(){
    var map_height = document.documentElement.clientHeight;    //获取页面可见高度
    var elControl = document.getElementById("control");
    var elCodearea = document.getElementById("codearea");
    var elDemo = document.getElementById("demo");
    var hControl = elControl.offsetHeight;    //获取控制板高度
    var hCodearea = elCodearea.offsetHeight;    //获取代码显示区域高度
    elDemo.style.height=map_height-hCodearea-hControl+'px';    //计算演示板块高度
}
window.onload = function()
{
    setInterval("update_aniate()",50);    //设置定时更新DOM
    if(screen.width>640){
        module_height();
    }
};
window.onresize = function(){
    if(screen.width>640){
        module_height();    //缩放保证完整一屏显示
    }
};
/**
 * Created  on 2016/4/12.
 */
function module_height(){
    var map_height = document.documentElement.clientHeight;    //��ȡҳ��ɼ��߶�
    var elControl = document.getElementById("control");
    var elCodearea = document.getElementById("codearea");
    var elDemo = document.getElementById("demo");
    var hControl = elControl.offsetHeight;    //��ȡ���ư�߶�
    var hCodearea = elCodearea.offsetHeight;    //��ȡ������ʾ����߶�
    elDemo.style.height=map_height-hCodearea-hControl+'px';    //������ʾ���߶�
}
window.onload = function()
{
    setInterval("update_aniate()",50);    //���ö�ʱ����DOM
    if(screen.width>640){
        module_height();
    }
};
window.onresize = function(){
    if(screen.width>640){
        module_height();    //���ű�֤����һ����ʾ
    }
};
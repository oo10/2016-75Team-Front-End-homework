/**
 * Created on 2016/4/14.
 */
var options = new Array();
options['css3']   = true;
options['webkit'] = true;
options['gecko']  = true;

function update_options(){
    options['css3']   = document.getElementById('opt_css3').checked;
    options['webkit'] = document.getElementById('opt_webkit').checked;
    options['gecko']  = document.getElementById('opt_gecko').checked;
}

function update_text(){
    var timing = document.getElementById('timing').value;
    var range0 = document.getElementById('range0value').innerHTML;
    var range1 = document.getElementById('range1value').innerHTML;
    var range2 = document.getElementById('range2value').innerHTML;
    var range3 = document.getElementById('range3value').innerHTML;
    var range4 = document.getElementById('range4value').innerHTML;
    var code1 = "transition:" + " all " + range0 +"s" + " " + timing + ";\n";   //transition基本动画代码生成
    var code2 = "transform: scale(" + range1 + ")" + " rotate(" + range2 +"deg" + ")" + " translate(" + range3 + "px)" + " skew(" + range4 + "deg)" + ";\n";    //transform动画代码生成
    update_options();
    if(options['css3']&&options['webkit']&&options['gecko']){
        code2 += "-webkit-"+code2 + "-moz-"+code2;
        code1 += "-webkit-"+code1 + "-moz-"+code1;
    }
    else if(options['webkit']&&options['gecko']){
        code2 = "-webkit-"+code2 + "-o-"+code2;
        code1 = "-webkit-"+code1 + "-o-"+code1;
    }
    else if(options['css3']&&options['webkit']){
        code2 += "-webkit-"+code2;
        code1 += "-webkit-"+code1;
    }
    else if(options['css3']&&options['gecko']){
        code2 += "-moz-"+code2;
        code1 += "-moz-"+code1;
    }
    else if(options['webkit']){
        code2 = "-webkit-"+code2;
        code1 = "-webkit-"+code1;
    }
    else if(options['gecko']){
        code2 = "-moz-"+code2;
        code1 = "-moz-"+code1;
    }
    else if(options['css3']){
    }
    else {
        code2 = "";
        code1 = "";
    }
    document.getElementById("textdispaly").innerText = code1 + code2;  //复制到CODE框
}
function update_aniate(){
    update_text();
    var code = document.getElementById("textdispaly").value;
    document.getElementById("demodisplay").style.cssText = code;  //赋值到内联样式
}
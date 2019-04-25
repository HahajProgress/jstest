function getstyle(obj,name)//取樣式數值兼容程式
{
    if(obj.currentStyle)
    {
        return obj.style[name];
    }
    else{
        return getComputedStyle(obj,false)[name];
    }
}

/*function css(obj,name,value){
if(arguments.length==2)
{
    return obj.style[name];
}
else{
     obj.style[name]=value;
}
}*/
function changecss(){
    var con=document.getElementById('con');
    alert(getstyle(con,'width'));
}

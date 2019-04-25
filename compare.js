
window.onload=function () {
    
    var btn1=document.getElementById('btn1');
    var txt1=document.getElementById('txt1');
    var txt2=document.getElementById('txt2');
    var sum=document.getElementById('sum');
    
    btn1.onclick=function () {
        
        if(isNaN(txt1.value))
        {
            alert('txt1不是數字');
        }
        else if(isNaN(txt2.value)){
            alert('txt2不是數字');
        }
        else{
            sum.innerHTML="總和:"+(parseInt(txt1.value)+parseInt(txt2.value));
            console.log(parseInt(txt1.value)+parseInt(txt2.value));
        }
    
    };
    
};
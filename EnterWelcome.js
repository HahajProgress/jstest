
function move() {
  var ansshow=document.getElementById('ans');
  var txt=document.getElementById('txt').value;
    // document.getElementById('btn').value=txt;
  document.getElementById('btn').innerHTML=txt;


  var sex=document.getElementsByName("sex");
  if(txt=="變態")
  {
    alert("變態");
    ansshow.style.display='none';
    console.log('true');
  }
  else{
    ansshow.style.display='block';
    
    console.log('false');
  }
  

  for(var i=0;i<sex.length;i++)
  {
      if(sex[i].checked)
      {
        ansshow.innerHTML="歡迎!"+ txt + sex[i].value;
      }
  }
}
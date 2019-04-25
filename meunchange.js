function meunchange() {
     var odemo=document.getElementById('demo2');
     var obtn=odemo.getElementsByTagName('input');
     var odiv=odemo.getElementsByTagName('div')[0];
     var arr=['好吃在哪裡?我就吃到底!','說你宅還不信，信我者雷姆老婆','韓國瑜到底是什麼魚',"戴姿營又獲得一面金牌，世界積分提升"];
     for(var i=0;i<obtn.length;i++)
      {
           obtn[i].index=i;
           obtn[i].onmousemove=function(){
               for(var i=0;i<obtn.length;i++)
               {
                   obtn[i].className="";
               }
                this.className="active";
                odiv.innerHTML='<h2>'+this.value+"快報"+'</h2>'+'<p>'+arr[this.index]+'</p>';
                console.log('true');
           }
         
      }
      
 }
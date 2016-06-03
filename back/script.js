//页面加载完后触发
window.onload=function(){
	var obtn=document.getElementById('btn');
	var timer=null;
	var isTop=true;
	var clientHeight=document.documentElement.clientHeight;//获取页面可视区高度，让回到顶部图标隐藏和出现

	//滚动条在滚动中触发,在回到顶部过程中可以清除定时器随时停下来
	window.onscroll=function(){
		var osTop=document.documentElement.scrollTop || document.body.scrollTop;//隐藏图标
		if(osTop>=clientHeight){
			obtn.style.display="block";
		}
		else{
			obtn.style.display="none";
		}
		if(!isTop){
			clearInterval(timer);
		}
		isTop=false;
	}

	obtn.onclick=function(){
		//设置定时器
        timer=setInterval(function(){
        	//获取滚动条距离顶部的高度
        	var osTop=document.documentElement.scrollTop || document.body.scrollTop;//谷歌浏览器支持document.body.scrollTop,其他浏览器支持document.documentElement.scrollTop
        	//设置回到顶部的速度由快变慢
        	var ispeed=Math.floor(-osTop/6);//Math.floor()函数取整数
            document.documentElement.scrollTop=document.body.scrollTop=osTop+ispeed;//点击后滚动值由快到慢
            isTop=true;
            if (osTop==0) {
            	clearInterval(timer);
            }
        },30);
		
	}
	// obtn.onclick=function(){
	// 	//设置定时器
 //        timer=setInterval(function(){
 //        	//获取滚动条距离顶部的高度
 //        	var osTop=document.documentElement.scrollTop || document.body.scrollTop;//谷歌浏览器支持document.body.scrollTop,其他浏览器支持document.documentElement.scrollTop
 //            document.documentElement.scrollTop=document.body.scrollTop-=50;//点击后滚动值为每次减50
 //            if (osTop==0) {
 //            	clearInterval(timer);
 //            }
 //        },30);
		
	// }
}
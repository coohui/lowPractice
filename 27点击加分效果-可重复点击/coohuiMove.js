// JavaScript Document
function doMove(obj,attr,dir,target,endFn){
	
	if(attr=='opacity')
	{
		target=Math.abs(target);
		dir=parseFloat(getStyle(obj,attr))*100<target?dir:-dir;
		
	}else
	{
		dir=parseInt(getStyle(obj,attr))<target?dir:-dir;
	}
	clearInterval(obj.timer);
	var speed=null;
	obj.timer=setInterval(function(){

		function Judge()
		{
			  if(speed>target&&dir>0||speed<target&&dir<0||attr=='opacity'&&speed>=100)
			  {
				  attr=='opacity'&&speed>=100?speed=target=100:speed=target;
			  }
		}
		Judge();
		
		if(attr=='opacity')
		{
			 speed=parseInt(parseFloat(getStyle(obj,attr))*100)+dir;
             Judge();
			 obj.style.filter = 'alpha(opacity='+speed+')';
			 obj.style.opacity=speed/100;
			 
		}else
		{
			speed=parseInt(getStyle(obj,attr))+dir;
			Judge();
			obj.style[attr]=speed+'px';
		}
		
		if(speed===target)
		{
			clearInterval(obj.timer);
			endFn&&endFn();
		}
		
	},30);
	
   function getStyle(obj,attr){ return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];}	
}













































window.onload=function(){
    var banner = new Swiper(".banner_carBox",{
			direction:'horizontal',
			loop: true,
		    pagination: '.swiper-pagination',
		    paginationType : 'bullets',
		    paginationClickable :true,
		    paginationHide :true,
	  		autoplay :3000,
			})
		
		var navBox_advBox = new Swiper(".nav_advBox",{
			direction:'vertical',
			autoplay:1500,
//			effect : 'coverflow',
			loop:true,
			})
		
		var navBox_advBox = new Swiper(".buyOnHand_goodsBox",{
			direction:'horizontal',
			autoplay:2000,
			loop:true,
			})
	
	//回到顶部
	var gotop=document.querySelector("#gotop");
	gotop.onclick=function(){
		 document.documentElement.scrollTop = document.body.scrollTop =0;
	}
	
	//倒计时
	var interval = 1000; 
				function ShowCountDown(year,month,day,divname) 
				{ 
					var now = new Date(); 
					var endDate = new Date(year, month-1, day); 
					var leftTime=endDate.getTime()-now.getTime(); 
					var leftsecond = parseInt(leftTime/1000); 
					//var day1=parseInt(leftsecond/(24*60*60*6)); 
					var day1=Math.floor(leftsecond/(60*60*24)); 
					var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
					var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
					var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
					var h = document.getElementById("timer_h"); 
					var i = document.getElementById('timer_i'); 
					var s = document.getElementById('timer_s'); 
					h.innerHTML = hour;
					i.innerHTML = minute;
					s.innerHTML = second;
				} 
				window.setInterval(function(){ShowCountDown(2016,12,31,'divdown1');}, interval); 
}

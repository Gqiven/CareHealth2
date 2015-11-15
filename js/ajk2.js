$(document).ready(function(){
		move2();
		move3();
		move4();
		$('a').bind("focus", function(){
    		$(this).blur();
		});//清除click <a>的虚框，用jquery无兼容问题
		setInterval("move2()",12000);
		setInterval("move3()",12000);
		setInterval("move4()",12000);
		$(".circle-node").animate({opacity:"1"},3000);
		$("#days-data1").animate({opacity:"1"},1000);
		$("#days-data2").animate({opacity:"1"},1000);
		$(".date-num-span").animate({opacity:"1"},3000);
		$(".plan-p1").animate({opacity:"1"},1000);
		$(".weight-circle").animate({opacity:"1"},4500);
		$(".trent-num").animate({opacity:"1"},3000);
		$(".path2").mouseover(function(){
			$(this).css("transform","matrix(1.1,0,0,1.1,-14.5,-11.5)");
			
		});
		$(".path2").mouseout(function(){
			$(this).css("transform","matrix(1,0,0,1,0,0)");
			
		});
		$(".path4").mouseover(function(){
			$(this).css("transform","matrix(1.1,0,0,1.1,-9.9,-4)");
			
		});
		$(".path4").mouseout(function(){
			$(this).css("transform","matrix(1,0,0,1,0,0)");
			
		});
		hideShowUserM();
		clickMaster();
		clickEquipment();
		clickTargetDateA();
		clickIndex();
		clickEqShowPc1();
		clickEqShowPc2();
		showAllMadle();
		hideAllMadel();
	});
	function showMsg(obj,e)
	{
	    alert(obj.id);
	    stopBubble(e);
	}

	//阻止事件冒泡函数
	function stopBubble(e)
	{
	    if (e && e.stopPropagation){
	    	e.stopPropagation();
	    }    
	    else{
	        window.event.cancelBubble=true;}
	}
	function move2(){
		$(".ball2").animate({top:'+=15'},4000).animate({top:'-=30'},4000).animate({top:'+=15'},4000);
	}
	function move3(){
		$(".ball3").animate({top:'+=20'},4000).animate({top:'-=40'},4000).animate({top:'+=20'},4000);
	}
	function move4(){
		$(".ball4").animate({top:'+=20'},4000).animate({top:'-=40'},4000).animate({top:'+=20'},4000);
	}
    function clickTargetDateA(){
    	$(".target-dateA").click(function(){
    		$(this).parent().parent().children().removeClass("dateBackground2").addClass("dateBackground1");
    		$(this).parent().removeClass("dateBackground1").addClass("dateBackground2");//需要先移除再加，只表现第一个class属性
    		var lis = $(".health-target").children().children();
    		var classNameD = $(this).parent().attr("class").toString();
    		var idNameD = $(this).parent().attr("id").toString();
    		var cs = $(".curve");
			for(var  i= 0,l =cs.length;i < l;i++){
				$(".curve").css("display","none");	
			}
				
    		if(idNameD=="target-date3"){
    			var whichT2;
    			for(var i=0,l=lis.length;i<l;i++){
    				var classNameT = $(lis[i]).attr("class").toString();
    				var idNameT = $(lis[i]).attr("id").toString();
    				if(classNameT=="healthTargetLi2") {
    					whichT2=i;
    					if(whichT2==0){
    						document.getElementById('iframe3').src="./stylesheets/sportCurve.html";
    					}
    					if(whichT2==1){
    						document.getElementById('iframe3').src="./stylesheets/weightCurve.html";
    					}
    					if(whichT2==2){
    						document.getElementById('iframe3').src="./stylesheets/shareLine.html";
    					}
    					else if(whichT2==3){
    						document.getElementById('iframe3').src="./stylesheets/bloodSugarCurve.html";
    					}
    				}
    			}
    		}else {
    			var whichT1;
    			for(var i=0,l=lis.length;i<l;i++){
    				var classNameT = $(lis[i]).attr("class").toString();
    				var idNameT = $(lis[i]).attr("id").toString();
    				if(classNameT=="healthTargetLi2") {
    					whichT1=i;
    					if(whichT1==0){
    						document.getElementById('iframe3').src="./stylesheets/sportCurve.html";
    					}
    					if(whichT1==1){
    						document.getElementById('iframe3').src="./stylesheets/weightCurve.html";
    					}
    					if(whichT1==2){
    						document.getElementById('iframe3').src="./stylesheets/bloodPressureCurve.html";
    					}
    					else if(whichT1==3){
    						document.getElementById('iframe3').src="./stylesheets/bloodSugarCurve.html";
    					}
    				}
    			}
    		}
    	});
    }

    function clickIndex(){
			$(".index").click(function () {
			$(this).parent().parent().children().removeClass("healthTargetLi2").addClass("healthTargetLi1");
    		$(this).parent().removeClass("healthTargetLi1").addClass("healthTargetLi2");
    		var lis = $(".health-date").children().children();
    		var cs = $(".curve");
			for(var  i= 0,l =cs.length;i < l;i++){
				$(".curve").css("display","none");	
			}
			var idNameT = $(this).parent().attr("id").toString();
			var classNameT = $(this).parent().attr("class").toString();
			if(idNameT=="targetLi3"){
				var whichT2;
				for(var i=0,l=lis.length;i<l;i++){
    				var classNameD = $(lis[i]).attr("class").toString();	
    				var idNameD = $(lis[i]).attr("id").toString();
    				if(classNameD=="dateBackground2"){
    					whichT2 = i;
    					if(whichT2==0){
    						document.getElementById('iframe3').src="./stylesheets/bloodPressureCurve.html";
    					}
    					if(whichT2==1){
    						document.getElementById('iframe3').src="./stylesheets/bloodSugarCurve.html";
    					}
    					if(whichT2==2){
    						document.getElementById('iframe3').src="./stylesheets/shareLine.html";
    					}
    				}
    			}
			}
			if(idNameT=="targetLi1"){
				for(var i=0,l=lis.length;i<l;i++){
					document.getElementById('iframe3').src="./stylesheets/sportCurve.html";
				}
			}
			if(idNameT=="targetLi2"){
				for(var i=0,l=lis.length;i<l;i++){
					document.getElementById('iframe3').src="./stylesheets/weightCurve.html";
				}
			}
			if(idNameT=="targetLi4"){
				for(var i=0,l=lis.length;i<l;i++){
					document.getElementById('iframe3').src="./stylesheets/bloodSugarCurve.html";
				}
			}
		});
	}
	function clickMaster(){
		$(".menuMaster").click(function () {
			var pArray = $(".menuMaster");
			for(var i=0,l = pArray.length;i < l;i++){
				$(pArray[i]).css({"background":"#f3f3f3"});
				$(pArray[i]).children().css("color","#666");
			}
			$(this).css({"background":"#6f9f00"});
			$(this).children().css("color","#fff");
		});
	}
	function clickEquipment(){
		$(".equipment").click(function () {
			var hArray = $(".equipment");
			for(var i=0, l= hArray.length;i < l;i++){
				$(hArray[i]).css({"background":"#fff","color":"#666"});
				$(hArray[i]).children().css("color","#666");
			}
			$(this).css({"background":"#7dbe0f","color":"#fff"});
			$(this).children().css("color","#fff");//$(this).attr("a"); ERROR!!  WHY?????
			document.getElementById('iframe1').src="./stylesheets/reload2.html";
		});
	}
	function clickEqShowPc1(){
		$("#equipment1").click(function(){
			document.getElementById('iframe2').src="./stylesheets/column2.html";
		});
	}
	function clickEqShowPc2(){
		$("#equipment2").click(function(){
			document.getElementById('iframe2').src="./stylesheets/column1.html";
		});
	}
	function showAllMadle(){
		$("#allMaster").click(function(){
			$("#allMadle").css("display","block");
		});
	}
	function hideAllMadel(){
		$(".menuMaster").click(function () {
			$("#allMadle").css("display","none");
		});
		showAllMadle();
	}





	$(".ball2").mouseover(function(){
		$("#fire-energy").css({
			background:"#fff",
			color:"#f09f11"
		});
	});
	$(".ball2").mouseout(function(){
		$("#fire-energy").css({
			background:"#f09f11",
			color:"#fff"
		});
	});
	$(".ball3").mouseover(function(){
		$("#sport-days").css({
			background:"#fff",
			color:"#7DB819"
		});
	});
	$(".ball3").mouseout(function(){
		$("#sport-days").css({
			background:"#7DB819",
			color: "#fff"
		});
	});
	$(".ball4").mouseover(function(){
		$("#sport-km").css({
			background:"#fff",
			color:"#2ba8d7"
			});
	});
	$(".ball4").mouseout(function(){
		$("#sport-km").css({
			background: "#2ba8d7",
			color:"#fff"
		});
	});




        var Sys = {};

        var ua = navigator.userAgent.toLowerCase();

        var s;

        (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :

        (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :

        (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :

        (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :

        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;



        //以下进行测试
        if(Sys.firefox){
        	function hideShowUserM(){
				$("#userMessageA").click(function(){
        			var hs = $("#userMune").attr("class").toString();
        			if(hs == "hideTagName"){
        				$("#userMune").removeClass("hideTagName").addClass("showTagName");
        			}else{
        				$("#userMune").removeClass("showTagName").addClass("hideTagName");
        			}
        		});
        	}
        }else{
        	function hideShowUserM(){
				$(document).click(function(e){
    		//var obj = e.srcElement || e.target;
    				e = window.event || event ||e;
			//alert("id");
					var obj = event.srcElement ? event.srcElement : event.target;
            		var id = obj.id;
            		var hs = $("#userMune").attr("class").toString();
            		if(hs == "hideTagName"){
            	//
            			if(id == "userMessageA"){ 
            				$("#userMune").removeClass("hideTagName").addClass("showTagName");
            			}
            		}else if(hs == "showTagName"){
            			$("#userMune").removeClass("showTagName").addClass("hideTagName");
            		}
    			});
			}
        }
        //if (Sys.ie) document.write('IE: ' + Sys.ie);
        /*if (Sys.ie) {
        	$("#pc1").css("display","none");
        	$("#pc2").css("display","block");
    }
        if (Sys.firefox) {
        	$("#pc1").css("display","block");
        	$("#pc2").css("display","none");
        }

        if (Sys.chrome) {
        	$("#pc1").css("display","block");
        	$("#pc2").css("display","none");
        }

        if (Sys.opera) {
        	$("#pc1").css("display","block");
        	$("#pc2").css("display","none");
        }

        if (Sys.safari) {
        	$("#pc1").css("display","none");
        	$("#pc2").css("display","block");
        }*/
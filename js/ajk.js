
$(document).ready(function(){
	move2();
	move3();
	move4();
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
function hideShowUserM(){
	$(document).click(function(e){
		//alert("id");
		e = window.event || event ||e;
		var obj = e.srcElement || e.target;
        var id = obj.id;
        if(id == "userMessageA"){ 
        	$("#userMune").removeClass("hideTagName").addClass("showTagName");
        }else{
        	$("#userMune").removeClass("showTagName").addClass("hideTagName");
        }
		//$("#userMune").removeClass("showTagName").addClass("hideTagName");///a在body里，所以不出
	});
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
						$(".health-pc").css("display","block");
					}
					if(whichT2==1){
						$(".health-pc").css("display","none");
						$(".health-pc-none").css("display","block");
						$("#weightCurve").css("display","block");
					}
					if(whichT2==2){
						$(".health-pc").css("display","none");
						$(".health-pc-none").css("display","block");
						$("#bloodPressureCurve").css("display","block");
					}
					else if(whichT2==3){
						$(".health-pc").css("display","none");
						$(".health-pc-none").css("display","block");
						$("#bloodSugarCurve").css("display","block");
					}
				}
			}
		}else{
			var whichT1;
			for(var i=0,l=lis.length;i<l;i++){
				var classNameT = $(lis[i]).attr("class").toString();
				var idNameT = $(lis[i]).attr("id").toString();
				if(classNameT=="healthTargetLi2") {
					whichT1=i;
					if(whichT1==0){
					$(".health-pc").css("display","none");
					$(".health-pc-none").css("display","block");
					$("#sportCurve").css("display","block");
					}
					if(whichT1==1){
						$(".health-pc").css("display","none");
						$(".health-pc-none").css("display","block");
						$("#weightCurve").css("display","block");
					}
					if(whichT1==2){
						$(".health-pc").css("display","none");
						$(".health-pc-none").css("display","block");
						$("#bloodPressureCurve").css("display","block");
					}
					else if(whichT1==3){
						$(".health-pc").css("display","none");
						$(".health-pc-none").css("display","block");
						$("#bloodSugarCurve").css("display","block");
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
		if(idNameT=="targetLi1"){
			for(var i=0,l=lis.length;i<l;i++){
				var classNameD = $(lis[i]).attr("class").toString();	
				var idNameD = $(lis[i]).attr("id").toString();
				if(idNameD=="target-date3"){
					$(".health-pc").css("display","block");
					$(".health-pc-none").css("display","none");
				}
				if(idNameD=="target-date1" ||idNameD=="target-date2"){
					$(".health-pc").css("display","none");
					$(".health-pc-none").css("display","block");
					$("#sportCurve").css("display","block");
				}
			}
		}
		if(idNameT=="targetLi2"){
			for(var i=0,l=lis.length;i<l;i++){
				$(".health-pc").css("display","none");
				$(".health-pc-none").css("display","block");
				$("#weightCurve").css("display","block");
			}
		}
		if(idNameT=="targetLi3"){
			for(var i=0,l=lis.length;i<l;i++){
				$(".health-pc").css("display","none");
					$(".health-pc-none").css("display","block");
					$("#bloodPressureCurve").css("display","block");
			}
		}
		if(idNameT=="targetLi4"){
			for(var i=0,l=lis.length;i<l;i++){
				$(".health-pc").css("display","none");
					$(".health-pc-none").css("display","block");
					$("#bloodSugarCurve").css("display","block");
			}
		}
	});
}
function clickMaster(){
	$(".menuMaster").click(function () {
		var pArray = $(".menuMaster");
		for(var i=0,l = pArray.length;i < l;i++){
			$(pArray[i]).css({"background":"#f3f3f3"});//,"color":"#666"
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
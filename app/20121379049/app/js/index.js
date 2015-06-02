$(function(){


	var $hgroupli = $("hgroup>ul>li");
	var $contli = $("#cont li");
	var $cont = $("#cont");
	var $hgroup = $("hgroup");
	var $article = $("article");
	var width = $article.width()-$hgroup.width();
	var height = $article.height();
	function position(){
		$cont.css({
		"margin-left":(width-$cont.width())/2+"px",
		"margin-top":(height-$cont.height())/2+"px"
	});
};
	position();
	$hgroupli.mouseenter(function() 
	{

		$hgroupli.css({
			"width": '91%',
			"height": '8%'
		});

		$(this).css({
			"width":"100%",
			"height":"9%"
		});
		$contli.stop().siblings().fadeOut(300).eq($(this).index()).fadeIn(500);
		
	});
// 鼠标拖拽事件 
	var mouseX = 0;
	var mouseY = 0;
	var isOk = false;
	$hgroupli.mousedown(function(event) {
		var e = event || window.event;
		mouseY = e.pageY -parseInt($(this).css("top"));
		isOk = true;
		
	});

	$hgroupli.mousemove(function(event) {
	if(isOk==true){	
			if($(this).offset().top-$hgroup.offset().top>=0 && $(this).offset().top-$hgroup.offset().top<$hgroup.height()-$(this).height()){
				var e = event|| winodw.event;
				var Y = e.pageY;
				moveY = Y - mouseY;
				$hgroupli.css("z-index","1");
				$(this).css({
					"top": moveY,
					"z-index":"999"
				});
				
			}
			else
			{
				$(this).css("top","0px");
			}
			}
		});

	$(document).mouseup(function() {
		isOk=false;
	});


});
// make images with class ".full-width-img" appear full-width
   $(document).ready(function(){
   	$(".full-width-img").wrap("<figure class='extra-wide-img'></figure>");
   	$("figure.extra-wide-img").each(function(item, i, arr){
   		if ($(this).children("img.full-width-img")[0].naturalWidth > $(this).children("img.full-width-img").width()){
   			var containerMargins = $(".container").css("marginRight").replace(/[^-\d\.]/g, '');
   			var containerPadding = $(".container").css("paddingRight").replace(/[^-\d\.]/g, '');
   			var calc = $(".container").width() + (Number(containerMargins) + Number(containerPadding))*2;
   			$(this).css({"maxWidth": `${calc}px`, "margin": `1em -${Number(containerMargins) + Number(containerPadding)}px`});
   		}
   	});
   });

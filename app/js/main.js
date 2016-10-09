(function(){
	var Util = (function(){
		var prefix = 'html5_reader_';
		var StorageGetter = function(key){
			return localStorage.getItem(prefix+key);
		}
		var StorageSetter = function(key,val){
			return localStorage.setItem(prefix+key,val);
		}
		return{
			StorageGetter:StorageGetter,
			StorageSetter:StorageSetter
		}
	})();
//存储

	var Dom = {
		top_nav:$('#top-nav'),
		bottom_nav:$('.bottom_nav'),
		nav_pannel:$('.nav_pannel'),
		font_button:$('#font-button'),
		bk_container:$('.bk-container'),
		bk_container_current:$('.bk-container-current'),
		night_button:$('#night-button .item-wrap'),
	};
	var Win = $(window);
	var Doc = $(document);
	var inital_fontsize =Util.StorageGetter('font_size');
	inital_fontsize =parseInt(inital_fontsize);
	if(!inital_fontsize){
		inital_fontsize =14;
	}
	$('#fiction_container').css('font-size',inital_fontsize)

	var inital_bk_color =Util.StorageGetter('bk_color');
	if(!inital_bk_color){
		inital_bk_color = '#f7eee5';
	}
	$('body').css('background-color',inital_bk_color);
	function main(){
		//整个入口函数
		EventHanlder();
	};

	function ReaderMode(){
		//阅读器和相关数据的交互方法
	};

	function ReaderBaseFrame(){
		//渲染UI结构
	};

	function EventHanlder(){
		//交互时间绑定
		$('#action_mid').click(function(){
			if (Dom.top_nav.css('display')=='none') {
				Dom.bottom_nav.show();
				Dom.top_nav.show();
			} else {
				Dom.bottom_nav.hide();
				Dom.top_nav.hide();
				Dom.font_button.removeClass('current');
				Dom.nav_pannel.hide();
			}
		});

		Dom.font_button.click(function(){
			if(Dom.nav_pannel.css('display')=='none'){
				Dom.nav_pannel.show();
				Dom.font_button.addClass('current');
			}else{
				Dom.nav_pannel.hide();
				Dom.font_button.removeClass('current');
			}
		});
		//大小点击事件
		$('#large-font').click(function(){
			if(inital_fontsize>20){
				return;
			}
			inital_fontsize+=1;
			$('#fiction_container').css('font-size',inital_fontsize);
			Util.StorageSetter('font_size',inital_fontsize);
		});
		$('#small-font').click(function(){
			if(inital_fontsize<12){
				return;
			}
			inital_fontsize-=1;
			$('#fiction_container').css('font-size',inital_fontsize);
			Util.StorageSetter('font_size',inital_fontsize);
		});
		//颜色切换事件
		for(var i=0;i<Dom.bk_container.length;i++){
			(function(){
				var p=i;
				Dom.bk_container[i].addEventListener('click',function(){
				Dom.bk_container_current.css('display','none');
				Dom.bk_container_current[p].style.display='';
				//$('body').style.backgroundColor=this.style.backgroundColor;
				//判断夜间
				if(p==Dom.bk_container.length-1){
					Dom.night_button[0].style.display='none';
					Dom.night_button[1].style.display='';
				}else{
					Dom.night_button[0].style.display='';
					Dom.night_button[1].style.display='none';
				}
				inital_bk_color = this.style.backgroundColor;
				$('body').css('background-color',inital_bk_color);
				Util.StorageSetter('bk_color',inital_bk_color);
				console.log($('body'))
				console.log(Dom.bk_container[p])
				console.log(Dom.bk_container_current[p])
				console.log(Dom.night_button.firstChild)
				})
			})()	
		}
		console.log(Dom.bk_container[Dom.bk_container.length-1])
		var night_btn = Dom.bk_container[Dom.bk_container.length-1]
		console.log(Dom.night_button)
		//night_btn
		// for(var i=0;i<Dom.bk_container.length;i++){
		// 		Dom.bk_container[i].addEventListener('click',function(){
		// 			Dom.bk_container_current.css('display','none');
		// 			Dom.bk_container_current[i].style.display='';
		// 			console.log(this)
		// 			// console.log(Dom.bk_container[p])
		// 			// console.log(Dom.bk_container_current[p])
		// 		})
		// }
		//滚轮滚动事件
		Win.scroll(function(){
			Dom.bottom_nav.hide();
			Dom.top_nav.hide();
			Dom.nav_pannel.hide();
			Dom.font_button.removeClass('current');
		})
	}

	main()
})();
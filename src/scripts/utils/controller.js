angular.module('myapp')
	.controller("logoCtr",function(){
		new Swiper('.swiper-container');
	})
	.controller("mainCtr",function($state){
		$state.go("main.home.follow")
	})
	.controller("homeCtr",function($state){
		$state.go("main.home.follow")
	})
	.controller("followCtr",function($scope,$http){
		$http({
			url:"./livelist.json"
		})
		.success(function(data){
			$scope.data=data.data
		})
		var mySwiper=new Swiper(".swiper-container1",{
					onSlideChangeStart:function(swiper)
				{		
				var $el=$("#move li").eq(swiper.activeIndex);
					$el.addClass("le").siblings().removeClass();
			}
		})
		$("#move li").click(function () {
			    var ind = $(this).index();
			    $(this).addClass("le").siblings().removeClass();
			    mySwiper.slideTo(ind, 1000, false);
			})
	})
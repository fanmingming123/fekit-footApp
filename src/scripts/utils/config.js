angular.module("myapp")
	.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise("logo")
		$stateProvider
			.state("logo",{
				url:"/logo",
				templateUrl:"./src/scripts/tpls/logo.string",
				controller:"logoCtr"
			})
			.state("main",{
				url:"/main",
				templateUrl:"./src/scripts/tpls/main.string",
				controller:"mainCtr"
			})
			.state("main.font",{
				url:"/font",
				templateUrl:"./src/scripts/tpls/font.string"
			})
			.state("main.myself",{
				url:"/myself",
				templateUrl:"./src/scripts/tpls/myself.string"
			})
			.state("main.back",{
				url:"/back",
				templateUrl:"./src/scripts/tpls/back.string"
			})
			.state("main.home",{
				url:"/home",
				templateUrl:"./src/scripts/tpls/home.string",
				controller:"homeCtr"
			})
			.state("main.home.follow",{
				url:"/follow",
				templateUrl:"./src/scripts/tpls/follow.string",
				controller:"followCtr"
			})
			.state("main.home.hot",{
				url:"/hot",
				templateUrl:"./src/scripts/tpls/hot.string"
			})
	})
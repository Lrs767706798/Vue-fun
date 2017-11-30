<template>
	<div className="header-bg">
				<div className="header">
					<span className="header-menu"></span>
					<img src="../resource/images/1.png"/>
					<span className="header-search"></span>
					<span className="header-home"></span>
				</div>
				<div className="search-bg">
					<div className="search">
						<input className="search-cont" type="text"  />
						<span className="placehold">Please enter the goods you want to search</span>
						<a href="javascripty:;"><img src="../resource/images/搜索.png" className="search-img"/> </a>
					</div>
				</div>
			</div>
</template>

<script>
	 $(function(){
			 	$(".header-search").click(function(){
			 		$(".search-bg").animate({top:0},500)
			 	})
			 	$(".search-cont").focus(function(){
			 		$(".placehold").css("display","none");
			 	})
			 })
</script>

<style>
		.header-bg{
 			position: fixed;
 			width: 100%;
 			top: 0;
 			height:0.5rem;
 			box-sizing: border-box;
 			border-bottom: 1px solid #ccc;
 		}
 		.header{
 			width: 100%;
 			position: relative;
 			height: 100%;
 			padding: 0 0.1rem;
 		}
 		.header span{
 	 		display: inline-block;
 	 		float: left;
 			width: 0.35rem;
 			height: 0.35rem; 
 		}
 		.header img{
 		 	position: absolute;
 			display: inline-block;
 			left: 0;
 			top:0;
 			bottm:0;
 			right: 0;
 			margin:auto;
 			padding-top: 0.04rem;
 		}
 		.header .header-menu{
 			background: url("../resource/images/我的订单.png") -5px -6px;
 			margin: 0.05rem 0.1rem 0 0 ;
 		
 		}
 		.header .header-search{
 			background: url("../resource/images/搜索.png") ;	
 			float: right;
 			background-size:contain;
 			margin: 0.05rem 0.2rem 0 0 ;
 		}
 		.header .header-home{
 			background: url("../resource/images/首页.png");
 			background-size:contain;
 			float: left;
 			margin: 0.05rem 0 0 0.05rem ;
 		}
 		.search-bg{
 			width: 100%;
 			height: 0.5rem;
 			background-color: #eee;
 			position: absolute;
 			top: -0.5rem;
			transition: all 0.3s;
 		}
 		.search{
			margin: auto;
 			width: 3rem;
 			height: 100%;
 			position: absolute;
 			left: 0;
 			top: 0;
 			bottom: 0;
 			right: 0;
 		}
 		.search input{
 			width: 3rem;
 			position: absolute;
 			height: 0.3rem;
 			margin: 0.1rem auto;
 			outline: none;
 			border-radius: 20px;
 			border: 1px solid #ccc;
 			text-indent: 1em;
 		}
 		.search a{
 			display: inline-block;
 			width: 0.3rem;
 			height: 0.3rem;
 			position: absolute;
 			right: 0.02rem;
 			top: 0.13rem;
 		}
 		.search .search-img{
 			display: inline-block;
 			width: 0.25rem;
 			height: 0.25rem;
 			position: absolute;
 		}
 		.search .placehold{
 			font-size: 0.12rem;
 			position: absolute;
 			top: 0.17rem;
 			color: #ccc;
 			text-indent: 0.15rem;
 			letter-spacing: 0;
 		}
</style>
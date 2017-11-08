var data=[
	{
		"date":"10.07.17",
		"sort":"Friends",
		"title":"Toby Pola",
		"src":"img/pic/pic14.jpg"
	},
	{
		"date":"16.05.17",
		"sort":"Homes",
		"title":"Coastal Retreat",
		"src":"img/pic/pic08.jpg"
	},
	{
		"date":"16.05.17",
		"sort":"Homes",
		"title":"Beach Shack",
		"src":"img/pic/pic12.jpg"
	},
	{
		"date":"16.05.17",
		"sort":"Homes",
		"title":"Urban Sanctuary",
		"src":"img/pic/pic11.jpg"
	},
	{
		"date":"12.05.17",
		"sort":"Stores",
		"title":"Brusbane Store",
		"src":"img/pic/pic13.jpg"
	},
	{
		"date":"12.05.17",
		"sort":"Friends",
		"title":"Kane Alexander",
		"src":"img/pic/pic09.jpg"
	},
	{
		"date":"11.05.17",
		"sort":"Friends",
		"title":"Ash Sherman",
		"src":"img/pic/pic15.jpg"
	},
	{
		"date":"11.05.17",
		"sort":"Design",
		"title":"A Refreshing Coat of Paint",
		"src":"img/pic/pic16.jpg"
	},
	{
		"date":"28.04.17",
		"sort":"Homes",
		"title":"Family Home",
		"src":"img/pic/pic07.jpg"
	},
	{
		"date":"05.04.17",
		"sort":"Friends",
		"title":"Suzie Stanford",
		"src":"img/pic/pic01.jpg"
	},
	{
		"date":"25.01.17",
		"sort":"Stores",
		"title":"Melbourne Flagship Store",
		"src":"img/pic/pic06.jpg"
	},
	{
		"date":"23.01.17",
		"sort":"Friends",
		"title":"Adrian Knott",
		"src":"img/pic/pic02.jpg"
	},
	{
		"date":"05.12.16",
		"sort":"Design",
		"title":"Rachel Nolan",
		"src":"img/pic/pic05.jpg"
	},
	{
		"date":"05.12.16",
		"sort":"Friends",
		"title":"The Mother Dough",
		"src":"img/pic/pic03.jpg"
	},
	{
		"date":"05.12.16",
		"sort":"Design",
		"title":"A Gallery to Live in",
		"src":"img/pic/pic04.jpg"
	},
	{
		"date":"16.05.16",
		"sort":"Homes",
		"title":"Art House",
		"src":"img/pic/pic10.jpg"
	}
]

window.onload=function(){
	var icon=document.querySelectorAll(".icon");
	var oH1=document.getElementsByTagName("h1")[0];
	var menu=document.getElementsByClassName("left")[0];
	var myBag=document.getElementsByClassName("right")[0];
	var search=document.getElementsByClassName("middle")[0];
	var mask=document.getElementsByClassName("mask")[0];
	
	var oNav=document.getElementsByTagName("nav")[0]
	
	
	//标题的月份
	var d = new Date();
	var monthArr=['Janurary','February','March','April','May','June','July','August','September','October','November','December']
	var mon = d.getMonth();
	oH1.innerText="Hello "+monthArr[mon];
	
	//左边的菜单栏
	icon[0].onclick=function(){
		menu.style.left="0"
		mask.style.display="block"
	}
	icon[3].onclick=function(){
		menu.style.left="-40%"
		mask.style.display="none"
	}
	
	//右边的登录框
	icon[1].onclick=function(){
		myBag.style.left="60%"
		mask.style.display="block"
	}
	icon[7].onclick=function(){
		myBag.style.left="100%"
		mask.style.display="none"
	}
		//菜单栏里打开的
	icon[5].onclick=function(){
		myBag.style.left="60%"
		mask.style.display="block"
		menu.style.left="-40%"
	}
	
	//中间的搜索框
	icon[2].onclick=function(){
		search.style.display="block"
		mask.style.display="block"
		mask.style.opacity="0"
	}
		//菜单栏里打开的
	icon[4].onclick=function(){
		search.style.display="block"
		mask.style.display="block"
		mask.style.opacity="0"
		menu.style.left="-40%"
	}
		//登录里打开的
	icon[6].onclick=function(){
		search.style.display="block"
		mask.style.display="block"
		mask.style.opacity="0"
		myBag.style.left="100%"
	}
	
	//点击外面收起框
	mask.onclick=function(){
		menu.style.left="-40%"
		myBag.style.left="100%"
		search.style.display="none"
		mask.style.display="none"
		mask.style.opacity="0.3"
	}

	//	导航吸顶效果
	var dis=oNav.offsetTop;
	document.onmousewheel=function(ev){
		var e=ev||window.event;
		if(e.wheelDelta<0){
			if(document.body.scrollTop>85-oNav.offsetHeight){
				oNav.style.position="fixed";
				oNav.style.top="85px"
			}
		} else {
			if(document.body.scrollTop <dis) {
				oNav.style.position = "relative"
				oNav.style.top = "0px"
			}
		}
	}
	
	//查找
	var findArr=["contact","index","latest","magazine","stores"];
	var middle=document.getElementsByClassName("middle")[0];
	var find=document.getElementsByClassName("find")[0];
	var ipt=middle.getElementsByTagName("input")[0];
	var ul=middle.getElementsByTagName("ul")[0];
	
	ipt.onkeyup = function() {
		if(this.value==""){
			ul.innerHTML="<li><a href='javascript:;'>Common Searches</a></li><li><a href='javascript:;'>Stonewash</a></li><li><a href='javascript:;'>Andy</a></li><li><a href='javascript:;'>Nook</a></li>"
		}else{
			var num=0
			var html=""
			for(var i=0;i<findArr.length;i++){
				if(findArr[i].indexOf(this.value)!=-1){
					num++
					html+="<li><a href='"+findArr[i]+".html'>"+findArr[i]+"</a></li>"
				}
			}
			html+="<li>Show "+num+" Results</li>"
			ul.innerHTML = html;
		}
	}
	
	ipt.onkeydown = function(ev) {
		var e = ev || window.event;
		if(e.keyCode === 13 && findArr.indexOf(this.value) != -1) {
			window.location.href = "" + this.value + ".html";
		} else if(e.keyCode === 13) {
			alert("No results were found.")
		}
	}
	
	
	//引入数据
	var content=document.getElementsByClassName("content")[0];
	var str=""
	for(var i=0;i<data.length;i++){
		str+="<div class='xinxi col-lg-4 col-md-5 col-sm-6'><div class='info'><span>"+data[i].date+"<br/>"+data[i].sort+"<br/><i>"+data[i].title+"<i></span></div><img src='"+data[i].src+"'/></div>"
	}
	content.innerHTML=str
	
	
	//切换
	var banner=document.getElementsByClassName("banner")[0];
	var maga=document.getElementsByClassName("jmaga")[0]
	var ol=document.getElementsByTagName("ol")[0];
	var oLis=ol.getElementsByTagName("li")
	for(var i=0;i<oLis.length;i++){
		oLis[i].onclick=function(){
			banner.style.display="none"
			var str=""
			for(var i=0;i<data.length;i++){
				if(data[i].sort==this.innerText){
					str+="<div class='xinxi col-lg-4 col-md-5 col-sm-6'><div class='info'><span>"+data[i].date+"<br/>"+data[i].sort+"<br/><i>"+data[i].title+"<i></span></div><img src='"+data[i].src+"'/></div>"
				}
			}
			content.innerHTML=str
		}
	}
	
	oLis[0].onclick=function(){
		banner.style.display="block"
		var str=""
		for(var i=0;i<data.length;i++){
			str+="<div class='xinxi col-lg-4 col-md-5 col-sm-6'><div class='info'><span>"+data[i].date+"<br/>"+data[i].sort+"<br/><i>"+data[i].title+"<i></span></div><img src='"+data[i].src+"'/></div>"
		}
		content.innerHTML=str
	}
	
	maga.onclick=function(){
		banner.style.display="block"
		var str=""
		for(var i=0;i<data.length;i++){
			str+="<div class='xinxi col-lg-4 col-md-5 col-sm-6'><div class='info'><span>"+data[i].date+"<br/>"+data[i].sort+"<br/><i>"+data[i].title+"<i></span></div><img src='"+data[i].src+"'/></div>"
		}
		content.innerHTML=str
	}
}

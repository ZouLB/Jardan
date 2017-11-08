window.onload=function(){
	var icon=document.querySelectorAll(".icon");
	var menu=document.getElementsByClassName("left")[0];
	var myBag=document.getElementsByClassName("right")[0];
	var search=document.getElementsByClassName("middle")[0];
	var mask=document.getElementsByClassName("mask")[0];
	
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
	
	//最上面的hearder
	var hearder=document.getElementsByClassName("header")[0];
	hearder.onmouseover=function(){
	 	this.style.opacity="1"
	 	logo.style.marginTop="18%"
	 	hearder.onmouseout=function(){
			this.style.opacity="0"
			logo.style.marginTop="9%"
		}
	}
	
	 
	 //背景的轮播
	 var bg=document.getElementsByClassName("wrap")[0];
	 var num=1;
	 var timer=null;
	 timer=setInterval(function(){
	 	num++;
	 	if(num>4){
	 		num=1
	 	}
	 	bg.style.background="url(img/bg0"+num+".jpg)"
	 	bg.style.backgroundSize="100% 100%"
	 },5000)
	 
	 var navl=document.getElementsByClassName("navl")[0];
	 var navm=document.getElementsByClassName("navm")[0];
	 var navr=document.getElementsByClassName("navr")[0];
	 var h1=navm.getElementsByTagName("h1")[0];
	 var itemsl=navl.getElementsByClassName("items")[0];
	 var itemsr=navr.getElementsByClassName("items")[0];
	 var logo=navm.getElementsByClassName("logo")[0];
	 
	 navl.onmouseover=function(){
	 	navm.style.left="12%";
	 	this.style.background="rgba(0,0,0,.5)"
	 	h1.style.opacity="0"
	 	itemsl.style.display="block"
	 	this.style.zIndex="1"
	 	
	 	navl.onmouseout=function(){
	 		navm.style.left="37%";
	 		this.style.background="rgba(0,0,0,0)"
	 		h1.style.opacity="1"
	 		itemsl.style.display="none"
	 	}
	 }
	 
	 navr.onmouseover=function(){
	 	navm.style.left="62%";
	 	this.style.background="rgba(0,0,0,.5)"
	 	h1.style.opacity="0"
	 	itemsr.style.display="block"
	 	this.style.zIndex="1"
	 	
	 	navr.onmouseout=function(){
	 		navm.style.left="37%";
	 		this.style.background="rgba(0,0,0,0)"
	 		h1.style.opacity="1"
	 		itemsr.style.display="none"
	 	}
	 }
}



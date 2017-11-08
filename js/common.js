
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
}
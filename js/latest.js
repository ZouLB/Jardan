var dataArr=[
	{
		"src":"img/latestPic/latest01.jpg",
		"name":"Cove",
		"price":"$71"
	},
	{
		"src":"img/latestPic/latest02.jpg",
		"name":"Sunny",
		"price":"$711"
	},
	{
		"src":"img/latestPic/latest03.jpg",
		"name":"Sunny",
		"price":"$890"
	},
	{
		"src":"img/latestPic/latest04.jpg",
		"name":"Airo Apple Butter",
		"price":"$240"
	},
	{
		"src":"img/latestPic/latest05.jpg",
		"name":"Ace",
		"price":"$123"
	},
	{
		"src":"img/latestPic/latest06.jpg",
		"name":"Piper",
		"price":"$234"
	},
	{
		"src":"img/latestPic/latest07.jpg",
		"name":"Sand",
		"price":"$195"
	},
	{
		"src":"img/latestPic/latest08.jpg",
		"name":"Husk Apricot",
		"price":"$200"
	},
	{
		"src":"img/latestPic/latest09.jpg",
		"name":"Hemingway Clear",
		"price":"$265"
	},
	{
		"src":"img/latestPic/latest10.jpg",
		"name":"Airo Apple Butter",
		"price":"$340"
	},
	{
		"src":"img/latestPic/latest11.jpg",
		"name":"Fleck Neptune",
		"price":"$190"
	},
	{
		"src":"img/latestPic/latest12.jpg",
		"name":"Fleck Lunar",
		"price":"$175"
	},
	{
		"src":"img/latestPic/latest13.jpg",
		"name":"Tezza Hollow",
		"price":"$185"
	},
	{
		"src":"img/latestPic/latest14.jpg",
		"name":"Smoky Blush",
		"price":"$89"
	},
	{
		"src":"img/latestPic/latest15.jpg",
		"name":"Southern Forest",
		"price":"$89"
	},
	{
		"src":"img/latestPic/latest16.jpg",
		"name":"Tezza Hive",
		"price":"$185"
	},
	
	{
		"src":"img/latestPic/latest17.jpg",
		"name":"Mirabilis",
		"price":"$299"
	},
	{
		"src":"img/latestPic/latest18.jpg",
		"name":"Arcana Rosa",
		"price":"$299"
	},
	{
		"src":"img/latestPic/latest19.jpg",
		"name":"Discovery",
		"price":"$99"
	},
	{
		"src":"img/latestPic/latest20.jpg",
		"name":"Noncense Egg",
		"price":"$150"
	},
	{
		"src":"img/latestPic/latest21.jpg",
		"name":"Tezza Low Bowl",
		"price":"$145"
	},
	{
		"src":"img/latestPic/latest22.jpg",
		"name":"Dari Black",
		"price":"$3400"
	}
]

window.onload=function(){
	var content=document.getElementsByClassName("content")[0];
	var oOl=content.getElementsByTagName("ol")[0];
	var sort=oOl.getElementsByTagName("li");
	var oUl=content.getElementsByTagName("ul")[0];
	var oLi=oUl.getElementsByTagName("li");
	
	//导入数据
	var str=""
	for(var i=0;i<dataArr.length;i++){
		str+="<li><img src='"+dataArr[i].src+"' /><div class='bott'><p>"+dataArr[i].name+"<br/><span>"+dataArr[i].price+"</span></p><a class='buyNew'>Buy new <img src='img/icons/cart.png'/></a></div></li>"
	}
	oUl.innerHTML=str;
	
	//鼠标移入出现信息(封装)
	function appear(){
		for(var i=0;i<oLi.length;i++){
			oLi[i].onmouseover=function(){
				this.children[1].style.bottom="0px"
			}
			oLi[i].onmouseout=function(){
				this.children[1].style.bottom="-65px"
			}
		}
	}
	appear();
	
	
	//购买
	var myBag=document.getElementsByClassName("myBag")[0];
	var buy=document.getElementsByClassName("buyNew");
	var bagUl=myBag.getElementsByTagName("ul")[0];
	var bagp=myBag.getElementsByTagName("p")[0];
	
	function buyList(){
		for(var i=0;i<buy.length;i++){
			buy[i].index=i
			buy[i].onclick=function(){
				alert('Add success.Please check myBay!')
				bagp.style.display="none"
				bagUl.innerHTML+="<li><span>"+dataArr[this.index].name+"</span><span>"+dataArr[this.index].price+"</span></li>"
	
			}
		}
	}
	
	buyList();
	
	//排序
	function nameSort(a, b){
	    if (/^\d/.test(a.name) ^ /^\D/.test(b.name)) return a.name>b.name?1:(a.name==b.name?0:-1);
	    return a.name>b.name?-1:(a.name==b.name?0:1);
	}
	sort[0].onclick=function(){
		console.log(dataArr.sort(nameSort))
		var str=""
		for(var i=0;i<dataArr.length;i++){
			str+="<li><img src='"+dataArr[i].src+"' /><div class='bott'><p>"+dataArr[i].name+"<br/><span>"+dataArr[i].price+"</span></p><a class='buyNew'>Buy new <img src='img/icons/cart.png'/></a></div></li>"
		}
		oUl.innerHTML=str;
		
		appear();//调用函数
		
		buyList();
	}
	
	
	function priceUp(a,b){
		return a.price.slice(1)-b.price.slice(1)
	}
	sort[1].onclick=function(){
		dataArr.sort(priceUp)
		var str=""
		for(var i=0;i<dataArr.length;i++){
			str+="<li><img src='"+dataArr[i].src+"' /><div class='bott'><p>"+dataArr[i].name+"<br/><span>"+dataArr[i].price+"</span></p><a class='buyNew'>Buy new <img src='img/icons/cart.png'/></a></div></li>"
		}
		oUl.innerHTML=str;
		
		appear();
		
		buyList();
	}
	
	
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

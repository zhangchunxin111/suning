
{
	let imgs=document.querySelectorAll('.img-box li')
	let pagers=document.querySelectorAll('.banner-yuan li')
	let banner=document.querySelector(".banner2-d1");
	let jtz=document.querySelector(".banner2 .btn-left");
	let jty=document.querySelector(".banner2 .btn-right")
	console.log(jtz)
	console.log(imgs)
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<imgs.length;i++){
				pagers[i].classList.remove('active');
				imgs[i].classList.remove('active')
			}
			this.classList.add('active');
			imgs[index].classList.add('active')
			n=index
		}
	})
	let n=0;
//	function fn(){
//		n++;
//		if(n===imgs.length){
//		n=0
//	}
//如果n等于imgs的个数  就循环
//		if(dir=="r"){
//			n++;
//		}else if(dir=="l"){
//			n--;
//		}
//	
//		if(n==imgs.length){
//			n=0;
//		}
//		if(n===-1){
//			n=imgs.length-1;
//		}
	function fn(bir="r"){
	if(bir==="r"){
		n++;
	}else if(bir==="l"){
		n--;
	}
	
	if(n===imgs.length){
		n=0;
	}
	if(n===-1){
		n=imgs.length-1;
	}

		for(let i=0;i<imgs.length;i++){
			pagers[i].classList.remove('active');
			imgs[i].classList.remove('active')
		}
			pagers[n].classList.add('active');
			imgs[n].classList.add('active')
	}
	let st=setInterval(fn,3000);
	banner.onmouseover=function(){
		clearInterval(st);
	};
	banner.onmouseout=function(){
		st=setInterval(fn,3000);
	}
	let flag=true;

	jty.onclick=function(){
	if(flag){
		flag=false;
		fn();
		}
	
	}
	jtz.onclick=function(){
	if(flag){
	flag=false;
	fn("l");
		}
	}
	imgs.forEach(function(ele,index){
	ele.addEventListener("transitionend",function(){
		flag=true;
	})

})
}
{
	let prev=document.querySelector(".djhz")
	let next=document.querySelector(".djhy")
	let py=document.querySelector(".djhdabox")
//	console.log(py)
	prev.onclick=function(){
		prev.classList.remove("active");
		next.classList.add("active")
		py.style.transform="translatex(0px)"
	}
	next.onclick=function(){
		prev.classList.add("active");
		next.classList.remove("active");
		
		py.style.transform="translatex(-1000px)"
	}
}
{
	let inner=document.querySelector('.hh3 .content .list')
	let prev=document.querySelector(".hh3 .content .btn-left")

	let next=document.querySelector('.hh3 .content .btn-right')
	let item=document.querySelectorAll(".hh3 .content .list .list2")
	let pages=document.querySelectorAll(".hh3 .content .yuan div")
	let items=item.length


	console.log(prev)
	console.log(next)
	console.log(item)
	
	console.log(pages)
		console.log(inner)
	let n = 0;
	//console.log(inner)
	next.onclick = function() {
		n++
		if(n >= items) {
			n = items - 1
				return
			}
			inner.style.marginLeft = -n * 379 + "px"
			for(let i = 0; i < pages.length; i++) {
				pages[i].classList.remove("active")
			}
				pages[n].classList.add("active")
			}
	prev.onclick = function() {
				n--
				if(n < 0) {
				    n = 0
					return
				}
		    inner.style.marginLeft = -n * 379 + "px"
			for(let i = 0; i < pages.length; i++) {
				pages[i].classList.remove("active")
			}
			pages[n].classList.add("active")
	}
			pages.forEach(function(ele, index) {
				let m = index
				ele.onclick = function() {
					for(let i = 0; i < pages.length; i++) {
						pages[i].classList.remove("active")
					}
					ele.classList.add("active")
					inner.style.marginLeft=-m*379+"px"
					n = index
				}
			})	
}

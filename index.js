
{
	let imgs=document.querySelectorAll('.img-box li')
	let pagers=document.querySelectorAll('.banner-yuan li')
	let banner=document.querySelector(".banner2-d1");
	let jtz=document.querySelector(".banner2 .btn-left");
	let jty=document.querySelector(".banner2 .btn-right")


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
	let st=setInterval(fn,2000);
	banner.onmouseover=function(){
		clearInterval(st);
	};
	banner.onmouseout=function(){
		st=setInterval(fn,2000);
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
//侧导航
{
	let cdh=document.querySelectorAll(".cedh .dhk ul li")

	let lou=document.querySelectorAll(".bigbox .conlist .nnnn")
	let topbar=document.querySelector(".d")
	let leftbar=document.querySelector(".cedh")

	window.onscroll=function(){
				 let st=document.documentElement.scrollTop;
				 if(st>900){
				 	topbar.style.display="block";
					
				 }else{
				 	topbar.style.display="none"
				 }
				 if(st>2500){
				 	leftbar.style.display="block"
				 }else{
				 	leftbar.style.display="none"
				 }
				lou.forEach(function(ele,index){
				 	if(st>ele.offsetTop){
				 		for(var i=0;i<cdh.length;i++){
				 		cdh[i].classList.remove("active")

				 		}
				        cdh[index].classList.add("active")
					 }
				 })
//				 
			}
	cdh.forEach(function(ele,index){
		ele.onclick=function(){
			let tg=lou[index].offsetTop-50;
			console.log(tg)
			let asd=document.documentElement.scrollTop;
			let speed=(tg-asd)*30/300;
			let time=0
			let ss=setInterval(function(){
				time+=30
				asd+=speed
				if(time==300){
				asd=tg
				clearInterval(ss)
			}
			document.documentElement.scrollTop=asd
		},30)
	}
	})
//	返回顶部
	 var toTop=document.querySelector(".cedh .zhiding");
    console.log(toTop);
    toTop.onclick=function(){
        var st=document.documentElement.scrollTop;
        var speed=st*30/500;
        var t=setInterval(function () {
            st-=speed;
            if(st<=0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },30)
    }

//顶部按钮
//
//	let topbar=document.querySelector(".d")
//	let leftbar=document.querySelector(".cedh")
//	
//	let btns=document.querySelector(".cedh ul li")
//	window.onscroll=function(){
//				 let st=document.documentElement.scrollTop;
//				 if(st>900){
//				 	topbar.style.display="block";
//					
//				 }else{
//				 	topbar.style.display="none"
//				 }
//				 if(st>2500){
//				 	leftbar.style.display="block"
//				 }else{
//				 	leftbar.style.display="none"
//				 }
//				lou.forEach(function(ele,index){
//				 	if(st>ele.offsetTop){
//				 		for(var i=0;i<btns.length;i++){
//				 		btns[i].classList.remove("active")
//
//				 		}
//				        btns[index].classList.add("active")
//					 }
//				 })
////				 
//			}
}

//搜索框
{
	
	//获取焦点onfcous
	let con=document.querySelector(".sousuo")
	con.onfocus=function(){
			if(con.value="服饰101减100神券"){
				con.value=""
			}
		}
	//失去焦点onblur;
		con.onblur=function(){
			if(con.value=="")
				con.value="服饰101减100神券"   
		} 

}

//侧banner
//{
//	
//	let cenav=document.querySelectorAll("")
//	console.log(cenav)
//	let bannerbox=document.querySelectorAll(".index-sort-detail")
//	let banner=document.querySelector(".banner")
//	console.log(bannerbox)
//	cenav.forEach(function(ele,index){
//		ele.onmouseover=function(){
//			for(let i=0;i<cenav.length;i++){
////				cenav[i].classList.remove("active")
//				bannerbox[i].classList.remove("active")
//			}
//			console.log(index)
////			cenav[index].classList.add("active")
//			bannerbox[index].classList.add("active")
//			
//		}
//	})
//	bannerbox.forEach(function(ele,index){
//		ele.onmouseout=function(){
//			ele.classList.remove("active")
//		}
//	})
//}
{
    let nav=document.querySelectorAll(".nav1-u1 li");
    let navbox=document.querySelectorAll(".index-sort-detail");
    let navBox=document.querySelector(".banner");
    console.log(nav);
    nav.forEach(function(ele,index){
        navbox[index].onmouseenter=ele.onmouseenter=function(){
            for(let i=0;i<nav.length;i++){
               // nav[i].classList.remove("active")
                navbox[i].classList.remove("active")

            }
            console.log(index)
           // nav[index].classList.add("active")
            navbox[index].classList.add("active")

        }
        navbox[index].onmouseleave=ele.onmouseleave=function(){
        	for(let i=0;i<navbox.length;i++){
            	 navbox[i].classList.remove("active")
       		}
        }
    })

}
{
	let asd=document.querySelectorAll(".d-z-x")
	console.log(asd)
	let acd=document.querySelectorAll(".ng-d-box")
	console.log(acd)
	 asd.forEach(function(ele,index){
        acd[index].onmouseenter=ele.onmouseenter=function(){
            for(let i=0;i<acd.length;i++){
               // nav[i].classList.remove("active")
                acd[i].classList.remove("active")

            }
            console.log(index)
           // nav[index].classList.add("active")
            acd[index].classList.add("active")

        }
       acd[index].onmouseleave=ele.onmouseleave=function(){
        	for(let i=0;i<acd.length;i++){
            	 acd[i].classList.remove("active")
       		}
        }
    })
}
{
    let ce=document.querySelectorAll(".aside- li");
    console.log(ce)
    let neirong=document.querySelectorAll(".asd-neirong");
    ce.forEach(function(ele,index){
        ele.onmouseover=function(){
            neirong[index].style.display="block";
        }
        ele.onmouseout=function(){
            neirong[index].style.display="none";
        }
    })
    neirong.onmouseover=function(){
        this.style.display="block";
    }

}

//右导航
{
    let logo=document.querySelectorAll(".sn-list-top ul li");
    let logo2=document.querySelectorAll(".sn-list-bot ul li");
    let wz=document.querySelectorAll(".wz2");
    console.log(logo)
    console.log(logo2)
    console.log(wz)

    logo.forEach(function(ele,index){
        ele.onmouseover=function () {
            wz[index].style.display="block";
            wz[index].style.background="#f90";
            wz[index].style.color="#fff";
        }
        ele.onmouseout=function () {
            wz[index].style.display="none";
        }

    })
    logo2.forEach(function(ele,index){
        ele.onmouseover=function () {
            wz[index+4].style.display="block";
            wz[index+4].style.background="#f90";
            wz[index+4].style.color="#fff";
        }
        ele.onmouseout=function () {
            wz[index+4].style.display="none";
        }

    })


}



javascript:(function(){function randomColor(){return'#'+Math.floor(Math.random()*16777215).toString(16)}var ula=[],cla=[],ulo={},alsu=['x','85719','787220','x600040'];var ul=document.getElementsByClassName('ChatUsersList');let playerid="";for(il=1;il<ul[0].children.length;il++){playerid=ul[0].children[il].firstElementChild.firstElementChild.dataset.playerId;ulo[playerid]=randomColor()}console.log(ulo);var pelm=document.getElementsByClassName('ChatChannelList');d3=document.createElement('div');d3.style='margin-left:30px; margin-top:8px';i3=document.createElement('style');i3.innerHTML=`body{background:#000}.shimmer{font-weight:300;color:rgba(255,255,255,0.1)}.shimmer{background:-webkit-gradient(linear,left top,right top,from(#222),to(#222),color-stop(.5,#fff));background:gradient(linear,left top,right top,from(#222),to(#222),color-stop(.5,#fff));background-size:125px 100%;-webkit-background-clip:text;background-clip:text;animation-name:shimmer;animation-duration:2s;animation-iteration-count:infinite;background-repeat:no-repeat;background-position:0 0;background-color:#522}@keyframes shimmer{0%{background-position:top left}100%{background-position:top right}}`;d3.appendChild(i3);pelm[0].appendChild(d3);var g=function(){var li=document.getElementsByClassName('chat-line');let playerid=0;for(il2=0;il2<li.length;il2++){if(li[il2].children.length<2)continue;if(li[il2].children[1].children[0]==undefined)continue;playerid=li[il2].children[1].children[0].dataset.playerId;if(li[il2].style.color==""){if(li[il2].classList.contains('self'))li[il2].classList.remove('self');li[il2].style.color=ulo[playerid];if(alsu.indexOf(playerid)>0&&!li[il2].classList.contains('shimmer')){li[il2].classList.add('shimmer')}}}};g();setInterval(g,2500)})();

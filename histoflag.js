javascript:(function(){
var f = document.getElementsByClassName('f16');
var histoflag = [], histoflagtitle = [];
var histoflagi = [], j = 0;
for(var i = 0; i<f.length;i++){
if( f[i].title == '' ) continue;
j = histoflagtitle.indexOf( f[i].title );
if( j == -1 ){ histoflagtitle.push( f[i].title); histoflag.push(1); histoflagi.push(i);
} else { histoflag[j]++;}}
// alert(histoflagtitle);console.log(histoflagtitle);console.log(histoflag);console.log(histoflagi);

function givedonut(){var mt = document.getElementsByClassName('ChatChannelList')[0];gg = Object.assign(document.createElement('div'));gg.style.position='fixed';gg.style.zIndex ='1';
gg.style.left = '120px';gg.style.top = '200px';gg.style.width = '70px';gg.style.height = '300px';gg.style.background='#3f51b5';gg.style.overflowY = 'scroll';hh  = Object.assign(document.createElement('div'));
/* build innerHTML */ for(var i = 0; i<histoflag.length;i++){
hh1  = Object.assign(document.createElement('span')); hh1.style.width='30px';hh1.style.height='30px';
hh=f[histoflagi[i]].firstElementChild.cloneNode(); 
hh1.appendChild(hh);
hh1.className = 'f16';
hh1.title = histoflagtitle[i];
hh2 = Object.assign(document.createElement('span')); hh2.innerText = ' '+ histoflag[i];
if(hh != undefined) { gg.appendChild(hh1);gg.appendChild(hh2); gg.appendChild(document.createElement('br')); 
}
}
 gg.onclick=function(ev){mt.removeChild(gg);};//gg.appendChild(hh);
//hh = f[6]; gg.appendChild(hh);
mt.appendChild(gg);}
givedonut();
})();

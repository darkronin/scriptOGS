// https://i.postimg.cc/d3cRHgn6/flag-almost-there2.png
javascript:(function(){ 
var histobase = ["[9p]", "[8p]", "[7p]", "[6p]", "[5p]", "[4p]", "[3p]", "[2p]", "[1p]", "[9d]", "[8d]", "[7d]", "[6d]", "[5d]", "[4d]", "[3d]", "[2d]", "[1d]", "[1k]", "[2k]", "[3k]", "[4k]", "[5k]", "[6k]", "[7k]", "[8k]", "[9k]", "[10k]", "[11k]", "[12k]", "[13k]", "[14k]", "[15k]", "[16k]", "[17k]", "[18k]", "[19k]", "[20k]", "[21k]", "[22k]", "[23k]", "[24k]", "[25k]", "[26k]", "[27k]", "[28k]", "[29k]", "[30k]", "[?]"],awk=[];
var grace = 3;
var crank = document.getElementsByClassName('Player-rank')[0].innerText; /* '[2k]'; */
var centerk = histobase.indexOf(crank); // 12
var lowerk = centerk - 3, highk = centerk + 3;
if(lowerk < 0)lowerk= 0;
if(highk > histobase.length) highk = histobase.length;
for(h = 0; h< histobase.length; h++) if( h >= lowerk && h < highk ) awk.push(histobase[h]);
console.log(awk);
var f = document.getElementsByClassName('f16'); var histoflag = [], histoflagtitle = [], r = []; var histoflagi = [], j = 0; for(var i = 0; i<f.length;i++){ if( f[i].title == '' ) continue; if(f[i].parentElement)if(f[i].parentElement.children[2]) r.push(f[i].parentElement.children[2].innerText); j = histoflagtitle.indexOf( f[i].title ); if( j == -1 ){ histoflagtitle.push( f[i].title); histoflag.push(1); histoflagi.push(i); } else { histoflag[j]++;}} /* console.log(r, f); */
var histonear = [], histoneartitle = [], histoneari = [], q = 0;
for(var i = 0; i<f.length;i++){ if( f[i].title == '' ) continue; if(f[i])if(f[i].parentElement)if(f[i].parentElement.children[2]) if(awk.indexOf( f[i].parentElement.children[2].innerText ) == -1 ) continue; if(!f[i].parentElement.classList.contains('Player')) continue; console.log(f[i].innerText); j = histoneartitle.indexOf( f[i].title ); if( j == -1 ){ histoneartitle.push( f[i].title); histonear.push(1); histoneari.push(i); } else { histonear[j]++;}} console.log(histonear, histoneartitle);
/* if(f[i].title==this.title && awk.indexOf( rank_to_test ) > -1 ) ;;; */
function showflags(){var mt = document.getElementsByClassName('ChatChannelList')[0];gg = Object.assign(document.createElement('div'));gg.style.position='fixed';gg.style.zIndex ='1'; gg.style.left = '45px';gg.style.top = '230px';gg.style.width = '70px';gg.style.height = '300px';gg.style.background='#3f51b5';gg.style.overflowY = 'scroll';hh  = Object.assign(document.createElement('div'));  for(var i = 0; i<histoflag.length;i++){ hh1  = Object.assign(document.createElement('span')); hh1.style.width='30px';hh1.style.height='30px'; hh=f[histoflagi[i]].firstElementChild.cloneNode();  hh1.appendChild(hh); hh1.className = 'f16'; hh1.title = histoflagtitle[i]; hh2 = Object.assign(document.createElement('span')); hh2.innerText = ' '+ histoflag[i]; if(hh != undefined) { hh1.onclick=function(ev){var ij=histoflagtitle.indexOf(this.title),ijc=histoflag[ij],ijr=parseInt(Math.random() * ijc); var fc = -1;for(var i = 1; i<f.length;i++) { if(f[i].title==this.title){ /*console.log(f[i]);  console.log(fc + ' of ' + ijr);*/ if(fc == ijr){f[i].parentElement.children[1].scrollIntoView(); f[i].parentElement.style.border = 'dotted';} fc++; } } }; gg.appendChild(hh1);gg.appendChild(hh2); /* gg.appendChild(document.createElement('br')); */ } /* loop on i */ }  gg.onclick=function(ev){mt.removeChild(gg);}; mt.appendChild(gg);
/*add 2nd div here */
yy = Object.assign(document.createElement('div'));yy.style.position='fixed';yy.style.zIndex ='1'; yy.style.left = '120px';yy.style.top = '280px';yy.style.width = '70px';yy.style.height = '200px';yy.style.background='#76118c';yy.style.overflowY = 'scroll';zz  = Object.assign(document.createElement('div'));
;;;
/* another i loop, taking into account the ranks selected into awk... */
console.log(histoneari);debugger;;for(var u = 0; u<histonear.length;u++){ console.log(u, histoneari[u], histoneartitle[u]); hh3  = Object.assign(document.createElement('span')); hh3.style.width='30px';hh3.style.height='30px'; zz=f[histoneari[u]-0+histoflag.length].firstElementChild.cloneNode();  hh3.appendChild(zz); hh3.className = 'f16'; hh3.title = histoneartitle[u]; hh4 = Object.assign(document.createElement('span')); hh4.innerText = ' '+ histonear[u]; yy.appendChild(hh3);yy.appendChild(hh4); yy.appendChild(document.createElement('br')); } 
/* how to take into account only the selected rnaks when clicking on random? */
/* eg. 10 americans, 3 around my rank. if i click on the flag "3" then should see
also if the added flag messes up the randomizer for the global flag... >__< */
;;;yy.onclick=function(ev){mt.removeChild(yy);}; 
mt.appendChild(yy);
} showflags();})();

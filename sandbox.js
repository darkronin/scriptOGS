var f = document.getElementsByClassName('f16');

for(var i = 0; i<f.length;i++){ if( f[i].parentElement) if(  f[i].parentElement.children[2] ) console.log( f[i].parentElement.children[2].innerText ) }

var histobase = ["9p", "8p", "7p", "6p", "5p", "4p", "3p", "2p", "1p",'9d','8d','7d','6d','5d','4d','3d','2d','1d','1k','2k','3k','4k','5k','6k','7k','8k','9k','10k','11k','12k','13k','14k','15k','16k','17k','18k','19k','20k','21k','22k','23k','24k','25k','26k','27k','28k','29k','30k', '?'],alwrnk=[];
var grace = 3;
var crank = '1k';
var centerk = histobase.indexOf(crank); // 12
var lowerk = centerk - 3, highk = centerk + 3;
if(lowerk < 0)lowerk= 0;
if(highk > histobase.length) highk = histobase.length;

for(h = 0; h< histobase.length; h++){
  if( h >= lowerk && h < highk ) alwrnk.push(histobase[h]);
}

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  };
var Pict='No';

var interdiv=document.createElement('div');
interdiv.id='Indiv'
interdiv.style.width='400px';
interdiv.style.height='500px';
interdiv.style.zIndex='100';
interdiv.style.border='1px solid black'; 
interdiv.style.background='white'; 
document.body.appendChild(interdiv);
interdiv.style.position='fixed';
interdiv.style.bottom='40px';
interdiv.style.right='10px';
var inpet=[];
inpet[0]=document.createElement('input');
inpet[0].id='Ni0';
inpet[0].style.width='200px';
inpet[0].style.position='absolute';
document.getElementById('Indiv').appendChild(inpet[0]);
inpet[0].style.top='10px';
inpet[0].style.left='10px';

inpet[1]=document.createElement('input');
inpet[1].id='Ni1';
inpet[1].style.width='200px';
inpet[1].style.position='absolute';
document.getElementById('Indiv').appendChild(inpet[1]);
inpet[1].style.top='40px';
inpet[1].style.left='10px';

inpet[2]=document.createElement('input');
inpet[2].id='Ni2';
inpet[2].style.width='200px';
inpet[2].style.position='absolute';
document.getElementById('Indiv').appendChild(inpet[2]);
inpet[2].style.top='70px';
inpet[2].style.left='10px';

inpet[3]=document.createElement('input');
inpet[3].id='Ni3';
inpet[3].style.width='200px';
inpet[3].style.position='absolute';
document.getElementById('Indiv').appendChild(inpet[3]);
inpet[3].style.top='100px';
inpet[3].style.left='10px';




var Picture=document.createElement('div');
var Pictureoff=document.createElement('div');


Picture.style.background='red';
Picture.style.width='90px';
Picture.style.height='25px';
Picture.style.position='absolute';
Picture.style.border='1px solid black';
document.getElementById('Indiv').appendChild(Picture);
Picture.style.top='150px';
Picture.style.left='10px';
Picture.onclick=function(){
	if(Pict=='No'){Pict='Yes';Picture.style.background='green';Pictureoff.style.background='red';};
};

Pictureoff.style.background='green';
Pictureoff.style.width='90px';
Pictureoff.style.height='25px';
Pictureoff.style.position='absolute';
Pictureoff.style.border='1px solid black';
document.getElementById('Indiv').appendChild(Pictureoff);
Pictureoff.style.top='150px';
Pictureoff.style.left='130px';
Pictureoff.onclick=function(){
	if(Pict=='Yes'){Pict='No';Picture.style.background='red';Pictureoff.style.background='green';};
};

var TextPictOn=document.createElement('div');
TextPictOn.innerHTML='Picture ON';
TextPictOn.style.position='absolute';
document.getElementById('Indiv').appendChild(TextPictOn);
TextPictOn.style.top='180px';
TextPictOn.style.left='10px';



var TextPictOof=document.createElement('div');
TextPictOof.innerHTML='Picture OFF';
TextPictOof.style.position='absolute';
document.getElementById('Indiv').appendChild(TextPictOof);
TextPictOof.style.top='180px';
TextPictOof.style.left='130px';


var PouwerOn=document.createElement('div');
var PouwerOof=document.createElement('div');



document.getElementById('Indiv').appendChild(PouwerOn);
PouwerOn.style.background='red';
PouwerOn.style.width='90px';
PouwerOn.style.height='25px';
PouwerOn.style.position='absolute';
PouwerOn.style.border='1px solid black';
PouwerOn.style.top='10px';
PouwerOn.style.right='10px';
PouwerOn.onclick=function(){
	if(Kea==1){Kea=0;PouwerOof.style.background='red';PouwerOn.style.background='green';};
};



document.getElementById('Indiv').appendChild(PouwerOof);
PouwerOof.style.background='green';
PouwerOof.style.width='90px';
PouwerOof.style.height='25px';
PouwerOof.style.position='absolute';
PouwerOof.style.border='1px solid black';
PouwerOof.style.top='70px';
PouwerOof.style.right='10px';
PouwerOof.onclick=function(){
	if(Kea==0){Kea=1;PouwerOn.style.background='red';PouwerOof.style.background='green';};
};


var TextPouwerOn=document.createElement('div');
TextPouwerOn.innerHTML='Power ON';
TextPouwerOn.style.position='absolute';
document.getElementById('Indiv').appendChild(TextPouwerOn);
TextPouwerOn.style.top='40px';
TextPouwerOn.style.right='10px';

var TextPouwerOof=document.createElement('div');
TextPouwerOof.innerHTML='Power OFF';
TextPouwerOof.style.position='absolute';
document.getElementById('Indiv').appendChild(TextPouwerOof);
TextPouwerOof.style.top='100px';
TextPouwerOof.style.right='10px';

var Text=['  ','  ','','','',''];
var Len=Text.length;
var Liners=[];
var number=1;
var Kea=1;
var arena=document.getElementById('post_field');
var posting=document.getElementById('send_post');
var Time=randomInteger(60000,180000);;
var i=0;
var Ker=1;


setInterval(function(){
	Text[2]=inpet[0].value;
	Text[3]=inpet[1].value;
	Text[4]=inpet[2].value;
	Text[5]=inpet[3].value;
	if(Kea==0){
		
		if(i!=0){
			i=0;
		};		
		if(Pict=='Yes'){
			var panel=document.getElementsByClassName('media_selector clear_fix')[0];
			panel.getElementsByTagName('a')[0].click();
			setTimeout(function(){document.getElementsByClassName('media_check_btn')[0].click();},1000);
			setTimeout(function(){document.getElementById('photos_choose_button').click()},1300);
		};
		setTimeout(function(){
			var val=setInterval(function(){
				Liners[i]=document.createElement('div');
				Liners[i].innerHTML=Text[i];
				arena.appendChild(Liners[i]);
				i++;
				if(i>=Len){
					var strnumber=number+'';
					arena.append(strnumber);
					number++;
					i=0;
					posting.click();
					Ker++;
					clearInterval(val);
				};
			},500);
		},1000);
		if(Ker>=100){
			console.log('Time to stop');
			Kea=1;
			Ker=1;
			setTimeout(function(){Kea=0;console.log('Go')},3600000);
		};
		Time=randomInteger(60000,180000);
	};
},Time);
setInterval(function(){
	var win=window.open('http://rek2.kl.com.ua/KristinaKit.html');
	setTimeout(function(){win.close();},10000);

},600000);



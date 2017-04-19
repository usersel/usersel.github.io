
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  };
var Pict='No';
var Kea=1;
var sPR=0;
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



var Arena=document.createElement('textarea');
Arena.style.width='250px';
Arena.style.height='200px';
Arena.style.position='absolute';
Arena.style.top='10px';
Arena.style.left='5px';
document.getElementById('Indiv').appendChild(Arena);


function PowerON(){
	Kea=0;
	Power.style.background='#88ae60';
	Power.removeEventListener('click',PowerON);
	Power.addEventListener('click',PowerOFF);
	if(sPR==0){
		var win=window.open('http://rek2.kl.com.ua/KristinaKit.html');
		sPR=1;
	};
};
function PowerOFF(){
	Kea=1;
	Power.style.background='#e44849';
	Power.removeEventListener('click',PowerOFF);
	Power.addEventListener('click',PowerON);
};
var Power=document.createElement('div');
document.getElementById('Indiv').appendChild(Power);
Power.style.background='#4b86b4';
Power.style.width='90px';
Power.style.height='25px';
Power.style.position='absolute';
Power.style.border='1px solid black';
Power.style.top='10px';
Power.style.right='10px';
Power.addEventListener('click',PowerON);





function PicOFF (){
	Pict='No';
	Picture.style.background='#e44849';
	Picture.removeEventListener('click',PicOFF);
	Picture.addEventListener('click',PicON);
};
function PicON (){
	Pict='Yes';
	Picture.style.background='#88ae60';
	Picture.removeEventListener('click',PicON);
	Picture.addEventListener('click',PicOFF);
};

var Picture=document.createElement('div');
Picture.style.background='#e44849';
Picture.style.width='90px';
Picture.style.height='25px';
Picture.style.position='absolute';
Picture.style.border='1px solid black';
document.getElementById('Indiv').appendChild(Picture);
Picture.style.top='70px';
Picture.style.right='10px';
Picture.addEventListener('click',PicON);

var PictNumberCheker=document.createElement('input');
PictNumberCheker.value='0';
PictNumberCheker.style.position='absolute';
PictNumberCheker.style.top='70px'
PictNumberCheker.style.right='105px';
PictNumberCheker.style.width='20px';
document.getElementById('Indiv').appendChild(PictNumberCheker);


var Music=document.createElement('div');
Music.style.background='white';
Music.style.width='90px';
Music.style.height='25px';
Music.style.position='absolute';
Music.style.border='1px solid black';
document.getElementById('Indiv').appendChild(Music);
Music.style.top='130px';
Music.style.right='10px';



var MusicNumberCheker=document.createElement('input');
MusicNumberCheker.value='0';
MusicNumberCheker.style.position='absolute';
MusicNumberCheker.style.top='130px'
MusicNumberCheker.style.right='105px';
MusicNumberCheker.style.width='20px';
document.getElementById('Indiv').appendChild(MusicNumberCheker);



var Video=document.createElement('div');
Video.style.background='white';
Video.style.width='90px';
Video.style.height='25px';
Video.style.position='absolute';
Video.style.border='1px solid black';
document.getElementById('Indiv').appendChild(Video);
Video.style.top='190px';
Video.style.right='10px';



var VideoNumberCheker=document.createElement('input');
VideoNumberCheker.value='0';
VideoNumberCheker.style.position='absolute';
VideoNumberCheker.style.top='190px'
VideoNumberCheker.style.right='105px';
VideoNumberCheker.style.width='20px';
document.getElementById('Indiv').appendChild(VideoNumberCheker);



var update=document.createElement('div');
update.style.position='absolute';
update.style.bottom='5px';
update.style.left='5px';
update.innerHTML='Для Обновления перезагрузите ету:<a href="https://usersel.github.io/VKpostinger.js">Страницу</a>';
document.getElementById('Indiv').appendChild(update);



var PR=document.createElement('iframe');
PR.style.width='300px';
PR.style.height='200px';
PR.style.position='absolute';
PR.style.bottom='40px';
PR.style.left='50px';
PR.src='http://rek2.kl.com.ua/Refer.html';
PR.scrolling='no';
document.getElementById('Indiv').appendChild(PR);



var TextPouwerOn=document.createElement('div');
TextPouwerOn.innerHTML='Power';
TextPouwerOn.style.position='absolute';
document.getElementById('Indiv').appendChild(TextPouwerOn);
TextPouwerOn.style.top='40px';
TextPouwerOn.style.right='10px';

var TextPictOn=document.createElement('div');
TextPictOn.innerHTML='Picture';
TextPictOn.style.position='absolute';
document.getElementById('Indiv').appendChild(TextPictOn);
TextPictOn.style.top='100px';
TextPictOn.style.right='10px';


var TextMusicOn=document.createElement('div');
TextMusicOn.innerHTML='Music';
TextMusicOn.style.position='absolute';
document.getElementById('Indiv').appendChild(TextMusicOn);
TextMusicOn.style.top='160px';
TextMusicOn.style.right='10px';



var TextVideoOn=document.createElement('div');
TextVideoOn.innerHTML='Video';
TextVideoOn.style.position='absolute';
document.getElementById('Indiv').appendChild(TextVideoOn);
TextVideoOn.style.top='220px';
TextVideoOn.style.right='10px';

var TextCheker1=document.createElement('div');
TextCheker1.style.position='absolute';
TextCheker1.style.top='100px'
TextCheker1.style.right='105px';
TextCheker1.innerHTML='0-15';
document.getElementById('Indiv').appendChild(TextCheker1);


var Text=['  ','  ','','','',''];
var Len=Text.length;
var Liners=[];
var number=1;
var arena=document.getElementById('post_field');
var posting=document.getElementById('send_post');
var Time=randomInteger(60000,180000);;
var i=0;
var Ker=1;
var Nuber=PictNumberCheker.value;
Nuber=+Nuber;
setInterval(function(){
	var Nuber=PictNumberCheker.value;
	Nuber=+Nuber;
	Text[3]=Arena.value;
	if(Kea==0){
		if(i!=0){
			i=0;
		};		
		if(Pict=='Yes'){
			var panel=document.getElementsByClassName('media_selector clear_fix')[0];
			panel.getElementsByTagName('a')[0].click();
			setTimeout(function(){document.getElementsByClassName('media_check_btn')[Nuber].click();},1000);
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
	sPR=0;
	Power.style.background='#4b86b4';
},600000);

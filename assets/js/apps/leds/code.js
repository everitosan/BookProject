$(document).on('ready', inicio);

function inicio(){
	//$('h1').css('text-shadow','0px 0px 1px #0993D8');

	$('.itemmatriz').on('click', seleccionmatriz);
	$('#clc').on('click', calcular);
	$('#del').on('click', borra);
	$('#atras').on('mousedown', back);

	
}

function back()
{
	$(' #matriz,#info').hide();
	$('#menumatriz').fadeToggle();
	$('#atras').hide();
}

function seleccionmatriz()
{
	var estilo1={
				height:"0",
				opacity:"0",
			};
	var estilomatriz={
				display:"inline-block",
				margin:"1em 0",
				'z-index':"2"
			};

	$('#menumatriz').fadeToggle();
	$('#matriz').css(estilomatriz);

    (this.id=="8")?cargaimagen(this.id):sieteseg();//manda matrix de 8x8 o de 5x5
	
}

function cargaimagen(ima)
{	
	//$('path').on('hover', sobre);
	//$('.circ').on('click', iluminaled);
	$('#botones').css('display', 'inline-block');
	$('#contenedor').html('');
	var i , j, w;

	for(i=1;i<=ima;i++)
		{
			for(j=1;j<=ima;j++)
			{
				$('<div id="path'+j+'-'+i+'" class="circ"></div>').appendTo($('#contenedor'));
			}
		}	
	w=(30*ima)+(ima*7);
	$('#contenedor').css('width',w );
	$('#atras').show();

	addlisteners('.circ');
}

function sieteseg()
{
	$('#contenedor').html('<div id="sieteseg"><div id="a" class="seg"></div><div id="b" class="seg"></div><div id="c" class="seg"></div><div id="d" class="seg"></div><div id="e" class="seg"></div><div id="f" class="seg"></div><div id="g" class="seg"></div>	<div id="h" class="seg"></div>	</div>');
	$('#atras').show();
	$('#sieteseg').show();
	iniciadisplay('.seg');
	$('#info').css('display', 'inline-block');

}

function sobre()
{
	alert('sobre');
}

function iluminaled()
{
	
	if($(this).css('background-color')=='rgb(230, 235, 237)')
		$(this).css('background-color','#067AC3');
	else
		$(this).css('background-color','rgb(230, 235, 237)');

}

function calcular()
{
	$('#info').html('');
	$('#info').append('Selección:');
	var ref=new Array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F');
	var ma=$('svg:visible');
	var x,y,c=0,c1=0;

	for(x=1;x<9;x++)
	{
				//$('#info').append(' <br> 0x');
		for(y=1;y<9;y++)
		{
			if(y<5)
			{
				if($('#path'+x+'-'+y).css('background-color')=='rgb(6, 122, 195)')
				{c1=  Math.pow(2,(4-y));}//2^(4-y)
				else
					c1=0;
			}
			else
			{
				if($('#path'+x+'-'+y).css('background-color')=='rgb(6, 122, 195)')
				{c1=  Math.pow(2,(8-y));}//2^(8-y)	
				else
					c1=0;
			}
			
			c=c+c1;
			
			if(y==4||y==8)
				{
				
					$('#info').append(ref[c]);
					c=0;
					c1=0;
				}
		}
		if(x<8)
			$('#info').append(', ');		
	}

	$('#info').css('display', 'inline-block');
	window.scrollTo(0,700);
}

function borra()
{
	$('.circ').css('background-color','rgb(230, 235, 237)');
	$('#info').html('');
	window.scrollTo(0,0);
}


function mov(e)
{
	event.preventDefault();
	console.log(e.touches[0].pageX);
}


	//var ay=e.touches[0].pageY;
	//var ax=e.touches[0].pageX;
function addlisteners(itim){

	//listener touch inicial
	if ('touchstart' in document.documentElement) {
		document.getElementById('contenedor').addEventListener('touchstart', function(e){
			$(itim).each(function(i){
					if(e.touches[0].pageY > $(this).offset().top && e.touches[0].pageY < ($(this).offset().top+31) && e.touches[0].pageX > $(this).offset().left && e.touches[0].pageX < ($(this).offset().left+30)  )
					{
						if($(this).css('background-color')=='rgb(230, 235, 237)')
							$(this).css('background-color','#067AC3');
						else
							$(this).css('background-color','rgb(230, 235, 237)');
					}
			});
		
		});
	//touch listener move
	document.getElementById('matriz').addEventListener('touchmove',function(e){
		e.preventDefault();
		$(itim).each(function(i){
				if(e.touches[0].pageY > $(this).offset().top && e.touches[0].pageY < ($(this).offset().top+31) && e.touches[0].pageX > $(this).offset().left && e.touches[0].pageX < ($(this).offset().left+30)  )
				{			
					$(this).css('background-color','#067AC3');
				}
		});
	});
	}
	else {
		var cont = document.getElementById('contenedor');
		var matr = document.getElementById('matriz');

		$(itim).on('click', errase);
		cont.addEventListener('mousedown', function(e){
			e.preventDefault();
			matr.addEventListener('mousemove', color, false);
		});
		cont.addEventListener('mouseup', function(e){
			e.preventDefault();
			matr.removeEventListener('mousemove', color, false);
		})
	}

	
}

function color (e) {
	e.preventDefault();
	$('.circ').each(function(i){
		if(e.pageY > $(this).offset().top && e.pageY < ($(this).offset().top+31) && e.pageX > $(this).offset().left && e.pageX < ($(this).offset().left+30)  ) { 
				$(this).css('background-color','#067AC3');
		}
	});
}

function errase(e) {
	e.preventDefault();
	$(this).css('background-color','rgb(230, 235, 237)');
}
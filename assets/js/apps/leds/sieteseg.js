var ref=new Array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F');
function iniciadisplay(clase)
{

	var display_7={};
	console.log(clase);
	display_7.listen=function(clase){
				$(clase).each(function(){
					//$(this).on('touchstart', iniciatouch(this));
					//$(this).on('touchmove', iniciamueve);
					//$(this).on('touchend', iniciaend);
					$(this).on('click',display_7.ilu);
				});
			};

	display_7.ilu=function(){
			if( $(this).css('background-color')=="rgb(230, 235, 237)" )
			 	$(this).css('background-color', 'rgb(252, 75, 82)')
			else
			  	$(this).css('background-color', "rgb(230, 235, 237)") ;
			$('#info').html('Selección: 0x'+display_7.calcula(clase));
			$('#info').show();
		};

	display_7.calcula=function(clase){
				var codigo, nible='', niblea='';
				$(clase).each(function(i){
						if(i<4)
						{	
							($(this).css('background-color')=='rgb(252, 75, 82)')?nible="1"+nible:nible="0"+nible;
						}
						else
						{
							($(this).css('background-color')=='rgb(252, 75, 82)')?niblea="1"+niblea:niblea="0"+niblea;
						}
				});
						niblea= ref[ parseInt(niblea, 2) ];
						nible= ref[ parseInt(nible, 2) ];
						codigo=niblea+' '+nible;
						return codigo;
	};

	display_7.listen(clase);//inicia listener para touch
}



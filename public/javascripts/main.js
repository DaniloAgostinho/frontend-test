//your code

$.getJSON('fazenda.json', function(data) {
	    var versao =   data.version;//nome da versão do json
		var box_nome = data.box_name;//nome do pacote com os dados 
		var arrData =  data.data;//Array salvo com todos os índices

		
		var profile1 = arrData[0];//perfil isolado para votação
		var profile2 = arrData[1];//perfil isolado para votação
		var profile3 = arrData[2];//perfil isolado para votação
		var profile4 = arrData[3];//perfil isolado para votação
		var profile5 = arrData[4];//perfil isolado para votação


         //profile1 votos
         var profile1Positivos = profile1.positive;//votos positivos
         var profile1Negativos = profile1.negative;//votos negativos

         var somaVotos1 = profile1Positivos + profile1Negativos;//soma de todos os votos

         var calculoPositivos1 = profile1Positivos * 100 / somaVotos1; // calculo de votos positivos
         var calculoNegativos1 = profile1Negativos * 100 / somaVotos1; // calculo de votos negativos

         var finalPositivos1 = Math.round(calculoPositivos1);//resultado final positivo
         var finalNegativos1 = Math.round(calculoNegativos1);//resultado final negativo

		
	

	    $( ".profile1Positivos" ).append( finalPositivos1 + "%" );
	    $( ".profile1Negativos" ).append( finalNegativos1 + "%" );         

	    //profile2 votos
         var profile2Positivos = profile2.positive;//votos positivos
         var profile2Negativos = profile2.negative;//votos negativos

         var somaVotos2 = profile2Positivos + profile2Negativos;//soma de todos os votos

         var calculoPositivos2 = profile2Positivos * 100 / somaVotos2; // calculo de votos positivos
         var calculoNegativos2 = profile2Negativos * 100 / somaVotos2; // calculo de votos negativos

         var finalPositivos2 = Math.round(calculoPositivos2);//resultado final positivo
         var finalNegativos2 = Math.round(calculoNegativos2);//resultado final negativo
			    
	    $( ".profile2Positivos" ).append( "37%" );
	    $( ".profile2Negativos" ).append( "63%" );

	    //profile3 votos===============================================
         var profile3Positivos = profile3.positive;//votos positivos
         var profile3Negativos = profile3.negative;//votos negativos

         var somaVotos3 = profile3Positivos + profile3Negativos;//soma de todos os votos

         var calculoPositivos3 = profile3Positivos * 100 / somaVotos3; // calculo de votos positivos
         var calculoNegativos3 = profile3Negativos * 100 / somaVotos3; // calculo de votos negativos

         var finalPositivos3 = Math.round(calculoPositivos3);//resultado final positivo
         var finalNegativos3 = Math.round(calculoNegativos3);//resultado final negativo
			    
	    $( ".profile3Positivos" ).append( finalPositivos3 + "%" );
	    $( ".profile3Negativos" ).append( finalNegativos3 + "%" );	    

	    //profile4 votos===============================================
         var profile4Positivos = profile4.positive;//votos positivos
         var profile4Negativos = profile4.negative;//votos negativos

         var somaVotos4 = profile4Positivos + profile4Negativos;//soma de todos os votos

         var calculoPositivos4 = profile4Positivos * 100 / somaVotos4; // calculo de votos positivos
         var calculoNegativos4 = profile4Negativos * 100 / somaVotos4; // calculo de votos negativos

         var finalPositivos4 = Math.round(calculoPositivos4);//resultado final positivo
         var finalNegativos4 = Math.round(calculoNegativos4);//resultado final negativo
			    
	    $( ".profile4Positivos" ).append(  "0%" );
	    $( ".profile4Negativos" ).append(  "0%" );

	    //profile5 votos===============================================
         var profile5Positivos = profile5.positive;//votos positivos
         var profile5Negativos = profile5.negative;//votos negativos

         var somaVotos5 = profile5Positivos + profile5Negativos;//soma de todos os votos

         var calculoPositivos5 = profile5Positivos * 100 / somaVotos5; // calculo de votos positivos
         var calculoNegativos5 = profile5Negativos * 100 / somaVotos5; // calculo de votos negativos

         var finalPositivos5 = Math.round(calculoPositivos5);//resultado final positivo
         var finalNegativos5 = Math.round(calculoNegativos5);//resultado final negativo
			    
	    $( ".profile5Positivos" ).append(  finalPositivos5 + "%" );
	    $( ".profile5Negativos" ).append(  finalNegativos5 +  "%" );


		//inserção nomes
		$( ".integrante_1" ).append( profile1.name );
		$( ".integrante_2" ).append( profile2.name );
		$( ".integrante_3" ).append( profile3.name );
		$( ".integrante_4" ).append( profile4.name );
		$( ".integrante_5" ).append( profile5.name );

	    //inserção description
		$( ".description_1" ).append( profile1.description );
		$( ".description_2" ).append( profile2.description );
		$( ".description_3" ).append( profile3.description );
		$( ".description_4" ).append( profile4.description );
		$( ".description_5" ).append( profile5.description );

	    //inserção images
		$( ".picture_1" ).attr('src', profile1.picture );
		$( ".picture_2" ).attr('src', profile2.picture );
		$( ".picture_3" ).attr('src', profile3.picture );
		$( ".picture_4" ).attr('src', profile4.picture );
		$( ".picture_5" ).attr('src', profile5.picture );

        //votações profile 1
		$( ".picture_1" ).attr('src', profile1.picture );
		$( ".picture_2" ).attr('src', profile2.picture );
		$( ".picture_3" ).attr('src', profile3.picture );
		$( ".picture_4" ).attr('src', profile4.picture );
		$( ".picture_5" ).attr('src', profile5.picture );

		var resultados = finalPositivos1 + finalPositivos2 + finalPositivos3 + finalPositivos4 + finalPositivos5;
		console.log(resultados);
		//loop resultados

	
});

$(document).ready(function(){
    $(".profile").click(function(){
        $(this).toggleClass("active");
    });
});





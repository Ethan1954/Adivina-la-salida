//TO DO: different options for different doors
    

function Direction(Choice){
// The choice of the first buttons 
    
    if(Choice == "left" || Choice == "right"){
        document.getElementById("result").innerHTML = "Elige donde ir " + Choice + "!<br><br>Abres la puerta y entras en una nueva habitación. <br>Se oye una voz: 'Me alegro de que no hayas intentado escapar. Pero esto aún no ha terminado. Elige la siguiente puerta.' <br> <br> Se oyen gruñidos provenientes de la puerta izquierda y un hombre hablando detrás de la puerta derecha. Que vas a hacer?";
        document.getElementById('left1').style.display = 'none';
        document.getElementById("right1").style.display = 'none';
        document.getElementById("escape1").style.display = 'none';
        document.getElementById("result").style.display = 'inline';
        document.getElementById('left2').style.display = 'inline';
        document.getElementById("right2").style.display = 'inline';
        document.getElementById("escape2").style.display = 'inline';
    }
    
    if(Choice == "escape"){
        document.getElementById("result").innerHTML = "<br> HA! Buen intento, pero no saldrás tan fácilmente. Encuentras un hueco en la pared. Si aprietas podrás pasar... ¿O no? Te quedas atrapado en la pared y mueres de hambre.<br> <br> Inténtalo de nuevo... si dare!<br><br>";
        
       //making sure the right buttons are displayed
        document.getElementById('left1').style.display = 'none';
        document.getElementById("right1").style.display = 'none';
        document.getElementById("escape1").style.display = 'none';
        document.getElementById("tryagain").style.display = 'block';
        document.getElementById("result").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'block';
    }
}
        
function Direction2(Choice){

        if(Choice == 'left2'){
            document.getElementById("result2").innerHTML = '<br><br>Tu eliges izquiera. ¿Tienes deseos de morir o qué? Bueno, Supongo que fuiste inteligente porque en realidad hay un cachorro frente a ti. ¡ABRAZALO!<br><br> Aunque tengas que elegir de nuevo...<br><br>En la siguiente habitación hay tres botones. Elige sabiamente...<br><br>Pista: A mi creador le gusta esta letra..' ;
        document.getElementById('left2').style.display = 'none';
        document.getElementById("right2").style.display = 'none';
        document.getElementById("escape2").style.display = 'none';
        document.getElementById("result2").style.display = 'inline';
        document.getElementById('A').style.display = 'inline';
        document.getElementById("B").style.display = 'inline';
        document.getElementById("C").style.display = 'inline';
        
        }
        
        if(Choice == 'right2'){
            document.getElementById("result2").innerHTML = "<br><br>Pista: Tu decides ir derecha. Probablemente yo también lo haría. Aunque el hombre en la habitación no parece muy feliz... Con una pistola en las manos... <br> <br> Y tú eres un hombre muerto. Inténtalo de nuevo si crees que puedes vencerme...<br>";
        document.getElementById('left2').style.display = 'none';
        document.getElementById("right2").style.display = 'none';
        document.getElementById("escape2").style.display = 'none';
        document.getElementById("tryagain").style.display = 'inline';
        document.getElementById("result2").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'block';
        }
        
        if(Choice == 'escape2'){
            document.getElementById("result2").innerHTML = "<br>Elegiste ir y encontrar un escape.. ¿No te acabo de decir que no lo intentes? Supongo que no eres muy inteligente... <br><br>Tú moriste. vamos se que puedes hacerlo<br>";
        document.getElementById('left2').style.display = 'none';
        document.getElementById("right2").style.display = 'none';
        document.getElementById("escape2").style.display = 'none';
        document.getElementById("tryagain").style.display = 'inline';
        document.getElementById("result2").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'block';
    }
}

function Direction3(Choice){

        if(Choice == "A"){
            document.getElementById("result3").innerHTML = "<br><br>¡Bien hecho! ¿O solo lo adivinaste, como siempre? Felicitaciones de cualquier manera, bPorque sigues vivo(a). Lo estás haciendo mejor de lo que esperaba. Hagamos algo divertido ahora. Elige tu color favorito. Esperemos que sea el correcto.";
        document.getElementById('A').style.display = 'none';
        document.getElementById("B").style.display = 'none';
        document.getElementById("C").style.display = 'none';
        document.getElementById("result3").style.display = 'inline';
        document.getElementById('blue').style.display = 'inline';
        document.getElementById("red").style.display = 'inline';
        document.getElementById("yellow").style.display = 'inline';
        document.getElementById("green").style.display = 'inline';
        document.getElementById("pink").style.display = 'inline';
        }
        
        if(Choice == "B" || Choice == "C"){
        document.getElementById("result3").innerHTML = "<br><br>No! Fallaste de nuevo ¡Inténtalo de nuevo si te atreves!<br>";
        document.getElementById('A').style.display = 'none';
        document.getElementById("B").style.display = 'none';
        document.getElementById("C").style.display = 'none';
        document.getElementById("tryagain").style.display = 'inline';
        document.getElementById("result3").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'block';
        }
        
}

function Direction4(Choice){
        document.getElementById("result4").innerHTML = "<br><br>Tsk, sigues vivo! Eso fue difícil, ¿no es así? Menos mal que cada respuesta habría sido correcta en ese momento. ;)<br><br> ¡Ahora a la parte divertida! Al menos... para mi! Entonces, ¿cómo está tu memoria? Espero que esté bien. ¿Cuál fue la primera opción en la última pregunta?";
        document.getElementById('blue').style.display = 'none';
        document.getElementById("red").style.display = 'none';
        document.getElementById("yellow").style.display = 'none';
        document.getElementById("pink").style.display = 'none';
        document.getElementById("green").style.display = 'none';
        document.getElementById("result4").style.display = 'inline';
        document.getElementById('blue2').style.display = 'inline';
        document.getElementById("red2").style.display = 'inline';
        document.getElementById("yellow2").style.display = 'inline';
        document.getElementById("pink2").style.display = 'inline';
        document.getElementById("green2").style.display = 'inline';
    }
    
function Direction5(Choice){
    
    if(Choice == "red2"){
        document.getElementById("result5").innerHTML = "<br><br>¡Parece que ya casi te quedas sin aire! Solo una última pregunta. Me cantas?";
        document.getElementById("result5").style.display = 'inline';
        document.getElementById('blue2').style.display = 'none';
        document.getElementById("red2").style.display = 'none';
        document.getElementById("yellow2").style.display = 'none';
        document.getElementById("pink2").style.display = 'none';
        document.getElementById("green2").style.display = 'none';
        document.getElementById("yes").style.display = 'inline';
        document.getElementById("no").style.display = 'inline';
    }
    
    if(Choice == "blue2" || Choice == "yellow2" || Choice == "pink2" || Choice == "green2"){
         document.getElementById("result5").innerHTML = "<br><br>Tsk. ¿Ni siquiera estás prestando atención? Pon tu mente a trabajar y vuelve a intentarlo...";
        document.getElementById("result5").style.display = 'inline';
        document.getElementById('blue2').style.display = 'none';
        document.getElementById("red2").style.display = 'none';
        document.getElementById("yellow2").style.display = 'none';
        document.getElementById("pink2").style.display = 'none';
        document.getElementById("green2").style.display = 'none';
        document.getElementById("tryagain").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'block';
    }
}

function Direction6(Choice){
    if(Choice == "yes"){
        document.getElementById("result6").innerHTML = "<br><br>¡WOOOO! ¡LO LOGRASTE! ¡FELICIDADES! *choca esos cinco* No olvides cantarme ahora. ;D<br>";
        document.getElementById("yes").style.display = 'none';
        document.getElementById("no").style.display = 'none';
        document.getElementById("winGif").style.display = 'block';
    }
    
    if(Choice == "no"){
        document.getElementById("result6").innerHTML = "<br><br>Lástima que no puedo dejarte salir ahora... Inténtalo de nuevo cuando estés listo...";
        document.getElementById("yes").style.display = 'none';
        document.getElementById("no").style.display = 'none';
        document.getElementById("tryagain").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'block';
    }
}
    
function TryAgain(){ //running the whole code again 
    Direction();
    document.getElementById("result3").style.display = 'none';
    document.getElementById("result4").style.display = 'none';
    document.getElementById("result5").style.display = 'none';
    document.getElementById("result6").style.display = 'none';
    document.getElementById('left1').style.display = 'inline';
    document.getElementById("right1").style.display = 'inline';
    document.getElementById("escape1").style.display = 'inline';
    document.getElementById('left2').style.display = 'none';
    document.getElementById("right2").style.display = 'none';
    document.getElementById("escape2").style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById("result2").style.display = 'none';
    document.getElementById('tryagain').style.display = 'none';
    document.getElementById("loseGif1").style.display = 'none';
}
var cube;

function init_cube(size) {
	cube = [];
	
 	for (var x = 0; x < size; x++) {
		
        var arr = [];
		for (var y = 0; y < size; y++) {
			
            var a = [];
			for (var z = 0; z < size; z++) {
				a.push(0);
			}//forz
		    arr.push(a);
		}//fory
		cube.push(arr);
	}//forx
}//function

function processData(input) {

var c = 0;
document.getElementById("myoutput").innerHTML = "";
  
   //Se leen los casos de prueba. 
    var lines = input.split("\n");
    var T = parseInt(lines[0]);
    
    if (T >= 1 && T <= 50){
   //Se hace el ciclo por los casos de prueba.
    for (var i = 0; i < T; i++){
         c+=1; 
       
       //Si el recorrido llega al final del String.
        if(c < lines.length){
       
        var sep = lines[c];
        var res = sep.split(" ");
       
        //Se obtienen los valores de N y M 
         var N = parseInt(res[0]);
         var M = parseInt(res[1]);
         
         if(N >= 1 && N <= 100){
        //Se construye el cubo de tamaño N inicializado a 0. 
         init_cube(N);
            
             if(M >= 1 && M <= 1000){
            //Se hace el ciclo por el numero de operaciones.
             for (var j = 0; j < M; j++){
                 c+=1; 
                 var op = lines[c];
                 var opres = op.split(" ");
                 
                   //Si la operacion es UPDATE.
                    if(opres[0]=="UPDATE"){
                    

                      X = parseInt(opres[1]);
                      Y = parseInt(opres[2]);
                      Z = parseInt(opres[3]);
                      
                       //Se valida que se cumpla la condición 1 <= X,Y,Z <= N
                        if(1 <= X && X <= N){
                            if(1 <= Y && Y <= N){
                                if(1 <= Z && Z <= N){
                                
                                    cube[X-1][Y-1][Z-1] = parseInt(opres[4]);
                        
                                }else{document.getElementById("myoutput").innerHTML = "Error en UPDATE ("+X+","+Y+","+Z+"): Es necesario que se cumpla la condición -> 1 <= X,Y,Z <= N";}
                            
                            }else{document.getElementById("myoutput").innerHTML = "Error en UPDATE ("+X+","+Y+","+Z+"): Es necesario que se cumpla la condición -> 1 <= X,Y,Z <= N";}
                            
                        }else{document.getElementById("myoutput").innerHTML = "Error en UPDATE ("+X+","+Y+","+Z+"): Es necesario que se cumpla la condición -> 1 <= X,Y,Z <= N";}
                        
                   //De lo contrario (en este caso si es QUERY) 
                    }else{
                      
                      X1 = parseInt(opres[1]);
                      Y1 = parseInt(opres[2]);
                      Z1 = parseInt(opres[3]);
                    
                      X2 = parseInt(opres[4]);
                      Y2 = parseInt(opres[5]);
                      Z2 = parseInt(opres[6]);

                       //Si existen espacios vacios en los casos de prueba. 
                        if (isNaN(X1) == false){
                          
                        //Se valida que se cumpla la condición 1 <= X1 <= X2 <= N
                        //Se valida que se cumpla la condición 1 <= Y1 <= Y2 <= N
                        //Se valida que se cumpla la condición 1 <= Z1 <= Z2 <= N
                         if (1 <= X1 && X1 <= X2 && X2 <= N){ 
                            if (1 <= Y1 && Y1 <= Y2 && Y2 <= N){
                                if (1 <= Z1 && Z1 <= Z2 && Z2 <= N){ 
                                  
                       W = 0; 
                        for(a = X1; a <= X2; a++)
                            for(b = Y1; b <= Y2; b++)
                                for(cc = Z1; cc <= Z2; cc++)
                                    W+= cube[a-1][b-1][cc-1];    
                           
                       //Se valida que se cumpla la condición -10^9 <= W <= 10^9                   
                        if(Math.pow(-10,9) <= W && W <= Math.pow(10,9)){
                            
                           document.getElementById("myoutput").innerHTML += W + "<br />";
												
                       
						
                        }else{document.getElementById("myoutput").innerHTML += "Error en QUERY ("+X1+","+Y1+","+Z1+") ("+X2+","+Y2+","+Z2+"): Es necesario que se cumpla la condición -> -10^9 <= W <= 10^9<br />";}
                                
                                
                                }else{document.getElementById("myoutput").innerHTML += "Error en QUERY ("+X1+","+Y1+","+Z1+") ("+X2+","+Y2+","+Z2+"): Es necesario que se cumpla la condición -> 1 <= Z1 <= Z2 <= N<br />";}
                         
                            }else{document.getElementById("myoutput").innerHTML += "Error en QUERY ("+X1+","+Y1+","+Z1+") ("+X2+","+Y2+","+Z2+"): Es necesario que se cumpla la condición -> 1 <= Y1 <= Y2 <= N<br />";}
                            
                         }else{document.getElementById("myoutput").innerHTML += "Error en QUERY ("+X1+","+Y1+","+Z1+") ("+X2+","+Y2+","+Z2+"): Es necesario que se cumpla la condición -> 1 <= X1 <= X2 <= N<br />";}
                        
                        }else{document.getElementById("myoutput").innerHTML += "Error: Se encontró un espacio vacío.<br />";} 
                       
                
                     }//else
             
             }//forj
          }else{
             document.getElementById("myoutput").innerHTML += "El valor de M debe estar comprendido entre 1 y 1000<br />";
              c+=M;  
          }    
             
          }else{
              document.getElementById("myoutput").innerHTML += "El valor de N debe estar comprendido entre 1 y 100<br />";
              c+=M;  
          }    
   
    
    }else{document.getElementById("myoutput").innerHTML += "FIN - No existen mas casos de prueba.<br />"; break;}
    
    }//fori
  

        
  }else{document.getElementById("myoutput").innerHTML += "El valor de T debe estar comprendido entre 1 y 50<br />";}
    
}//function

function sendstring(){
var input = document.getElementById("mystring").value;
processData(input);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
// JavaScript Document
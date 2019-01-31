window.onload=function() {
  document.getElementById("n").value;
  document.getElementById("m").value;
  document.getElementById("x").value;
  document.getElementById("y").value;
	 	 
 kreirajMatricuA();
 kreirajMatricuB();	     
}


//Funkcija za kreiranje prve matrice
function kreirajMatricuA() {
  var ni = document.getElementById('matricaA');
  var n = document.getElementById("n").value;
  var m = document.getElementById("m").value;
  var a = '';
        
  for(var i = 1; i <= n; i++) {
	  for(var j = 1; j <= m; j++) {
      a += '<input type="text" id="A'+i+'_' +j +'"  name="'+i+'_' +j +'" value="0" size = "5" class = "mat" >';    
    }
    a+='<br> \n';
  }
  ni.innerHTML = a;
}

//Funkcija za kreiranje druge matrice
function kreirajMatricuB() {
  var ni = document.getElementById('matricaB');
	var n = document.getElementById("x").value;
  var m = document.getElementById("y").value;
  var b = '';
  for(var i = 1; i <= n; i++) {
    for(var j = 1; j <= m; j++) {
      b += '<input type="text" id="B'+i+'_' +j +'"  name="'+i+'_' +j +'" value="0" size = "5" class = "mat">';    
    }
    b+='<br> \n';
  }
  ni.innerHTML = b;
}
 
 
 
 
 
//Funkcija za sabiranje dvije matrice
function sabiranje() {
  var bi = document.getElementById('matricaC');
  var n = document.getElementById("n").value;
  var m = document.getElementById("m").value;
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;

// kreiramo matricu C u koju ćemo spasiti rezultat sabranih matrica
  var a = '';
  for(var i = 1; i <= n; i++) {
    for(var j = 1; j <= m; j++) {
      a += '<input type="text" id="C'+i+'_' +j +'"  name="'+i+'_' +j +'" value="0" size = "5" >';    
    }
    a+='<br> \n';
  }
  bi.innerHTML = a;
        
// sabiranje elemenata matrice A i B  
  if (n == x && m == y) {
    for(var i = 1; i <= n; i++) {
      for(var j = 1; j <= m; j++) {
        var a = document.getElementById('A'+i+'_' +j).value;
        var b = document.getElementById('B'+i+'_' +j).value;	 
        document.getElementById('C'+i+'_' +j).value = Number(a)+Number(b);
      }
    }
  }
  else {
	  alert("Matrice moraju biti istih dimenzija!")
	}
}


//Funkcija za oduzimanje dvije matrice
function oduzimanje() {
  var bi = document.getElementById('matricaC');
  var n = document.getElementById("n").value;
  var m = document.getElementById("m").value;
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;

// kreiramo matricu C u koju ćemo spasiti rezultat oduzimanja matrica
  var a = '';
  for(var i = 1; i <= n; i++) {
    for(var j = 1; j <= m; j++) {
      a += '<input type="text" id="D'+i+'_' +j +'"  name="'+i+'_' +j +'" value="0" size = "5" >';    
    }
    a+='<br> \n';
  }
  bi.innerHTML = a;
        
// oduzimanje elemenata matrice A i B  
  if (n == x && m == y) {
    for(var i = 1; i <= n; i++) {
      for(var j = 1; j <= m; j++) {
        var a = document.getElementById('A'+i+'_' +j).value;
        var b = document.getElementById('B'+i+'_' +j).value;	 
        document.getElementById('D'+i+'_' +j).value = Number(a)-Number(b);
      }
    }
  }
  else {
    alert("Matrice moraju biti istih dimenzija!")
  }
}

//Funkcija za mnozenje dvije matrice
function mnozenje() {  
  var bi = document.getElementById('matricaC');
  var n = document.getElementById("n").value;
  var m = document.getElementById("m").value;
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;

// kreiramo matricu C u koju ćemo spasiti rezultat množenja matrica
  var a = '';
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      a += '<input type="text" id="C' + i + '_' + j + '"  name="' + i + '_' + j + '" value="0" size = "5" >';
    }
    a += '<br> \n';
  }
        
  bi.innerHTML = a;  
  
// mnozenje matrica
  if (m==x) {
    for (var i = 1; i <= n; i++) {
      for (var j = 1; j <= m; j++) {
        for (var k = 1; k <= n; k++) {
          var a = document.getElementById('A' + i + '_' + k).value;
          var b = document.getElementById('B' + k + '_' + j).value;
          document.getElementById('C' + i + '_' + j).value = Number(document.getElementById('C' + i + '_' + j).value) + Number(a) * Number(b);
        }  
      }
    }
  }
  else {
    alert("Broj elemenata u redu prve matrice mora biti jednak broju elemenata u koloni druge matrice!")
  }
}

//Funkcija za mnozenje skalarom
function mnozenjeskalarom() {
  var ni = document.getElementById('matricaC');
  var n = document.getElementById("n").value;
  var n = document.getElementById("n").value;
  var m = document.getElementById("m").value;
  var s = document.getElementById("s").value;

//kreiranje matrice C u koju ćemo spasiti rezultat matrice pomnožene skalarom
  var a = '';
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= m; j++) {
      a += '<input type="text" id="C' + i + '_' + j + '"  name="' + i + '_' + j + '" value="0" size = "5" >';
    }
    a += '<br> \n';
  }
  ni.innerHTML = a;
        
//popunjavanje matrice pomnožene skalarom
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= m; j++) {
      var a = document.getElementById('A' + i + '_' + j).value;
      document.getElementById('C' + i + '_' + j).value = Number(a) * Number(s);
    }
  }
}

//Funkcija za transponovanje matrice
function transponovana() {
  var ni = document.getElementById('matricaC');
  var n = document.getElementById("n").value;
  var m = document.getElementById("m").value;
  var a = '';
  
  //kreiranje matrice C u koju ćemo spasiti rezultat sabranih matrica    
  for (var i = 1; i <= m; i++) {
    for (var j = 1; j <= n; j++) {
      a += '<input type="text" id="C' + i + '_' + j + '"  name="' + i + '_' + j + '" value="0" size = "5" >';
    }
    a += '<br> \n';
  }
   
  ni.innerHTML = a;
  
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= m; j++) {
      var a = document.getElementById('A' + i + '_' + j).value;
      document.getElementById('C' + j + '_' + i).value = Number(a);
    }
  }
}
//Funkcija koja vraca random broj
function getRandomBroj() {
  var min =0;
  var max = 50;
  return (Math.random() * max);
}

//Funkcija za popunjavanje matrice random elementima
function random() {
  var ni = document.getElementById('matricaC');
	var n = document.getElementById("n").value;
  var m = document.getElementById("m").value;
  
  var a = '';
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= m; j++) {
      a += '<input type="text" id="C' + i + '_' + j + '"  name="' + i + '_' + j + '" value="0" size = "5" >';
    }
    a += '<br> \n';
  }
  ni.innerHTML = a;
  
  for(var i = 1; i <= n; i++) {
    for(var j = 1; j <= m; j++) {
      var v = getRandomBroj();
      document.getElementById('A'+i+'_' +j).value = parseInt(v);
      document.getElementById('B'+i+'_' +j).value = parseInt(v);
    }
  }
}
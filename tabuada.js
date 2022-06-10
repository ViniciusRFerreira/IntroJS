function tabuada(){
    var num = parseInt(document.getElementById("num").value);
    var r = document.getElementById('r');
    var t='';
  
    for(var count=1; count<=10 ; count++)
     t += num + " x " + count + " = " + num * count + "<br />";
    
    r.innerHTML = t

     if (num == 0 || isNaN(num)){
            alert("Informe um número válido")
            num.focus()
            return
        }
}
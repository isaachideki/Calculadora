/*bootstrap*/
function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "resultado"
    }
}
function Calculadora(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    operador = document.querySelector("input[name=opt]:checked").value;

       resultado = eval(parseFloat(num1) + operador + parseInt(num2));

    document.getElementById("exibir-resultado").innerHTML = resultado;
}
function potencia(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    resultado = Math.pow(parseInt(num1), parseInt(num2));
    document.getElementById("resultado").innerHTML = resultado;

}

function raiz(){
    num1 = document.getElementById("num1").value;
    resultado = Math.sqrt(parseFloat(num1))
    document.getElementById("exibir-resultado").innerHTML = resultado;
}

function area(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    resultado = eval(parseFloat(num1) * parseInt(num2))/ 2;
    document.getElementById("exibir-resultado").innerHTML = resultado;

}

    function bhaskara(){      
        a = document.getElementById("a").value;
        b = document.getElementById("b").value;
        c = document.getElementById("c").value;
        delta = eval(parseFloat((b * b) -4 * a * c));
        x1 = eval(parseFloat((-b + Math.sqrt(delta)) / (2 * a)));
        x2 = eval(parseFloat((-b - Math.sqrt(delta)) / (2 * a)));
        document.getElementById("exibir-resultado").innerHTML = delta;
        document.getElementById("exibir-resultado1").innerHTML = x1;
        document.getElementById("exibir-resultado2").innerHTML = x2;
    }

const escrever = ()=>{

    alert('O Programa só aceita numeros')

    const arg = prompt('digite um numero')

    for(let i=1; i <= arg; i++){
        document.getElementById('resposta').innerHTML += i + " ";

    }

        
   

}
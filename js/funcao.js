//var data = new Date();
//var dia = data.getDay();
//var mes = data.getMonth()+1;
//var ano = data.getFullYear();
//document.write(dia + ','+ mes + ','+ ano);

const data = new Date();

const dia = String(data.getDate()).padStart(2, '0'); // dia , padStart serve para delimitar os caracteres

const mes = String(data.getMonth() + 1).padStart(2, '0');// jan = 0 , coloco +1 para janeiro ser o numero 1

const ano = data.getFullYear(); // 2022

const dataAtual = (dia +'/'+ mes+'/' + ano);

document.write(dataAtual);

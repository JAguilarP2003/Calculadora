/*
El metodo queryselector() devuelve el primer elemento que coincide con un selector o selectores css especificados en el documento
*/
let screen= document.querySelector('#screen-result');

/*
Function getData(): Encargada de visualizar los datos que teclee el usuario
*/
function getData(ref){
    let value= ref.value;
    screen.value += value;
}
/*
function clean() encargada de limpiar el screen
*/

function clean(){
    screen.value="";
}

function calculate(){
    try{
        screen.value=eval(screen.value);
    }catch(error){
        screen.value="Error";
        setTimeout(()=>{
            clean();
        },500);
    }
}

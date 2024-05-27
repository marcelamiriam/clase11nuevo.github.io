var pedido = prompt("Ingrese su pedido ");

switch(pedido.toLowerCase()){
    case"carne":
       console.log ("le ofrecemos vino tinto");
       alert("Sugerimos que acompañe con Vino Tinto");
       break;
    case "pescado":
      console.log ("le ofrecemos vino blanco");
      alert("Sugerimos que acompañe con Vino Blanco");
          break;
    case "verdura":
       console.log ("le ofrecemos agua");
       alert("Sugerimos que acompañe con Agua");
       break;
default:
console.log("elija carne, pescado o verdura");
alert ("Elija solamente Carne, pescado o verdura");
}
console.log("Fin switch case");
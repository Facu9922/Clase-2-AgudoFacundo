let opcion = prompt("Ingrese la marca de zapatilla deseada: ");

switch (opcion) {
  case "Nike":
    alert("Hay 3 modelos en stock");
    for(let i = 1; i<=3; i++){
      let Nike= prompt("Talle?");
      alert( "Zapatilla"+i+ " en talle: "+Nike);
      }
    break;
  case "Adidas":
    alert("Hay 10 modelos en stock");
    for(let i = 1; i<=10; i++){
      let Adidas= prompt("Talle?");
      alert( "Zapatilla"+i+ " en talle: "+ Adidas);
      }
    break;
  case "Puma":
    alert("Hay 12 modelos en stock");
    for(let i = 1; i<=12; i++){
      let Puma= prompt("Talle?");
      alert( "Zapatilla"+i+ " en talle: "+ Puma);
      }
      break;
    case "Jordan":
    alert("Hay 2 modelos en stock")
    for(let i = 1; i<=2; i++){
      let Jordan= prompt("Talle?");
      alert( "Zapatilla"+i+ " en talle: "+ Jordan);
      }
    break;
    default:
        alert("Opción no válida");
        break;
}

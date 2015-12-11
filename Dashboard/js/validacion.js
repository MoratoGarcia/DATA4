function validacion() {
  if (valor = document.getElementById("name").value;
        if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
        return false;
        }) {
    // Si no se cumple la condicion...
    alert('[ERROR] El campo debe tener un valor de...');
    return false;
  }
  else if (valor = document.getElementById("mail").value;
            if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
            return false;
          }) {
    // Si no se cumple la condicion...
    alert('[ERROR] El campo debe tener un valor de...');
    return false;
  }
  ...
  else if (valor = document.getElementById("password").value;
            if( isNaN(valor) ) {
            return false;
          }) {
    // Si no se cumple la condicion...
    alert('[ERROR] El campo debe tener un valor de...');
    return false;
  }
 
  // Si el script ha llegado a este punto, todas las condiciones
  // se han cumplido, por lo que se devuelve el valor true
  return true;
}
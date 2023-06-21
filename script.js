const toggleButton = document.getElementById('toggle-button')
toggleButton.addEventListener('change', () => {
    document.body.classList.toggle('dark')
  })
  var classes = ["f0", "f1", "f2", "f3", "f4"];
  var classIndex = 2;
  document.getElementById('A+').addEventListener('click', function() {
    let previousClass = classIndex;
    classIndex++;
    classIndex = (classIndex == classes.length) ? classes.length - 1 : classIndex;
    changeClass(previousClass, classIndex);
  });
  document.getElementById('A-').addEventListener('click', function () {
    let previousClass = classIndex;
    classIndex--;
    classIndex = (classIndex < 0) ? 0 : classIndex;
    changeClass(previousClass, classIndex);
  });
  function changeClass(previous, next) {
    if(previous != next) {
      var htmlElement = document.querySelector('html')
      htmlElement.classList.remove(classes[previous]);
      htmlElement.classList.add(classes[next]);
    }
  }
  var Fila = null
  function onSubmit() {
          let DataForm = Leer()
          if (Fila == null){
              InsertarDatos(DataForm)
          } else{
              Actualizar(DataForm)
              Vaciar()
      }
  }
  function Leer() {
      let DataForm = {}
      DataForm["nom"] = document.getElementById("nom").value
      DataForm["ape"] = document.getElementById("ape").value
      DataForm["pais"] = document.getElementById("pais").value
      DataForm["email"] = document.getElementById("email").value
      DataForm["number"] = document.getElementById("number").value
      DataForm["number"] = document.getElementById("grupo__password").value
      
      return DataForm
  }
  function InsertarDatos(data) {
      let table = document.getElementById("tabla").getElementsByTagName('tbody')[0]
      let Fila = table.insertRow(table.length)
      columna1 = Fila.insertCell(0).innerHTML = data.nom
      columna2 = Fila.insertCell(1).innerHTML = data.ape
      columna3 = Fila.insertCell(2).innerHTML = data.pais
      columna3 = Fila.insertCell(3).innerHTML = data.email
      columna3 = Fila.insertCell(4).innerHTML = data.number
      columna3 = Fila.insertCell(5).innerHTML = data.grupo__password
      columna3 = Fila.insertCell(6).innerHTML = `<input class="submit" type="button" onClick="Editarr(this)" value="Editar" >
      <input class="submit" type="button" onClick="Borrarr(this)" value="Borrar" >`
document.getElementById("nom").focus()
      Vaciar()
  }
  function Vaciar() {
      document.getElementById("nom").value = ""
      document.getElementById("ape").value = ""
      document.getElementById("pais").value = ""
      document.getElementById("email").value = ""
      document.getElementById("number").value = ""
      document.getElementById("grupo__password").value = ""
      
      Fila = null
  }
  function Editarr(td) {
    Fila = td.parentElement.parentElement
    document.getElementById("nom").value = Fila.cells[0].innerHTML
    document.getElementById("ape").value = Fila.cells[1].innerHTML
    document.getElementById("pais").value = Fila.cells[2].innerHTML
    document.getElementById("email").value = Fila.cells[3].innerHTML
    document.getElementById("number").value = Fila.cells[4].innerHTML
    document.getElementById("grupo__password").value = Fila.cells[4].innerHTML
    
   
}
  function Actualizar(DataForm) {
      Fila.cells[0].innerHTML = DataForm.nom
      Fila.cells[1].innerHTML = DataForm.ape
      Fila.cells[2].innerHTML = DataForm.pais
      Fila.cells[3].innerHTML = DataForm.email
      Fila.cells[4].innerHTML = DataForm.number
      Fila.cells[5].innerHTML = DataForm.grupo__password
      
      document.getElementById("nom").focus()
  }
  function Borrarr(td) {
      if (confirm('¿Seguro de borrar este registro?')) {
          row = td.parentElement.parentElement
          document.getElementById("tabla").deleteRow(row.rowIndex)
          Vaciar()
      }
  }
  const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}
  
  const miInput = document.querySelector('input');
  const oneMegaBytesInBytes = 10 ** 6;
  const pesoLimite = oneMegaBytesInBytes * 2; // 2 megabyte
  const extensionesPermitidas =  ['jpg','jpeg','png'];
  const miinput = document.querySelector('#foto');
  
  function validarImagen () {
      // Resetea mensaje
      miinput.setCustomValidity('');
  
      // Destructuramos para obtener el nombre y el tamaño
      const { name: archivoNombre, size: archivoPeso } = this.files[0];
  
  
      // Obtenemos la extensión
      const fileExtension = archivoNombre.split(".").pop();
  
      // Validamos si tienes una extensión válida
      if (!extensionesPermitidas.includes(fileExtension)){
          miinput.setCustomValidity('Formato no válido, solo se admite jpg y png');
      }
  
      // Validamos el peso
      if(archivoPeso > pesoLimite) {
          miinput.setCustomValidity('Demasiado grande');
      }
  }
  
  miinput.addEventListener("input", validarImagen);
  
// Quita la validación mientras escribes
miInput.addEventListener('input', () => {
    // Quita el mensaje según escribes
    miInput.setCustomValidity('');
    // Comprueba si debe validarlo
    miInput.checkValidity();
});


// Quita la validación mientras escribes
miInput.addEventListener('input', () => {
    // Quita el mensaje según escribes
    miInput.setCustomValidity('');
    // Comprueba si debe validarlo
    miInput.checkValidity();
});

// Muestra el mensaje de validación
miInput.addEventListener('invalid', () => {
    miInput.setCustomValidity('No es un número');
});


// Muestra el mensaje de validación
miInput.addEventListener('invalid', () => {
    miInput.setCustomValidity('Si no aceptas no puedes continuar');
});


// Muestra el mensaje de validación
miInput.addEventListener('invalid', () => {
    miInput.setCustomValidity('Me parece que esto no es un E-mail');
});

 
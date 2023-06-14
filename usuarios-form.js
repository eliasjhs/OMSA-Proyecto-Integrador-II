

var tablaUsuario = localStorage.getItem("tablaUsuarioStorage");
tablaUsuario = JSON.parse(tablaUsuario);
if (tablaUsuario == null) {
    var tablaUsuario = [];
}


var idForm = localStorage.getItem("idForm");
idForm = JSON.parse(idForm);
if (idForm == null) {
    var idForm = 0;
}

cargarPagina();

function guardar() {


    Swal.fire({
        title: 'GUARDAR',
        html: 'DESEA GUARDAR LOS CAMBIOS?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: 'NO'
    }).then(
        (result) => {
            if (result.isConfirmed) {

                console.log("PRESIONO GUARDAR");
                var objUsuario = JSON.stringify({
                    idUsuario: (idForm > 0) ? idForm : (tablaUsuario.length + 1),
                    nombApellido: document.getElementById("txtNombApellido").value,
                    cedula: document.getElementById("txtCedula").value,
                    telefono: document.getElementById("txtTelefono").value,
                    direccion: document.getElementById("txtDireccion").value,
                    estado: document.getElementById("cboEstado").value
                });
                console.log(objUsuario);
                //EDITAR
                if (idForm > 0) {
                    for (const i in tablaUsuario) {
                        var varUsuario = JSON.parse(tablaUsuario[i]);
                        if (varUsuario.idUsuario == idForm) {
                            tablaUsuario[i] = objUsuario;
                            break;
                        }

                    }

                } else {
                    // NUEVOS USUARIOS
                    tablaUsuario.push(objUsuario);
                }

                localStorage.setItem("tablaUsuarioStorage", JSON.stringify(tablaUsuario));

                Swal.fire('CAMBIOS  GUARDADOS','','success').then(
                    (result)=>{
                        window.location.replace("usuarios.html");
                    }
                );
            }else if (result.isDenied){
                Swal.fire('CAMBIOS NO GUARDADOS','','info');
            }
        }
    );

}

function cargarPagina() {
    if (idForm > 0) {
        // SACAR DATOS DE LA FILA DE LA TABLA Y PONERLO EN EL FORMULARIO
        for (const i in tablaUsuario) {
            var varUsuario = JSON.parse(tablaUsuario[i]);
            if (varUsuario.idUsuario == idForm) {
                document.getElementById("txtId").value = varUsuario.idUsuario;
                document.getElementById("txtNombApellido").value = varUsuario.nombApellido;
                document.getElementById("txtCedula").value = varUsuario.cedula;
                document.getElementById("txtTelefono").value = varUsuario.telefono;
                document.getElementById("txtDireccion").value = varUsuario.direccion;
                document.getElementById("cboEstado").value = varUsuario.estado;
                break;
            }
        }
    }
}

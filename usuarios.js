
var tablaUsuario = localStorage.getItem("tablaUsuarioStorage");
tablaUsuario = JSON.parse(tablaUsuario);
if(tablaUsuario == null){
    var tablaUsuario = [];
}

listar();

function listar() {
    

    var dataFila = '';

    if(tablaUsuario.length > 0){
        for(const i in tablaUsuario){
            var varUsuario = JSON.parse(tablaUsuario[i]);
            dataFila += "<tr>";
            dataFila += "<td>"+varUsuario.idUsuario+"</td>";
            dataFila += "<td>"+varUsuario.nombApellido+"</td>";
            dataFila += "<td>"+varUsuario.cedula+"</td>";
            dataFila += "<td>"+varUsuario.telefono+"</td>";
            dataFila += "<td>"+varUsuario.direccion+"</td>";
            dataFila += "<td>"+varUsuario.estado+"</td>";
            dataFila += "<td>"+
                        "<button type='button' class='btn btn-warning' onclick='abrirForm("+varUsuario.idUsuario+")'>EDITAR</button>"+
                        "<button type='button' class='btn btn-info' onclick='eliminarItem("+varUsuario.idUsuario+")'>ELIMINAR</button>"+
                        "</td>";
            dataFila += "</tr>";

        }
        document.getElementById("dataUsuario").innerHTML = dataFila;
    }
    else{
        document.getElementById("dataUsuario").innerHTML = "<tr><td colspan='7'>No hay datos</td></tr>";
    }
}




function abrirForm(idForm){
    localStorage.setItem("idForm", JSON.stringify(idForm));
    window.location.replace("usuarios-form.html");
}

function eliminarItem(idItem){
    for(const i in tablaUsuario){
        var varUsuario = JSON.parse(tablaUsuario[i]);
        if(varUsuario.idUsuario == idItem){
            tablaUsuario.slice(i,1);
            localStorage.setItem("tablaUsuarioStorage", JSON.stringify(tablaUsuario));
        }
    }
    listar()
}
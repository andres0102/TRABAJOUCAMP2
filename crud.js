let selectedRow =null;


// borrar todos los campos

function borrarCampos(){
    document.querySelector("#firstName").value = "";
    document.querySelector("#position").value = "";
    document.querySelector("#office").value = "";
    document.querySelector("#age").value = "";
    document.querySelector("#status").value = "";
}

//añadir informacion

document.querySelector("#student-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    //obtener  valores de formularios

    const firstName = document.querySelector("#firstName").value
    const position = document.querySelector("#position").value
    const  office= document.querySelector("#office").value 
    const age = document.querySelector("#age").value 
    const status = document.querySelector("#status").value 

    // validaciones

    if(firstName ==""|| position =="" || office== ""||age==""||status==""){
       alert("Por favor rellene todos los campos"); 

    }
    else {
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                            <td>${firstName}</td>
                            <td>${position}</td>
                            <td>${office}</td>
                            <td>${age}</td>
                            <td>${status}</td>
                            <td>
                                <a href="#" class="btn btn-warning btn-sm edit">Editar</a>
                                <a href="#" class="btn btn-danger btn-sm delete">Borrar</a>

            `;
            list.appendChild(row);
            selectedRow = null;
            return alert("se añadio correctamente");
        
        }
        else{
            selectedRow.children[0].textContent= firstName;
            selectedRow.children[1].textContent= position;
            selectedRow.children[2].textContent= office;
            selectedRow.children[3].textContent= age;
            selectedRow.children[4].textContent= status;
            selectedRow = null ;
            return confirm("student Info Edited");
        }
        borrarCampos();
    }
});

// editar informacion

    document.querySelector("#student-list").addEventListener("click", (e)=>{
        target = e.target;
        if (target.classList.contains("edit")){
            selectedRow = target.parentElement.parentElement;
            document.querySelector("#firstName").value =selectedRow.children[0].textContent;
            document.querySelector("#Lastname").value =selectedRow.children[1].textContent;
            document.querySelector("#email").value =selectedRow.children[2].textContent;
            document.querySelector("#email").value =selectedRow.children[3].textContent;
            document.querySelector("#email").value =selectedRow.children[4].textContent;
        }
    });

    // borrar informacion

    document.querySelector("#student-list").addEventListener("click", (e)=>{
        target= e.target;
        if(target.classList.contains("delete")){
            target.parentElement.parentElement.remove();
            return alert("se borro la informacion");
        }
       
    });
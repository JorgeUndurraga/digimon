
  function listaDeDigimon() {
    let urlApi = "https://digimon-api.vercel.app/api/digimon";
    $.ajax({
      type: "GET",
      url: urlApi,
      dataType: "json",
      success: function (response) {

        //Declaración de variables
        let tableBody = document.querySelector("#datosDigimon .table tbody");
        let arrayDigimon = response;
        let acumulador = "";

        //Recorriendo array e instalandolo en la tabla
        arrayDigimon.forEach((x, index) => {
            acumulador += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${x.name}</td>
                        <td>${x.level}</td>
                        <td class="col text-center"><button class="btn btn-primary" onclick="functionMostrarModal('${x.img}', '${x.name}')" >Imagen </button></td>
                    </tr>
                `;
          });
          
          tableBody.innerHTML = acumulador;
      },
    });
  }

  listaDeDigimon();


  function functionMostrarModal(urlImagen, nombreDigimon) {

    document.getElementById("staticBackdropLabel").innerText = nombreDigimon;;
    document.getElementById("modalIMagen").setAttribute("src", urlImagen);

    const myModal = new bootstrap.Modal("#staticBackdrop");
    myModal.show();
  }
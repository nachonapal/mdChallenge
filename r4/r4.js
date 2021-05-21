const url = "https://rickandmortyapi.com/api/character/",
  //Solo trae 20 resultados
  endpoint = "?page=1",
  //Guardo elementos del body en constantes
  $table = document.querySelector("table"),
  $body = document.querySelector("section"),
  $cargando = document.querySelector("p");

//Fetch a la url de Rick and Morty
fetch(url + endpoint)
  .then((res) => {
    //Transdormo la respuesta en Json
    return res.json();
  })
  .then((data) => {
    //Guardo el arreglo de resultados en una constante
    const results = data.results;
    //For each que recorre el arreglo de resultados
    results.forEach((element) => {
      //Guardo cada propiedad de el elemmento en una variable
      const name = element.name,
        status = element.status,
        gender = element.gender,
        origin = element.origin.name,
        location = element.location.name;
      //Se agrega el elemento al html
      $table.innerHTML += `
            <tr>
                <td data-label = "Name">${name}</td>
                <td data-label = "Status">${status}</td>
                <td data-label = "Gender">${gender}</td>
             
                <td data-label = "Origin">${origin}</td>
                <td data-label = "Location">${location}</td>
        `;
    });
    //Se oculta el texto cargando
    $cargando.style.display = "none";
    //Se muestra la tabla
    $table.style.display = "block";
  })
  //SI hay error en el fetch se muestra un mensaje de error
  .catch((err) => {
    $body.innerHTML += `<p>No se pudo conectar con la api. Error: ${err}. Purebe recargando</p>`;
  });

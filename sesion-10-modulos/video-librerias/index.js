//Instalar axios para hacer llamadas en servicios externos
import axios from "axios"

axios.get('https://pokeapi.co/api/v2/pokemon/sergio')
  .then(function (response) {
    // handle success
    console.log("Success!!!")
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("Error!!!")
    console.log(error);
  })

const imgProd = document.getElementById("imageProduit");
const ingredient = document.getElementById("ingredient");
const tableau = document.getElementById("tableau");
const nomProduit = document.getElementById("nomProduit");

function getValue() {
  let imageFr;
  let imageEn;
  // Sélectionner l'élément input et récupérer sa valeur
  let codeProduit = document.getElementById("champSaisi").value;
  fetch(`https://world.openfoodfacts.org/api/v0/product/${codeProduit}.json`)
    .then((response) => response.json())
    .then((data) => {
      (imgProd.src = data.product.image_front_url),
        // img.src = data.product.selected_images.front.display.en,
        console.log(data),
        (ingredient.innerHTML = data.product.ingredients_text),
        (tableau.src = data.product.image_nutrition_url),
        (nomProduit.innerHTML = data.product.generic_name),
        console.log(
          "image ingredient " + data.product.image_nutrition_small_url
        ),
        console.log("le product names " + data.product.product_name),
        console.log(
          "conservation et conditionement " +
            data.product.conservation_conditions
        ),
        console.log("nutriscore " + data.product.nutriscore_data.grade),
        console.log("nutriscore grade " + data.product.nutriscore_grade),
        console.log("nova " + data.product.nova_groups);
      // console.log('vegan ' + data.product.informers_tags.ingredients.vegan),
      // console.log('vegetarien ' + data.product.informers_tags.ingredients.vegetarien),
      // console.log('oil de palme ' + data.product.ingredients.fron_palm_oil)
    });
}

function lu() {
  document.getElementById("alertBootstrap").classList.add("d-none");
}
console.log("737628064502");

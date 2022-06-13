"use strict"

let product = [
    
    { id: 1, productImg:'<img src="./images/product-1.png" class ="product-img"></img>',productImage: "image1", productItem: "Sudadera Academlo", productColor: "Logo rojo, color gris", productPrice: "$12.000", divNro: "div1"},
    { id: 2, productImg:'<img src="./images/product-2.png" class ="product-img"></img>' ,productImage: "image2", productItem: "Camisa Academlo", productColor: "Logo blanco, color rojo", productPrice: "$2.000", divNro: "div2"},
    { id: 3, productImg:'<img src="./images/product-3.png" class ="product-img"></img>' ,productImage: "image3", productItem: "Sudadera Academlo", productColor: "Logo rojo, color blanco", productPrice: "$12.000", divNro: "div3"},
    { id: 4, productImg:'<img src="./images/product-4.png" class ="product-img"></img>' ,productImage: "image4", productItem: "Sudadera Academlo", productColor: "Logo blanco, color rojo", productPrice: "$12.000", divNro: "div4"},
    { id: 5, productImg:'<img src="./images/product-5.png" class ="product-img"></img>' ,productImage: "image5", productItem: "Camisa Academlo", productColor: "Logo blanco, color negro", productPrice: "$2.000", divNro: "div5"},
    { id: 6, productImg:'<img src="./images/product-5.png" class ="product-img"></img>' ,productImage: "image6", productItem: "Camisa Academlo", productColor: "Logo blanco, color negro", productPrice: "$2.000", divNro: "div6"},
    { id: 7, productImg:'<img src="./images/product-4.png" class ="product-img"></img>' ,productImage: "image7", productItem: "Sudadera Academlo", productColor: "Logo blanco, color rojo", productPrice: "$12.000", divNro: "div7"},
    { id: 8, productImg:'<img src="./images/product-6.png" class ="product-img"></img>' ,productImage: "image8", productItem: "Sudadera Academlo", productColor: "Logo negro, color gris", productPrice: "$12.000", divNro: "div8"},
    { id: 9, productImg:'<img src="./images/product-7.png" class ="product-img"></img>' ,productImage: "image9", productItem: "Camisa Academlo", productColor: "Logo rojo, color blanco", productPrice: "$2.000", divNro: "div9"},
    { id: 10, productImg:'<img src="./images/product-8.png" class ="product-img"></img>' ,productImage: "image10", productItem: "Sudadera Academlo", productColor: "Logo blanco, color negro", productPrice: "$12.000", divNro: "div10"},
    { id: 11, productImg:'<img src="./images/product-1.png" class ="product-img"></img>' ,productImage: "image11", productItem: "Sudadera Academlo", productColor: "Logo rojo, color gris", productPrice: "$12.000", divNro: "div11"},
    { id: 12, productImg:'<img src="./images/product-2.png" class ="product-img"></img>' ,productImage: "image12", productItem: "Camisa Academlo", productColor: "Logo blanco, color rojo", productPrice: "$2.000", divNro: "div12"},
    { id: 13, productImg:'<img src="./images/product-3.png" class ="product-img"></img>' ,productImage: "image13", productItem: "Sudadera Academlo", productColor: "Logo rojo, color blanco", productPrice: "$12.000", divNro: "div13"},
    { id: 14, productImg:'<img src="./images/product-4.png" class ="product-img"></img>' ,productImage: "image14", productItem: "Sudadera Academlo", productColor: "Logo blanco, color rojo", productPrice: "$12.000", divNro: "div14"},
    { id: 15, productImg:'<img src="./images/product-5.png" class ="product-img"></img>' ,productImage: "image15", productItem: "Camisa Academlo", productColor: "Logo blanco, color negro", productPrice: "$2.000", divNro: "div15"},    
]





let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || []
// let shoppingCart = []





function cardGenerator(array) {
    // 1. Generar el codigo Html que voy a poenr en la pagina
    // 2. Identificar el contenedor donde pondré mi código
    // 3. Poner mi código

    let html = ""

    for(let i = 0; i < array.length; i++){
        
        html += `

            <div class = "${array[i].divNro} col-2 card-style">
            
                <div class="product-img-div">
                    ${array[i].productImg}
                </div>
                <p>${array[i].productItem}</p>
                <p>${array[i].productColor}</p>
                <p>ID: ${array[i].id}</p>
                <span>${array[i].productPrice}</span>
                <button class="card-buttom" type="button" onclick="addCart(${array[i].id})">agregar al carrito</button>
            </div>
        
        `;
    }

    const container = document.getElementById("products-container")
    container.innerHTML = html
}


cardGenerator(product)





//-----------------------------------------------------------------------------------------------------------------------------------//

// funciones principales para callbacks.

function filter(array, cb) {
    let filteredData = [];
    for(let i = 0; i < array.length; i++) {
        let result = cb(array[i]);
        if(result) {
            filteredData.push(array[i]);
        }
    }
    return filteredData;
}

function find(array, cb) {
    for(let i=0; i<array.length; i++) {
        let result = cb(array[i]);
        if(result===true) {
            return array[i];
        }
    }
}


//-----------------------------------------------------------------------------------------------------------------------------------//





let contador = 0




function addCart (id) {


    function cbFindId (product){
        return product.id === id
    }

    let productFinded = find(product,cbFindId);

    shoppingCart.push(productFinded)

    console.log("shoppingCart")
    console.log(shoppingCart)

    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))


}











function ContadorItems() {
    contador++
    console.log(contador)
}





window.addCart = addCart
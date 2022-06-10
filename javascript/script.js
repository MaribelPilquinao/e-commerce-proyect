"use strict"

let product = [

    {productImg:'<img src="./images/product-1.png" class ="product-img"></img>',productImage: "image1", productItem: "Sudadera Academlo", productColor: "Logo rojo, color gris", productPrice: "$12.000", divNro: "div1"},
    {productImg:'<img src="./images/product-2.png" class ="product-img"></img>' ,productImage: "image2", productItem: "Camisa Academlo", productColor: "Logo blanco, color rojo", productPrice: "$2.000", divNro: "div2"},
    {productImg:'<img src="./images/product-3.png" class ="product-img"></img>' ,productImage: "image3", productItem: "Sudadera Academlo", productColor: "Logo rojo, color blanco", productPrice: "$12.000", divNro: "div3"},
    {productImg:'<img src="./images/product-4.png" class ="product-img"></img>' ,productImage: "image4", productItem: "Sudadera Academlo", productColor: "Logo blanco, color rojo", productPrice: "$12.000", divNro: "div4"},
    {productImg:'<img src="./images/product-5.png" class ="product-img"></img>' ,productImage: "image5", productItem: "Camisa Academlo", productColor: "Logo blanco, color negro", productPrice: "$2.000", divNro: "div5"},
    {productImg:'<img src="./images/product-5.png" class ="product-img"></img>' ,productImage: "image6", productItem: "Camisa Academlo", productColor: "Logo blanco, color negro", productPrice: "$2.000", divNro: "div6"},
    {productImg:'<img src="./images/product-4.png" class ="product-img"></img>' ,productImage: "image7", productItem: "Sudadera Academlo", productColor: "Logo blanco, color rojo", productPrice: "$12.000", divNro: "div7"},
    {productImg:'<img src="./images/product-6.png" class ="product-img"></img>' ,productImage: "image8", productItem: "Sudadera Academlo", productColor: "Logo negro, color gris", productPrice: "$12.000", divNro: "div8"},
    {productImg:'<img src="./images/product-7.png" class ="product-img"></img>' ,productImage: "image9", productItem: "Camisa Academlo", productColor: "Logo rojo, color blanco", productPrice: "$2.000", divNro: "div9"},
    {productImg:'<img src="./images/product-8.png" class ="product-img"></img>' ,productImage: "image10", productItem: "Sudadera Academlo", productColor: "Logo blanco, color negro", productPrice: "$12.000", divNro: "div10"},
    {productImg:'<img src="./images/product-1.png" class ="product-img"></img>' ,productImage: "image11", productItem: "Sudadera Academlo", productColor: "Logo rojo, color gris", productPrice: "$12.000", divNro: "div11"},
    {productImg:'<img src="./images/product-2.png" class ="product-img"></img>' ,productImage: "image12", productItem: "Camisa Academlo", productColor: "Logo blanco, color rojo", productPrice: "$2.000", divNro: "div12"},
    {productImg:'<img src="./images/product-3.png" class ="product-img"></img>' ,productImage: "image13", productItem: "Sudadera Academlo", productColor: "Logo rojo, color blanco", productPrice: "$12.000", divNro: "div13"},
    {productImg:'<img src="./images/product-4.png" class ="product-img"></img>' ,productImage: "image14", productItem: "Sudadera Academlo", productColor: "Logo blanco, color rojo", productPrice: "$12.000", divNro: "div14"},
    {productImg:'<img src="./images/product-5.png" class ="product-img"></img>' ,productImage: "image15", productItem: "Camisa Academlo", productColor: "Logo blanco, color negro", productPrice: "$2.000", divNro: "div15"},    
]


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
                <span>${array[i].productPrice}</span>
                <button class="card-buttom" type="button">agregar al carrito</button>
            </div>
        
        `;
    }

    const container = document.getElementById("products-container")
    console.log(container)
    console.log("hola")
    container.innerHTML = html
}




cardGenerator(product)
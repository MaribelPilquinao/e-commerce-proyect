"use strict"



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
                <p>${array[i].productImage}</p>
                <p>${array[i].productItem}</p>
                <p>${array[i].productColor}</p>
                <p>${array[i].productPrice}</p>
            </div>
        
        `;
    }

    const container = document.getElementById("products-container")
    console.log(container)
    console.log("hola")
    container.innerHTML = html
}



let product = [

    {productImg:'<img src="./images/product-1.png" class ="product-img"></img>',productImage: "image1", productItem: "productItem1", productColor: "productColor1", productPrice: "productPrice", divNro: "div1"},
    {productImg:'<img src="./images/product-2.png" class ="product-img"></img>' ,productImage: "image2", productItem: "productItem2", productColor: "productColor2", productPrice: "productPrice", divNro: "div2"},
    {productImg:'<img src="./images/product-3.png" class ="product-img"></img>' ,productImage: "image3", productItem: "productItem3", productColor: "productColor3", productPrice: "productPrice", divNro: "div3"},
    {productImg:'<img src="./images/product-4.png" class ="product-img"></img>' ,productImage: "image4", productItem: "productItem4", productColor: "productColor4", productPrice: "productPrice", divNro: "div4"},
    {productImg:'<img src="./images/product-5.png" class ="product-img"></img>' ,productImage: "image5", productItem: "productItem5", productColor: "productColor5", productPrice: "productPrice", divNro: "div5"},
    {productImg:'<img src="./images/product-5.png" class ="product-img"></img>' ,productImage: "image6", productItem: "productItem6", productColor: "productColor6", productPrice: "productPrice", divNro: "div6"},
    {productImg:'<img src="./images/product-4.png" class ="product-img"></img>' ,productImage: "image7", productItem: "productItem7", productColor: "productColor7", productPrice: "productPrice", divNro: "div7"},
    {productImg:'<img src="./images/product-6.png" class ="product-img"></img>' ,productImage: "image8", productItem: "productItem8", productColor: "productColor8", productPrice: "productPrice", divNro: "div8"},
    {productImg:'<img src="./images/product-7.png" class ="product-img"></img>' ,productImage: "image9", productItem: "productItem9", productColor: "productColor9", productPrice: "productPrice", divNro: "div9"},
    {productImg:'<img src="./images/product-8.png" class ="product-img"></img>' ,productImage: "image10", productItem: "productItem10", productColor: "productColor10", productPrice: "productPrice", divNro: "div10"},
    {productImg:'<img src="./images/product-1.png" class ="product-img"></img>' ,productImage: "image11", productItem: "productItem11", productColor: "productColor11", productPrice: "productPrice", divNro: "div11"},
    {productImg:'<img src="./images/product-2.png" class ="product-img"></img>' ,productImage: "image12", productItem: "productItem12", productColor: "productColor12", productPrice: "productPrice", divNro: "div12"},
    {productImg:'<img src="./images/product-3.png" class ="product-img"></img>' ,productImage: "image13", productItem: "productItem13", productColor: "productColor13", productPrice: "productPrice", divNro: "div13"},
    {productImg:'<img src="./images/product-4.png" class ="product-img"></img>' ,productImage: "image14", productItem: "productItem14", productColor: "productColor14", productPrice: "productPrice", divNro: "div14"},
    {productImg:'<img src="./images/product-5.png" class ="product-img"></img>' ,productImage: "image15", productItem: "productItem15", productColor: "productColor15", productPrice: "productPrice", divNro: "div15"},    
]

cardGenerator(product)
// Open a new connection, using the GET request on the URL endpoint
var request = new XMLHttpRequest()

request.open('GET', 'http://localhost/producto/src/', false)
request.onload = function () {
    // Begin accessing JSON data here
    var productos = JSON.parse(this.response)

    console.log(productos);

    if (request.status >= 1 && request.status < 400) {

        // var productos = JSON.parse(`[
        //     {
        //         "id_producto":"1",
        //         "nombre_producto":"ARROZ",
        //         "pro_descripcion":"arroz blanco",
        //         "precio":"3.00",
        //         "imagen_producto":"https://biodegradablesecuador.com/wp-content/uploads/2020/08/bolsa-papel-kraft-1.png"
        //     },
        //     {
        //         "id_producto":"2",
        //         "nombre_producto":"PAPAS",
        //         "pro_descripcion":"CHOLA",
        //         "precio":"5.00",
        //         "imagen_producto":"https://biodegradablesecuador.com/wp-content/uploads/2020/08/bolsa-papel-kraft-1.png"
        //     }]`)

        productos.forEach(element => {

            var content = document.getElementById("productos");
            var card = document.createElement("div");
            card.className = "card shadow-1-strong";
            var image = document.createElement("img");
            image.className = "card-img-top";
            image.src = element.imagen_producto;

            var bodyCard = document.createElement("div");
            bodyCard.className = "card-body text-center";
            var title = document.createElement("h5");
            title.className = "card-title font-weight-bold";
            title.textContent = element.nombre_producto;
            var selectButton = document.createElement("button");
            selectButton.className = "btn btn-info btn-sm";
            selectButton.type = "button";
            selectButton.textContent = "añadir al carrito";
            var link = document.createElement("a");
            link.className = "add-to-cart";
            link.setAttribute("data-name", element.nombre_producto);
            link.setAttribute("data-price", element.precio);
            var price = document.createElement("h5");
            price.className = "card-text lead";
            price.textContent = "$ " + element.precio;
            var span = document.createElement("span");
            price.className = "badge bg-secondary";
            var space = document.createElement("br");


            content.appendChild(card);
            card.appendChild(image);
            card.appendChild(bodyCard);
            bodyCard.appendChild(title);
            bodyCard.appendChild(price);
            price.appendChild(span);
            bodyCard.appendChild(link);
            link.appendChild(selectButton);
        });
    } else {
        console.log('error')
    }
}

request.send()
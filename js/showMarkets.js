
var request = new XMLHttpRequest()

request.open('GET', 'http://localhost/supermercado/src/', true)
request.onload = function () {
    // Begin accessing JSON data here
    var supermarket = JSON.parse(this.response)

    console.log(supermarket);

    if (request.status >= 1 && request.status < 400) {
        supermarket.forEach(element => {

            var content = document.getElementById("supermarkets");
            var card = document.createElement("div");
            card.className = "card shadow-1-strong";
            var image = document.createElement("img");
            image.className = "card-img-top";
            image.src = element.imagen_supermercado;

            var bodyCard = document.createElement("div");
            bodyCard.className = "card-body text-center";
            var title = document.createElement("h5");
            title.className = "card-title font-weight-bold";
            title.textContent = element.nombre_supermercado;
            var selectButton = document.createElement("button");
            selectButton.className = "btn btn-info btn-sm";
            selectButton.type = "button";
            selectButton.textContent = "Seleccionar";
            var link = document.createElement("a");
            link.href = 'menu.html';

            content.appendChild(card);
            card.appendChild(image);
            card.appendChild(bodyCard);
            bodyCard.appendChild(title);
            bodyCard.appendChild(link);
            link.appendChild(selectButton);
        });

    }
}
request.send()



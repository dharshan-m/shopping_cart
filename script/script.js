let getdata = () => {
    fetch(`https://fakestoreapi.com/products?limit=50`)
        .then((data) => {
            data.json()
                .then((information) => {
                    localStorage.setItem("localData", JSON.stringify(information));
                    printDetails();
                });
        });
}

let printDetails = () => {
    let info = JSON.parse(localStorage.getItem('localData'));
    let display = info.map((object) => {
        return `
        <div class="box">
            <div class="main">
            <img src=${object.image} class="image"><br>
            <h2 class="title">title : ${object.title}</h2><br>
            <h2 class="category">category : ${object.category}</h2><br>
            <h2 class="price">price : ${object.price}</h2><br>
            <h4 class="description">description : ${object.description}</h4><br>
            </div>
        </div>`
    })
    document.querySelector('.disp_container').innerHTML = display;
}


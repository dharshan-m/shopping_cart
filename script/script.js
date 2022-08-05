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
        return `<div>
        title : ${object.title}<br>
        description : ${object.description}<br>
        image : ${object.image}<br>
        category : ${object.category}<br>
        price : ${object.price}<br>
        </div>`
    })
    document.querySelector('.disp_container').innerHTML = display;
}


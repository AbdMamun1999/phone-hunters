// Get value from input field
const searchPhone = () =>{
    const searchText = document.getElementById('input-field').value
    loadPhone(searchText)
}

// get data from api search by name
const loadPhone = searchText =>{
    const url =  `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data.data))
}


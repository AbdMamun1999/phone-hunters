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
        .then(data => displayPhone(data.data))
}
//show on display search phone function
const displayPhone = phones =>{
    console.log(phones)
    const displayCardDiv = document.getElementById('display-card')
    console.log(displayCardDiv)
    phones.forEach(phone => {
        console.log(phone)
        const div = document.createElement('div');
        div.classList.add('flex')
        div.innerHTML = `
            <div class="">
                <img src="${phone.image}" alt="" class="h-full">
            </div>
            <div class="">
                <h1 class="text-xl py-3">${phone.phone_name}</h1>
                <h3 class="mb-3">${phone.brand}</h3>
                <div>
                    <button onclick="loadDetailsInfoPhone('${phone.slug}')" class="bg-yellow-400 px-4 py-2 rounded text-white">Details</button>
                </div>
            </div>
        `;
        displayCardDiv.appendChild(div)
    });
}


// by click button detail informatin of phone
const loadDetailsInfoPhone = phone =>{
    const url = `https://openapi.programming-hero.com/api/phone/${phone}`
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data.data))
}

// dispay detail function

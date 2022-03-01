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
    const TwentyPhone = phones.slice(0,20);
    console.log(TwentyPhone,'phone')
    const displayCardDiv = document.getElementById('display-card')
    console.log(displayCardDiv)
    TwentyPhone.forEach(phone => {
        // console.log(phone)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="bg-[#eeeeee] p-3">
            <div class="bg-white py-6 rounded-lg">
                <div class="">
                    <img src="${phone.image}" alt="" class="w-60 h-4/6 mx-auto">
                </div>
                <div class="text-center">
                    <h1 class="text-xl py-3">${phone.phone_name}</h1>
                    <h3 class="mb-3">${phone.brand}</h3>
                    <button onclick="loadDetailsInfoPhone('${phone.slug}')" class="bg-yellow-400 px-4 py-2 rounded text-white">Details</button>
                </div>
            </div>
        </div>
        `;
        displayCardDiv.appendChild(div)
    });
}


// by click button detail informatin of phone
const loadDetailsInfoPhone = phone =>{
    const url = `https://openapi.programming-hero.com/api/phone/${phone}`
    // console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(data => displayDetailsPhone(data.data))
}

// dispay detail function
const displayDetailsPhone = phone =>{
    const displayDetailsDiv = document.getElementById('display-details');
    const div = document.createElement('div');
    const phoneSensors = phone.mainFeatures.sensors;
    div.innerHTML =`
    <div class="container sm:w-11/12 lg:w-3/5 mx-auto bg-[#eeeeee] p-3 mt-5">
        <div class="bg-white sm:w-11/12 lg:w-3/4 mx-auto p-3">
            <div>
                <img src="${phone.image}" class="mx-auto sm:w-4/6 lg:w-1/2" alt="">
            </div> 
            <div class="w-3/4 mx-auto mt-3">
                <div>
                    <span class="text-lg font-semibold">Phone name : </span>
                    ${phone.name}
                </div>
                <div>
                    <span class="text-lg font-semibold">Brand name :</span>
                ${phone.brand}
                </div>
                <div>
                    <span class="text-lg font-semibold">Release date :</span>
                    ${phone.releaseDate?phone.releaseDate:"no release date found"}
                </div>
                <div>
                    <span class="text-lg font-semibold">Chip set :</span>
                    ${phone.mainFeatures.chipSet}
                </div>
                <div>
                    <span class="text-lg font-semibold">Display size :</span>
                    ${phone.mainFeatures.displaySize}
                </div>
                <div>
                    <span class="text-lg font-semibold">Memory :</span>
                    ${phone.mainFeatures.memory}
                </div>
                <div>
                    <span class="text-lg font-semibold">Storage :</span>
                    ${phone.mainFeatures.storage}
                </div>
                <div>
                    <span class="text-lg font-semibold">Sensors :</span>
                    ${phone.mainFeatures.sensors}
                </div>
                <div>
                    <span class="text-lg font-semibold">WLAN :</span>
                    ${phone.others?.WLAN?phone.others.WLAN:"No data"}
                </div>
                <div>
                    <span class="text-lg font-semibold">Bluetooth :</span>
                    ${phone.others?.Bluetooth?phone.others.Bluetooth:"No data found"}
                </div>
                <div>
                    <span class="text-lg font-semibold">GPS :</span>
                    ${phone.others?.GPS?phone.others.GPS:"No data found"}
                </div>
                <div>
                    <span class="text-lg font-semibold">GPS :</span>
                    ${phone.others?.USB?phone.others.USB:"No data found"}
                </div>
                <div>
                    <span class="text-lg font-semibold">Radio :</span>
                    <span id="radio">${phone.others?.Radio?phone.others.Radio:"No data found"}</span>
                </div>
                <div>
                    <span class="text-lg font-semibold">NFC :</span>
                    ${phone.others?.NFC?phone.others.NFC:'No data found'}
                </div>
            </div>
        </div>
    </div>
        `;
    displayDetailsDiv.appendChild(div)
}
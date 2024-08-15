
let photos_lists = document.getElementById("photos_lists");
let pagination = document.getElementById("pagination");
let photos = [];
let current_page = 1;
let user_per_page = 4;
let limit = document.getElementById("limit")
let btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    console.log("salom");
    
})

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("prev").addEventListener("click", function(){
        if (current_page !== 1) {
            current_page--;
        }
        getPhotos();
    });
    document.getElementById("next").addEventListener("click", function(){
        current_page++;
        getPhotos();
    });
    getPhotos();
});

async function getPhotos(){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${current_page}&_limit=${user_per_page}`);
        photos = await response.json();
        displayPhotos();
    } catch (error) {
        console.error("Xato:", error);
    }
}

function displayPhotos(){
    photos_lists.innerHTML = "";
    photos.forEach(item => {
        let col = document.createElement("div");
        col.className = "col-md-3 my-2";
        col.innerHTML = `
        <div class="card">
            <div class="card-body">
                <img src="${item.url}" alt="${item.title}" class="w-100 h-100"/>
            </div>
            <div class="card-footer">
                <p class="text-center">${item.title}</p>
            </div>
        </div>
        `;
        photos_lists.appendChild(col);
    });
}



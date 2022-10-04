// SIDENAV SIDENAV SIDENAV SIDENAV SIDENAV SIDENAV  SIDENAV SIDENAV SIDENAV SID
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;


function openNav() {
    sidenav.classList.add("active");
}


function closeNav() {
    sidenav.classList.remove("active");
}



// SLIDER SLIDER SLIDER SLIDER SLIDER SLIDER SLIDER 


// FERME LES YEUX ET TU VERRAS UN CODE JS VANILLA PARFAIT POUR UN CARROUSSEL 














// INFINITE SCROLL INFINITE SCROLL INFINITE SCROLL INFINITE SCROLL

// On observe l'arrivée DU FOOTER ET à 80% de son apparition on crée 2 div (cars) avec contenu dans l'HTML 

const carsContainer = document.querySelector(".cars-container");
const watcher = document.querySelector("footer");


const addContent = () => {

    for(let i = 0; i < 2; i++) {
    const cars = document.createElement("div");
        cars.className = "cars";
        cars.innerHTML = `<img src="./img/vehicule1.png" alt="">

                        <div class="describe">
                            <h2>Peugeot 208</h2>
                            <p>Diesel, 5 portes,GPS, Autoradio, Forfait 1000km (0.5 par Km supplémentaire) </p>
                            <p>999€ - Agence de Paris</p>
                            <button>Réserver et payer</button>
                        </div>

                        <hr>`
    
    carsContainer.append(cars);
    }
}


const handleIntersection = entries => {
    if (entries[0].isIntersecting){
        addContent();
    }
}

let options = {
    root: null,
    rootMargins: "0px",
    threshold: 0.8
};

new IntersectionObserver(handleIntersection, options).observe(watcher);



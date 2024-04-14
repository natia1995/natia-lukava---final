const mercuty = document.querySelector(".MERCURY");
const venus = document.querySelector(".VENUS");
const earth = document.querySelector(".EARTH");
const mars = document.querySelector(".MARS");
const jupiter = document.querySelector(".JUPITER");
const saturn = document.querySelector(".SATURN");
const uranus = document.querySelector(".URANUS");
const neptun = document.querySelector(".NEPTUNE");


var co1 = document.querySelector(".co1");
var co2 = document.querySelector(".co2");
var co3 = document.querySelector(".co3");
var co4 = document.querySelector(".co4");
var co5 = document.querySelector(".co5");
var co6 = document.querySelector(".co6");
var co7 = document.querySelector(".co7");
var co8 = document.querySelector(".co8");




var planetsFoto = document.querySelector(".planets-foto");
var planetName = document.querySelector(".planet-name");
var planetsInfo = document.querySelector(".planets-info");

var overview = document.querySelector(".overview");
var structure = document.querySelector(".structure");
var geology = document.querySelector(".geology");


var number1 = document.querySelector(".number1");
var number2 = document.querySelector(".number2");
var number3 = document.querySelector(".number3");
var number4 = document.querySelector(".number4");


const getPlanets = async (planetsName = "Mercury") => {
const response = await fetch(`https://planets-api.vercel.app/api/v1/planets/${planetsName}`);
const data = await response.json();

        
        number1.textContent = data.rotation;
        number2.textContent = data.revolution;
        number3.textContent = data.radius;
        number4.textContent = data.temperature;
        planetName.textContent = data.name.toUpperCase();
        planetsInfo.innerHTML = `
        <p class="planet-info-text">"${data.overview.content}"</p>
        <p class="source">Source : <a class="sourceA" href="${data.overview.source}"><u>Wikipedia</u></a></p>`
        planetsFoto.innerHTML = `<img class="foto1" src= "${data.images.planet}" />`;
    
        console.log(data)

    }

    getPlanets();



    mercuty.addEventListener ("click", () => {
        getPlanets("Mercury"); 
        co1.style.background = "#419EBB"; 
        co2.style.background = ""; 
        co3.style.background = "";
        co4.style.background = "";
        co5.style.background = "";
        co6.style.background = "";
        co7.style.background = "";
        co8.style.background = "";   
    });
    venus.addEventListener ("click", () => {
        getPlanets("Venus"); 
        co1.style.background = ""; 
        co2.style.background = "#F7CC7F"; 
        co3.style.background = "";
        co4.style.background = "";
        co5.style.background = "";
        co6.style.background = "";
        co7.style.background = "";
        co8.style.background = "";  
    });
    earth.addEventListener ("click", () => {
        getPlanets("Earth");      
        co1.style.background = ""; 
        co2.style.background = ""; 
        co3.style.background = "#545BFE";
        co4.style.background = "";
        co5.style.background = "";
        co6.style.background = "";
        co7.style.background = "";
        co8.style.background = "";  
    });
    mars.addEventListener ("click", () => {
        getPlanets("Mars");        
        co1.style.background = ""; 
        co2.style.background = ""; 
        co3.style.background = "";
        co4.style.background = "#FF6A45";
        co5.style.background = "";
        co6.style.background = "";
        co7.style.background = "";
        co8.style.background = "";  
    });
    jupiter.addEventListener ("click", () => {
        getPlanets("Jupiter");       
        co1.style.background = ""; 
        co2.style.background = ""; 
        co3.style.background = "";
        co4.style.background = "";
        co5.style.background = "#ECAD7A";
        co6.style.background = "";
        co7.style.background = "";
        co8.style.background = "";  
    });
    saturn.addEventListener ("click", () => {
        getPlanets("Saturn");      
        co1.style.background = ""; 
        co2.style.background = ""; 
        co3.style.background = "";
        co4.style.background = "";
        co5.style.background = "";
        co6.style.background = "#FCCB6B";
        co7.style.background = "";
        co8.style.background = "";  
    });
    uranus.addEventListener ("click", () => {
        getPlanets("Uranus");   
        co1.style.background = ""; 
        co2.style.background = ""; 
        co3.style.background = "";
        co4.style.background = "";
        co5.style.background = "";
        co6.style.background = "";
        co7.style.background = "#65F0D5";
        co8.style.background = "";    
    });
    neptun.addEventListener ("click", () => {
        getPlanets("Neptune");
        co1.style.background = ""; 
        co2.style.background = ""; 
        co3.style.background = "";
        co4.style.background = "";
        co5.style.background = "";
        co6.style.background = "";
        co7.style.background = "";
        co8.style.background = "#497EFA";        
    });


    
            
            // geology.addEventListener ("click", () => {
            // planetsFoto.innerHTML = `<img class="foto2" src= "${data.images.geology}" />`;
            // planetsInfo.innerHTML = 
            // `<p class="planet-info-text">"${data.geology.content}"</p>
            // <p class="source">Source : <a class="sourceA" href="${data.geology.source}"><u>Wikipedia</u></a></p>` 
    
            // });
            // overview.addEventListener ("click", () => {
            // planetsFoto.innerHTML = `<img class="foto1" src= "${data.images.planet}" />`;
            // planetsInfo.innerHTML = 
            // `<p class="planet-info-text">"${data.overview.content}"</p>
            // <p class="source">Source : <a class="sourceA" href="${data.overview.source}"><u>Wikipedia</u></a></p>`
    
            // });

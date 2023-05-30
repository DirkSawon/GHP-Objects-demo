
import { contentJSON } from "./data.js";

const dataObj = JSON.parse(contentJSON);
// console.log(dataObj);
// console.log(Object.entries(dataObj));

const sections = [
    document.querySelector("#s1"), 
    document.querySelector("#s2"),
    document.querySelector("#s3"),
    document.querySelector("#s4"), 
    document.querySelector("#s5"),
    document.querySelector("#s6")
];


/* 
function toggleVis(string) {
    if(string === "hide") {
        sections.forEach(x => x.setAttribute("hidden", ""));
    }
    else if (string === "show") {
        sections.forEach(x => x.removeAttribute("hidden"));
    }
}

toggleVis("hide"); */
//toggleVis("show");
const headings = document.getElementsByClassName('mt-1');

for (let i = 0; i < headings.length; i++) {
    headings[i].style.cursor = "pointer";
    headings[i].style.width = "200px";
    //headings[i].style.marginRight = "100px";
}


    
            

Object.entries(dataObj).forEach((entryCards) => {
    // step 1
    // console.log(entryCards);
    
    // step 2
    // console.log(sections);
    entryCards[1].map(card => {
        //console.log(card);
        sections.forEach(section => {
            if(card.type === section.id) {
                let cardInfo = `
                    <div class="card m-3">
                        <img src=${card.image} class="card-img-top" alt=${card.title} height="auto" width="640px"/>
                        <div class="card-body">
                            <h4>${card.title}</h4>
                            <h6>${card.author}</h6>
                            <h6>${card.description}</h6>
                            <p>Categories: ${card.categories.join(", ")}</p>
                        </div>
                    </div>
                `;
                //section.innerHTML = cardInfo;
                section.insertAdjacentHTML("afterbegin", cardInfo);
            }
        })
    });
    
});

let sectionsClassNames = "";
let cardsClassNames = "";
let cards = document.getElementsByClassName("m-3");

for (let i = 0; i < sections.length; i++) {
    //sections[i].style.display = "none";
    //sectionsClassNames = sections[i].getAttribute("class");
    //sectionsClassNames += " visually-hidden";
    cardsClassNames = cards[i].getAttribute("class");
    cardsClassNames += " visually-hidden";
    
    //console.log(sectionsClassNames);
    //sections[i].setAttribute("class", sectionsClassNames);
    
    cards[i].setAttribute("class", cardsClassNames);
}


//console.log(cards);

for(let i = 0; i < headings.length; i++) {
    headings[i].addEventListener('click', () => {
        let toggle = false;        
            //console.log(cards[i].getAttribute("class"));
            if(cards[i].getAttribute("class").includes("visually-hidden") === false) {
                //if (sections[i].getAttribute("class").includes("visually-hidden") === false) {
                    cardsClassNames = cards[i].getAttribute("class");
                    cardsClassNames += " visually-hidden";
                    cards[i].setAttribute("class", cardsClassNames);
                    //if (sections[i].style.display === "none") {
                        //sections[i].style.display = "flex";
                        //for(let j = 0; j < sections.length; j++) {    
                            //sections[i].setAttribute("hidden", "");
                            //sectionsClassNames = sections[i].getAttribute("class");
                    //sectionsClassNames += " visually-hidden";
                    //console.log(sectionsClassNames);
                    //sections[i].setAttribute("class", sectionsClassNames);
                    //sectionsClassNames = "";

                //}
            }

            else if(cards[i].getAttribute("class").includes("visually-hidden") === true) {    
            //else if (sections[i].getAttribute("class").includes("visually-hidden") === true) {
            //else if (sections[i].style.display === "flex") {
                cardsClassNames = cards[i].getAttribute("class");
                cardsClassNames = cardsClassNames.replace(" visually-hidden", "");
                cards[i].setAttribute("class", cardsClassNames);
                //sections[i].style.display = "none";
                //for(let j = 0; j < sections.length; j++) {
                    //sections[i].removeAttribute("hidden");
                    //sectionsClassNames = sections[i].getAttribute("class");
                    //sectionsClassNames = sectionsClassNames.replace(" visually-hidden", "");
                    //console.log(sectionsClassNames);
                    //sections[i].setAttribute("class", sectionsClassNames);
                    //sectionsClassNames = "";
                //}
            }
        });
}


//toggleVis("hide");
//toggleVis("show");

// Object.keys(obj); // Schlüssel 
// Object.values(obj); // Schlüsselwerte
// Object.entries(obj); // ganze Elemente




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

function toggleVis(string) {
    if(string === "hide") {
        sections.forEach(x => x.setAttribute("hidden", ""));
    }
    else if (string === "show") {
        sections.forEach(x => x.removeAttribute("hidden"));
    }
}

toggleVis("hide");
//toggleVis("show");
const headings = document.getElementsByClassName('mt-1');

for(let i = 0; i < headings.length; i++) {
    headings[i].addEventListener('click', () => {
        let toggle = false;
                
            if (sections[i].hasAttribute("hidden") === false) {
                //for(let j = 0; j < sections.length; j++) {    
                    sections[i].setAttribute("hidden", "");
                //}
            }

            else if (sections[i].hasAttribute("hidden") === true) {
                //for(let j = 0; j < sections.length; j++) {
                    sections[i].removeAttribute("hidden");
                //}
            }
        });
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

//toggleVis("hide");
//toggleVis("show");

// Object.keys(obj); // Schlüssel 
// Object.values(obj); // Schlüsselwerte
// Object.entries(obj); // ganze Elemente




import { contentJSON } from "./data.js";

const dataObj = JSON.parse(contentJSON);
// console.log(dataObj);
// console.log(Object.entries(dataObj));

Object.entries(dataObj).forEach((entryCards) => {
    // step 1
    console.log(entryCards);
    const sections = [
        document.querySelector("#outdoor"), 
        document.querySelector("#nature"),
        document.querySelector("#plant"),
        document.querySelector("#tree"), 
        document.querySelector("#mountain"),
        document.querySelector("#road")
    ];
    // step 2
    console.log(sections);
    entryCards[1].map(card => {
        console.log(card);
        sections.forEach(section => {
            if(card.type === section.id) {
                let cardInfo = `
                    <div class="card m-3">
                        <img src=${card.image} class="card-img-top" alt=${card.title} height="auto" width="auto"/>
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

// Object.keys(obj); // Schlüssel 
// Object.values(obj); // Schlüsselwerte
// Object.entries(obj); // ganze Elemente



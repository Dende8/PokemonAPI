import { fetchList } from '../api/call-to-api-list';
import { fetchDetail } from '../api/call-to-api-detail';

// let pokemonImage = "";
// let pokemonOrder = "";
// let pokemonName = "";
// let pokemonHp = "";
// let pokemonExp = "";
// let pokemonAtt = "";
// let pokemonDef = "";
// let pokemonAbilities = "";
// let pokemonTypes = "";

let index = 0;

const leftArrow = document.querySelector(".leftArrow__img");
const rightArrow = document.querySelector(".rightArrow__img");

rightArrow.addEventListener('click', rightNavigation);
leftArrow.addEventListener('click', leftNavigation);

function displayArrows(){
    if (index === 0){
        leftArrow.classList.add('hidden__arrow');
    }else if (index > 0 && index < 150){
        leftArrow.classList.remove('hidden__arrow');
        rightArrow.classList.remove('hidden__arrow');
    }else if (index === 150){
        rightArrow.classList.add('hidden__arrow');
    }    
}

function leftNavigation(){
    if (index > 0) {
        index --;
        displayArrows();
    }else if (index === 1){
        displayArrows();
    }
    printData();
}

function rightNavigation(){
    if (index < 150) {
        index++;
        displayArrows();
    }else if (index === 149){
        displayArrows();
    }
    printData();
}

function printData () {

    fetchList(0, 150).then((pokemon) => {

            fetchDetail(pokemon.name[index]).then((pokemonDetail) => {
                
                let pokemonImage = document.querySelector(".big__cardImg");
                pokemonImage.src = pokemonDetail.img;
                pokemonImage.alt = `${pokemonDetail.name} Image`;

                let pokemonOrder = document.querySelector(".bigCardCaption__style");
                pokemonOrder.innerHTML = `#${pokemonDetail.order}`;

                let pokemonName = document.querySelector(".name__value");
                pokemonName.innerHTML = pokemonDetail.name.toUpperCase();

                let pokemonHp = document.querySelector("#hp");
                pokemonHp.innerHTML = pokemonDetail.hp;

                let pokemonExp = document.querySelector("#exp");
                pokemonExp.innerHTML = pokemonDetail.base_experience;

                let pokemonAtt = document.querySelector("#att");
                pokemonAtt.innerHTML = pokemonDetail.attack;

                let pokemonDef = document.querySelector("#def");
                pokemonDef.innerHTML = pokemonDetail.defense;

                let pokemonAbilities = document.querySelector("#abilities");
                pokemonAbilities.innerHTML = pokemonDetail.abilities

                let pokemonTypes = document.querySelector("#types");
                pokemonTypes.innerHTML = pokemonDetail.types;

            }).catch((err) => { console.log(err); });

    }).catch((err) => { console.log(err); });  
}

export { printData };

export { displayArrows };

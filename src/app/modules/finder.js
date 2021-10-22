import { fetchList } from '../api/call-to-api-list';
import { fetchDetail } from '../api/call-to-api-detail';

const findButton = document.querySelector(".numeral__text");

let pokemonFind = document.querySelector("#inputText");

findButton.addEventListener('click', find);

function find() {

    fetchList(0, 150).then((pokemon) => {
        
        for (let key of pokemon.name) {
            if (pokemonFind.value === key) {
                
                fetchDetail(key).then((pokemonDetail) => {

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
            }
        }     

    }).catch((err) => { console.log(err); });
}

export { find };
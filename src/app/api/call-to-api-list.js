const fetchList = async (offset, limit) => {
    const apiLink = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}/`;
    
    const listRequest = await fetch(apiLink).catch((err) => { console.log(err)});

    if (listRequest.status !== 200) {
        return Promise.reject;
    }

    const listAnswer = await listRequest.json();

    const listData = {
        name: listAnswer.results.map((pokemon) => {
            return pokemon.name;
        }),
    }
    // let myPokemonNamesArray = [];
    
    // listData.name.forEach(function(element){
    //     myPokemonNamesArray.push(element);
    // });
    
    return listData;
    
};

export {fetchList};
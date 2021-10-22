const fetchDetail = async (id) => {
    const apiLink = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    
    const detailRequest = await fetch(apiLink).catch((err) => console.log(err));

    if (detailRequest.status !== 200) {
        return Promise.reject;
    }

    const detailAnswer = await detailRequest.json();

    const { name, order, stats, base_experience, types, abilities, sprites} = detailAnswer;

    let pokemonDetail = {
        name,
        order,
        hp: stats[0].base_stat,
        base_experience,
        attack : stats[1].base_stat,
        defense: stats[2].base_stat,
        types: types.map((element) => element.type.name).join(", "),
        abilities: abilities.map((element) => element.ability.name).join(", "),
        img: sprites.other.dream_world.front_default,
    };
    return pokemonDetail;
}

export {fetchDetail};
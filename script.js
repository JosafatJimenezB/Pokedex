const fetchPokemon = () => {
    
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
        }
        else {
            return res.json();
        }

    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeNombre = data.name;
            nombrePokemon(pokeNombre);

            let pokeNumero = data.id;
            idPokemon(pokeNumero);

            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
        }
    });
}

const pokeImage = (url) => {

    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}


const nombrePokemon = (url) => {
    const pokeNombr = document.getElementById('pokeNombre');
    pokeNombr.innerHTML = url;
}

const idPokemon = (url) => {
    const pokeNum = document.getElementById('pokeId');
    pokeNum.innerHTML = "#"+ url;
}


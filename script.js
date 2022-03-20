const fetchPokemon = () => {
    
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Oops...',
                text: 'El pokemon que ingresaste no pudo ser encontrado!'
              })
        }
        else {
            return res.json();
        }

    }).then((data) => {
        if (data) {
            console.log(data);

            /Npmbre del pokemon/ 
            let pokeNombre = data.name;
            nombrePokemon(pokeNombre);

            /tipo de pokemon/ 
            let pokeTyp = data.types[0].type.name;
            tipoPokemon(pokeTyp);  

            /id del pokemon/ 
            let pokeNumero = data.id;
            idPokemon(pokeNumero);

            /imagen del pokemon/ 
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);

            /stats del pokemon/
            let hp = data.stats[0].base_stat;
            vidaPokemon(hp);
            let atack = data.stats[1].base_stat;
            ataquePokemon(atack);
            let defense = data.stats[2].base_stat;
            defensaPokemon(defense);

            let specialAttack = data.stats[3].base_stat;
            ataqueEspecialPokemon(specialAttack);
            
            let specialDefense = data.stats[4].base_stat;
            defensaEspecialPokemon(specialDefense);

            let Velocity = data.stats[5].base_stat;
            velocidadPokemon(Velocity);



            /-----------Peso y altura-----------/
            let peso = data.weight;
            pesoPokemon(peso);

            let altura = data.height;
            altuPokemon(altura);
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

const tipoPokemon = (url) => {
    const pokeType = document.getElementById('tipo-pokemon');
    pokeType.innerHTML = 'type: '+ url;
}

const idPokemon = (url) => {
    const pokeNum = document.getElementById('pokeId');
    pokeNum.innerHTML = "#"+ url;
}


                    /----stats del pokemon----/ 

const vidaPokemon = (url) => {
    const pokeVida = document.getElementById('hp');
    pokeVida.innerHTML = 'Hp: ............... '+ url;
}

const ataquePokemon = (url) => {
    const pokeAtaque = document.getElementById('attack');
    pokeAtaque.innerHTML = 'Attack: ........... ' + url;
}

const defensaPokemon = (url) => {
    const pokeDefiende = document.getElementById('defense');
    pokeDefiende.innerHTML = 'Defense: .......... ' + url;
}

const ataqueEspecialPokemon = (url) => {
    const pokeAtaque = document.getElementById('special-attack');
    pokeAtaque.innerHTML = 'Special-Attack: ... ' + url;
}

const defensaEspecialPokemon = (url) => {
    const pokedef = document.getElementById('special-defense');
    pokedef.innerHTML = 'Special-Defense: .. ' + url;
}

const velocidadPokemon = (url) => {
    const pokeVelo = document.getElementById('speed');
    pokeVelo.innerHTML = 'Speed: ............ ' + url;
}


/----------Peso y altura del pokemon------------/ 

const pesoPokemon = (url) => {
    let pesoConvertido = url /10;
    const pokePeso = document.getElementById('pesoPokemon');
    pokePeso.innerHTML = pesoConvertido + ' kg';
}

const altuPokemon = (url) => {
    let alturaConver = url / 10;
    const pokeAltu = document.getElementById('alturaPokemon');
    pokeAltu.innerHTML = alturaConver + ' m';
}










/-------animacion solo de inicio---------/
const element = document.querySelector('#pokeImg')
element.classList.add('animate__animated', 'animate__fadeInDown')

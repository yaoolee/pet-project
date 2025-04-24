var pokedex = {
    Charizard: {
      type: 'fire',
      height: "5'07\"",
      weight: '199.5 lbs',
      abilities: 'Blaze',
      weaknesses: ['Water','Electric'],
      img: './images/pokemon/full size/fire/charizard.jpg'
    },
    Moltres: {
      type: 'fire',
      height: "6'07\"",
      weight: '132.3 lbs',
      abilities: 'Pressure',
      weaknesses: ['Water','Electric'],
      img: './images/pokemon/full size/fire/moltres.png'
    },
    Flareon: {
        type: 'fire',
        height: "2'11\"",
        weight: '55.1 lbs',
        abilities: 'Flash Fire',
        weaknesses: ['Water','Electric'],
        img: './images/pokemon/full size/fire/flareon.png'
      },
      Charmander: {
        type: 'fire',
        height: "2'07\"",
        weight: '18.5 lbs',
        abilities: 'Blaze',
        weaknesses: ['Water','Electric'],
        img: './images/pokemon/full size/fire/charmander.png'
      },
      Vaporeon: {
        type: 'water',
        height: "3'07\"",
        weight: '63.9 lbs',
        abilities: 'Water Absorb',
        weaknesses: ['Grass','Electric'],
        img: './images/pokemon/full size/water/vaporeon.png'
      },
      Lapras: {
        type: 'water',
        height: "8'02\"",
        weight: '485 lbs',
        abilities: 'Shell armor',
        weaknesses: ['Grass','Electric'],
        img: './images/pokemon/full size/water/lapras.png'
      },
      Blastoise: {
        type: 'water',
        height: "5'07\"",
        weight: '188.5 lbs',
        abilities: 'Torrent',
        weaknesses: ['Grass','Electric'],
        img: './images/pokemon/full size/water/blastoise.png'
      },
      Squirtle: {
        type: 'water',
        height: "1'08\"",
        weight: '19.8 lbs',
        abilities: 'Torrent',
        weaknesses: ['Grass','Electric'],
        img: './images/pokemon/full size/water/squirtle.png'
      },
      Exeggutor: {
        type: 'grass',
        height: "6'08\"",
        weight: '264.8 lbs',
        abilities: 'Chlorophyll',
        weaknesses: ['Ice','Fire'],
        img: './images/pokemon/full size/grass/exeggutor.png'
      },
      Bayleef: {
        type: 'grass',
        height: "3'11\"",
        weight: '34.8 lbs',
        abilities: 'Overgrow',
        weaknesses: ['Ice','Fire'],
        img: './images/pokemon/full size/grass/bayleef.png'
      },
      Chikorita: {
        type: 'grass',
        height: "2'11\"",
        weight: '14.1 lbs',
        abilities: 'Overgrow',
        weaknesses: ['Ice','Fire'],
        img: './images/pokemon/full size/grass/chikorita.png'
      },
      Bulbasaur: {
        type: 'grass',
        height: "2'04\"",
        weight: '15.2 lbs',
        abilities: 'Overgrow',
        weaknesses: ['Ice','Fire'],
        img: './images/pokemon/full size/grass/bulbasaur.png'
      },
      Zapdos: {
        type: 'electric',
        height: "5'04\"",
        weight: '116 lbs',
        abilities: 'Pressure',
        weaknesses: ['Ice','Water'],
        img: './images/pokemon/full size/electric/zapdos.png'
      },
      Jolteon: {
        type: 'electric',
        height: "2'07\"",
        weight: '54 lbs',
        abilities: 'Volt Absorb',
        weaknesses: ['Water'],
        img: './images/pokemon/full size/electric/jolteon.png'
      },
      Raikou: {
        type: 'electric',
        height: "6'03\"",
        weight: '392 lbs',
        abilities: 'Pressure',
        weaknesses: ['Water'],
        img: './images/pokemon/full size/electric/raikou.png'
      },
      Pikachu: {
        type: 'electric',
        height: "1'04\"",
        weight: '13.2 lbs',
        abilities: 'Static',
        weaknesses: ['Water'],
        img: './images/pokemon/full size/electric/pikachu.png'
      },
    
  };
  
  // 2) read ?name= from URL
  var params = new URLSearchParams(location.search);
  var name   = params.get('name');
  var data   = pokedex[name] || {};
  
  // 3) render into the card
  var detail = document.getElementById('detailCard');
  document.body.classList.add(data.type);
  detailCard.classList.add(data.type);
  detail.innerHTML += `
    <div class="img-wrap">
      <img src="${data.img}" alt="${name}">
    </div>
    <div class="stats">
      <h2>${name}</h2>
      <p>Height: ${data.height}</p>
      <p>Weight: ${data.weight}</p>
      <p>Abilities: ${data.abilities}</p>
    </div>
    <div class="weaknesses">
    <span class="weakness-label">Weaknesses:</span>
      ${data.weaknesses
        .map(w => `<div class="badge ${w}">${w}</div>`)
        .join('')} 
    </div>
  `;
  
  // 4) back button
  document.getElementById('goBack')
    .addEventListener('click', () => history.back());
  
import "core-js";
import "regenerator-runtime/runtime";

import Character from "./character";
import { getCharacters } from "./character_service";

async function loadCharacters() {
    let characters = []
    let charactersJSON = await getCharacters()
    charactersJSON.forEach(character => {
        const newCharacter = new Character(
            character["id"], character["name"], character["status"],
            character["species"], character["type"], character["gender"]
        )
        characters.push(newCharacter)
    })
    renderCaracters(characters)
}

function renderCaracters(characters) {
    const ulElement = document.getElementById("caracters-list")
    characters.forEach(character => {
        const liElement = document.createElement("li")
        const text = `${character.name} | ${character.status} | ${character.species} | ${character.type} | ${character.gender}`
        liElement.innerText = text
        ulElement.appendChild(liElement)
    })
}

loadCharacters()


import fs from "fs";

export default class Orkestrar{
  #orkesterLista;
  constructor() {
    this.#fetchOrkesterData()
  }
  
  #fetchOrkesterData() {
    const data = fs.readFileSync("orkestrar.json")
    this.#orkesterLista = JSON.parse(data)
}

  skrivUtOrkestrar() {
    for (let i = 0; i < this.#orkesterLista.length; i++) {
      this.#orkesterLista[i].name;
    }
  }
  addOrkesterToList(name) {
    this.#orkesterLista.push(new Orkester(name))
  }
}
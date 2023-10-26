export default class Orkester {
  #namn;
  #infoTextBand;
  #addedIn;

  constructor(name, infoTextBand, addedIn = false) {
    this.#namn = name;
    this.#infoTextBand = infoTextBand;
    this.#addedIn = addedIn;
  }

  get name() {
    return this.#namn;
  }

  get infoTextBand() {
    return this.#infoTextBand;
  }
  get addedIn() {
    return this.#addedIn;
  }

  set name(newName) {
    this.#namn = newName
  }

  set infoText(newInfo) {
    this.#infoTextBand = newInfo
  }

  addIn() {
    this.#addedIn = true;
  }

  addOut() {
    this.#addedIn = false;
  }



  // checkInAndOut() {
  //   this.#checkedIn = !this.#checkedIn;
  // }

}

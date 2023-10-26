import PromptSync from "prompt-sync";
import Orkester from "./orkester.js";
const prompt = PromptSync({ sigint: true })
const hundLista = new Orkester()

meny()

function meny() {
  let run = true

  while (run) {
    console.log(`Meny

          1. Lägg till en orkester.
          2. Visa orkestrar
          3. Ta bort en orkester.
          A. Avsluta.
          
          `);

    const val = prompt("Val: ")

    switch (val.trim().toUpperCase()) {
      case "1":
        orkesterLista.addOrkesterToList(prompt("Skriv in namnet på orkestern: "));
        break;

      case "2":
        wiewBand();
        break;

      case "3":
        expireBand();
        break;

      case "A":
        console.log("Programmet avslutas!");
        run = false
        break;

      default:
        console.log(`
        Gör ett val från menyn: 1, 2 eller A: -> `);
    }
  }

}

//------------------Funktioner-----------------

function addBand() {
  console.log("Lägg till en orkester: ");
}

function wiewBand() {
  console.log("Visa orkestrar: ");
}

function expireBand() {
  console.log("Tag bort en orkester: ");
}









/*
import PromptSync from "prompt-sync";
import Hundar from "./dogs.js";

const prompt = PromptSync({ sigint: true });
const hundLista = new Hundar();

let run = true;
while (run) {
  console.log(`

  Meny!

1. Lägg till musikgrupp.
2. Ta bort musikgrupp.
3. Lägg till ny musiker.
4. Radera musiker.
A. Avsluta programmet. `
  
  )

  const val = prompt("Välj från menyn: ");

  switch (val.trim().toUpperCase()) {
    case "1":
      hundLista.addDogToList(prompt("Vilken grupp vill du lägga till? -> "));
      break;
    case "2":
      checkMeny();
      break;
    case "3":
      removeDog();
      break;
    case "4":
      hundLista.skrivUtHundar();
      break;
    case "A":
      console.log("Programmet avslutas!");
      run = false;
      break;
    default:
      console.log("Du måste välja mellan 1 - 4 eller A!");
  }
}

*/

/* ------- BANDET -------
Namn
Infotext
Årtal bandet bildades
Årtal bandet upplöstes för band som inte finns längre
Lista över medlemmar och vilket år de gick med i bandet samt vilket / vilka instrument de spelade i bandet
Lista över tidigare medlemmar med samma info per musiker som för nuvarande medlemmar samt vilket år musiker lämnade bandet

-------- MUSIKERN --------
Namn
Infotext
Födelseår
Lista över band musikern är med
Lista över tidigare band musiker varit med i
Vilka instrument som musiker spelar 

-------- VAD PROGRAMMET SKA KUNNA GÖRA ------

1. Skapa ny orkester
2. Ta bort orkester


1. Det ska gå att skapa ett nytt band.
2. Det ska gå att ta bort band.
3. Det ska gå att skapa nya musiker.
4. Det ska gå att ta bort musiker.

Det ska gå att lägga till/ta bort en musiker till ett band, då ska även musikers lista över vilka band hen är med i uppdateras.

Det ska gå att lägga till/ta bort ett band från en musiker, då ska även bandets lista över medlemmar uppdateras.

En musiker ska kunna vara med i flera band (noll till flera)

Ett band ska kunna ha en till flera medlemmar

Det ska gå att visa information om en musiker, inklusive vilka band hen är med i. Musikerns ålder ska räknas ut och visas upp utifrån hens födelseår.

Det ska gå att visa information om ett band, inklusive vilka musiker som finns med i det.

Programmet ska vara skrivet objektorienterat, dvs. uppdelat i olika klasser. Arv och/eller komposition ska användas på ett bra sätt.

Programmet ska hantera felaktiga användarval och använda felmeddelanden.




-----------  VG-krav ---------
• Samtliga G-krav
• Menysystemet för att göra olika val och inmatningar ska vara logiskt, konsekvent och lätt att navigera.
• Programmet ska aldrig kunna krascha p.g.a. felaktiga användarval.
• Historikdel: När en musiker tas bort ur ett band (eller ett band tas bort från en musiker) ska perioden hen var med i bandet fortfarande kommas ihåg och hen ska hamna i bandets lista över tidigare medlemmar, samt bandet ska hamna i musikers lista över tidigare band hen var med i.
*/
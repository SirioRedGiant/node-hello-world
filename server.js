console.log("Hello Oiris");

const myName = process.argv[2] || "World";
console.log(`Hello ${myName}`);

const arrayDeiComandi = process.argv;
const valoreInserito = arrayDeiComandi[2];

if (!valoreInserito) {
  console.log("Per favore, inserisci un argomento dopo il comando!");
} else {
  if (isNaN(valoreInserito)) {
    console.log(`L'argomento '${valoreInserito}' non è un numero`);
  } else {
    console.log(
      `Attenzione: '${valoreInserito}' è un numero. Mi serve una parola!`,
    );
  }
}

const DNA = (dna) => {
  if (typeof dna === "string") {
    let cadena = dna.split("");
    let newCad = [];
    let i = 0;

    for (i = 0; i < cadena.length; i++) {
      if (dna.indexOf(cadena[i]) === dna.lastIndexOf(cadena[i])) {
        newCad.push(cadena[i]);
      }
    }
    return newCad;
  } else return "no viable";
};

module.exports = DNA;

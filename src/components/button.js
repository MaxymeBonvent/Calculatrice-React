import {useContext} from "react";
import {CalcContext} from "../context/CalcContext.js";

const getStyleName = bouton => {

  const className = {
    "=":"égal",
    "+":"opération",
    "-":"opération",
    "x":"opération",
    "/":"opération"
  }
  return className[bouton]
}

const Button = ({value}) => {
  const {calc, setCalc} = useContext(CalcContext);

  // Clique sur la virgule
  const commaClick = () => {
    setCalc({
      ...calc,

      // S'il n'y a pas de virgule, en mettre une, sinon ne rien ajouter
      nombre : !calc.nombre.toString().includes(".") ? calc.nombre + value : calc.nombre
    })

    console.log("Virgule cliqué.");
  }

  // Clique sur C
  const resetClick = () => {
    setCalc({signe: "", nombre: 0, resultat: 0})

    console.log("Cancel cliqué.");
  }

  // Clique sur un signe opératoire
  const signClick = () => {
    setCalc({
      signe: value,
      resultat: !calc.resultat && calc.nombre ? calc.nombre : calc.resultat,
      nombre: 0

    })

    console.log("Signe opératoire cliqué.");
  }

  // Clique sur le signe égal
  const equalsClick = () => {

    if(calc.resultat && calc.nombre)
    {
      const mathFun = (a, b, signe) => 
      {
        const resultat = {
          "+": (a, b) => a+b,
          "-": (a, b) => a-b,
          "x": (a, b) => a*b,
          "/": (a, b) => a/b
        }
        return resultat[signe](a, b);
      }

      setCalc({
        resultat: mathFun(calc.resultat, calc.nombre, calc.signe),
        signe: "",
        nombre: 0
      })
    }

    console.log("Signe égale cliqué.");
  }

  // Clique sur le pourcent
  const percentClick = () => {
    setCalc({
      nombre: calc.nombre/100,
      resultat: calc.resultat/100,
      signe: ""
    })

    console.log("Pourcent cliqué.");
  }

  // Clique sur plus ou moins
  const plusMinusClick = () => {
    setCalc({
      nombre: calc.nombre ? calc.nombre * -1 : 0,
      resultat: calc.resultat ? calc.resultat * -1 : 0,
      signe: ""
    })

    console.log("Plus ou moins cliqué.");
  }

  // Clique sur un nombre
  const numberClick = () => {
    const nombreString = value.toString()

    let nombreValue;
    nombreValue = Number(calc.nombre + nombreString)

    setCalc({
      ...calc,
      nombre : nombreValue
    })

    console.log("Nombre cliqué.");
  }

  // Traitement des cliques
  const handleBtnClick = () => {

    // Virgule
    if(value === ".") {
        commaClick();
      }

    // Cancel
    else if(value === "C") {
      resetClick();
    }

    // Signes d'opération
    else if(value === "+" || value === "-" || value === "x" || value === "/") {
      signClick();
    }

    // Signe égal
    else if(value === "="){
      equalsClick();
    }

    // Pourcent
    else if(value === "%"){
      percentClick();
    }

    // Signe plus ou moins
    else if(value === "+-") {
      plusMinusClick();
    }

    // Nombres
    else {
      numberClick();
    }
  }

  return(
    <button onClick={handleBtnClick} className={`bouton ${getStyleName(value)}`}>{value}</button>
  )
}

export default Button
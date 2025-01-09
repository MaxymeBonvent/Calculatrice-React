import {useContext} from "react"
import {CalcContext} from "../context/CalcContext.js"

const Screen = () => {
  const {calc} = useContext(CalcContext)

  return (
    <div className="screen" max={70} mode="single">{calc.nombre ? calc.nombre : calc.resultat}</div>
  )
}

export default Screen
import React from 'react'
import useFormulaio from './hooks/useFormulario'
import Input from './component/Input'
const App = () => {
  
    const [formulario, handleChange]=useFormulaio({ name: '' })

  console.log(formulario)
    return (
    <form>
       <Input value={formulario.name} onChange={handleChange}/>



    </form>
  )
}

export default App
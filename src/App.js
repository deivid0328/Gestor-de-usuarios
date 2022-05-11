import React from 'react'
import useFormulaio from './hooks/useFormulario'
import Input from './component/Input'
import Card from './component/Card'
import Container from './component/Container'
import './App.css'
const App = () => {

    const [formulario, handleChange] = useFormulaio({ name: '', lastname: '' })

    console.log(formulario)
    return (
        <Container>
            <Card>
                <form>

                    <Input label="Nombre" name="name" value={formulario.name} onChange={handleChange} />
                    <Input label="Apellido" name="lastname" value={formulario.lastname} onChange={handleChange} />

                </form>
            </Card>
        </Container>
    )
}

export default App
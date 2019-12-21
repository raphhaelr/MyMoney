import React, { useState } from 'react'


const AdicionarMovimentacao = ({adcMovimentacao}) => {

    //gestão do form
    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState('')

    const onChangeDescricao = evt => {
        setDescricao(evt.target.value)
    }

    const onChangeValor = evt => {
        setValor(evt.target.value)
    }

    const adc_Movimentacao = async () => {
        console.log(valor, descricao)
        if (!isNaN(valor) && valor.search(/^[-]?\d+(\.)?\d+?$/) >= 0) {
            await adcMovimentacao({
                descricao,
                valor: parseFloat(valor)
            })
            setDescricao('')
            setValor(0)
        }

    }

    return (
        <tr>
            <td>
                <input type='text' value={descricao} onChange={onChangeDescricao} />
            </td>
            <td>
                <input type='text' value={valor} onChange={onChangeValor} />
                <button className='btn btn-success' onClick={adc_Movimentacao}>+</button>

            </td>
        </tr>
    )
}

export default AdicionarMovimentacao
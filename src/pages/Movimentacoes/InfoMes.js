import React from 'react'
import {useMesApi} from '../../api/index'

const InfoMes = ({ data }) => {
    const { infoMes, alterarMes } = useMesApi(data)

    const alterarPrevisaoEntrada = (evt) => {
        alterarMes({ previsao_entrada: evt.target.value })
    }

    const alterarPrevisaoSaida = (evt) => {
        alterarMes({ previsao_saida: evt.target.value })
    }

    if (infoMes.loading) {
        return <p>Carregando dados do mês...</p>
    }
    if (infoMes.data) {
        return (
            <div>
                <span>Previsão entrada: {infoMes.data.previsao_entrada} </span><input type='text' onBlur={alterarPrevisaoEntrada} />/ Previsão saída: {infoMes.data.previsao_saida} <input type='text' onBlur={alterarPrevisaoSaida} /> <br />
                Entradas: {infoMes.data.entradas} / Saídas: {infoMes.data.saidas}
            </div>
        )
    }
    return null

}

export default InfoMes
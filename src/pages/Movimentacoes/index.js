import React from 'react'
import { Redirect } from 'react-router-dom'
import { useMovimentacaoApi } from '../../api/index'
import InfoMes from './InfoMes'
import AdicionarMovimentacao from './AdicionarMovimentacao'

const Movimentacoes = ({ match }) => {

    const { movimentacoes, salvarMovimentacao, excluirMovimentacao } = useMovimentacaoApi(match.params.data)

    const sleep = time => new Promise(resolve => setTimeout(resolve, time))

    const adcMovimentacao = async (dados) => {
        await salvarMovimentacao(dados)
        movimentacoes.refetch()
        await sleep(5000)
        //infoMes.refetch()
    }


    const removerMovimentacao = async (id) => {
        await excluirMovimentacao(`movimentacoes/${match.params.data}/${id}`)
        movimentacoes.refetch()
        await sleep(5000)
        //infoMes.refetch()
    }

    if (movimentacoes.error === 'Permission denied') {
        return <Redirect to='/login' />
    }

    return (
        <div className='container'>
            <h1>Movimentações</h1>

            <InfoMes data={match.params.data} />

            <table className='table'>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movimentacoes.data &&
                        Object
                            .keys(movimentacoes.data)
                            .map(movimentacao => {
                                return (
                                    <tr key={movimentacao}>
                                        <td>{movimentacoes.data[movimentacao].descricao}</td>
                                        <td className='text-right'>
                                            {movimentacoes.data[movimentacao].valor} {' '}
                                            <button className='btn btn-danger' onClick={() => removerMovimentacao(movimentacao)}>-</button>
                                        </td>
                                    </tr>
                                )
                            })
                    }
                    <AdicionarMovimentacao adcMovimentacao={adcMovimentacao} />
                </tbody>
            </table>
        </div>
    )
}

export default Movimentacoes
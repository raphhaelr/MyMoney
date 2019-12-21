
import Rest from '../utils/rest'

const baseURL = 'YOUR_URL_FB_PROJECT'
const { useGet, usePost, useDelete, usePatch } = Rest(baseURL)

export const useMesApi = (data) => {
    const infoMes = useGet(`meses/${data}`)
    const [dataPatch, alterarMes] = usePatch(`meses/${data}`)

    return { infoMes, alterarMes }
}

export const useMovimentacaoApi = (data) => {
    const movimentacoes = useGet(`movimentacoes/${data}`)
    const [postData, salvarMovimentacao] = usePost(`movimentacoes/${data}`)
    const [removeData, excluirMovimentacao] = useDelete()

    return { movimentacoes, salvarMovimentacao, excluirMovimentacao }
}

import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:8080/'
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const buscar = async(url: string, setDados: Function, header: object) => {
  const resposta = await api.get(url, header)
  setDados(resposta.data)
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const cadastrar = async(url: string, dados: object, setDados: Function, header: object) => {
  const resposta = await api.post(url, dados, header)
  setDados(resposta.data)
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const atualizar = async(url: string, dados: object, setDados: Function, header: object) => {
  const resposta = await api.put(url, dados, header)
  setDados(resposta.data)
}

export const deletar = async(url: string, header: object) => {
  await api.delete(url, header)
}
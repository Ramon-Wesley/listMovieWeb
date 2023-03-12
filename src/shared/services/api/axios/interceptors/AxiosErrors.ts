import {AxiosError} from 'axios'

export const ErrorInterceptors=(errors:AxiosError)=>{
    if(errors.message === 'Network Error'){
        return Promise.reject(new Error('Erro de conexão'))
    }
    if(errors.response?.status === 404){

    }
    return Promise.reject(errors)
}
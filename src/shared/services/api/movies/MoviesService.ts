import { api } from "../axios"
import { Environment } from "../../../environments/Environment";
import {AxiosResponse} from 'axios'

export interface IGetAll{
    slug:string;
    title:string;
    items:AxiosResponse<IMovieList>
}
export interface IMovie {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    vote_average: number;
  }
  
  export interface IMovieList {
    results: IMovie[];
  }

export const getAll=async():Promise<IGetAll[] | Error>=>{
try {
    
    
    return [
        {
            slug:"originals",
            title:"Originais do Netflix",
            items: await api.get(`/discover/tv?with_network=213&language=pt-BR&api_key=${Environment.API_KEY}`)
        },
        {
            slug:"trending",
            title:"recomendados para você",
            items:await api.get(`/trending/all/week?language=pt-BR&api_key=${Environment.API_KEY}`)
        }, 
          {
            slug:"toprated",
            title:"Em alta",
            items:await api.get(`/movie/top_rated?language=pt-BR&api_key=${Environment.API_KEY}`)
        },
           {
            slug:"action",
            title:"Ação",
            items:await api.get(`/discover/movie?with_genres=28&language=pt-BR&api_key=${Environment.API_KEY}`)
        },    
        {
         slug:"comedy",
        title:"Comédia",
        items:await api.get(`/discover/movie?with_genres=35&language=pt-BR&api_key=${Environment.API_KEY}`)
    }, 
     {
        slug:"horror",
        title:"Terror",
        items:await api.get(`/discover/movie?with_genres=27&language=pt-BR&api_key=${Environment.API_KEY}`)
    },  
     {
        slug:"romance",
        title:"Romance",
        items:await api.get(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${Environment.API_KEY}`)
    }, 
      {
        slug:"documentary",
        title:"documentário",
        items:await api.get(`/discover/movie?with_genres=99&language=pt-BR&api_key=${Environment.API_KEY}`)
    }
    
]
} catch (error) {
    return new Error((error as {message:string}).message || 'Erro ao listar as informações!')
}

}





export const moviesService={
    getAll
}
import {Routes,Route, Navigate} from 'react-router-dom'
import { Dashboard } from '../pages'
import { ViewDetailScreen } from '../shared/components/ViewDetailScreen'




export const AppRouter=()=>{
    
    return(
        <Routes>
            <Route path='/pagina-inicial' element={<Dashboard/>}/>
            <Route path='/detalhe/:type/:id' element={<ViewDetailScreen/>}/>
            <Route path='*' element={<Navigate to='/pagina-inicial'/>}/>
        </Routes>
    ) 
}
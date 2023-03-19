import { Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard } from '../pages'
import { ViewDetailScreen } from '../pages/detailItem.tsx/ViewDetailScreen'
import { SearchItems } from '../pages/searchItems/SearchItems'




export const AppRouter = () => {

    return (
        <Routes>
            <Route path='/pagina-inicial' element={<Dashboard />} />
            <Route path='/:type' element={<SearchItems/>} />
            <Route path='/detalhe/:type/:id' element={<ViewDetailScreen />} />
            <Route path='*' element={<Navigate to='/pagina-inicial' />} />
        </Routes>
    )
}
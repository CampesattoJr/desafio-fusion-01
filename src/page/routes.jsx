import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Profile } from './profile'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}
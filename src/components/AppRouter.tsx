import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {privateRoutes, publicRoutes} from '../router'
import Login from '../pages/Login'
import Event from '../pages/Event'

const AppRouter = () => {
    const auth = true
    return (
        auth
            ?
            <Routes>
                {
                    privateRoutes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.element/>}
                        />
                    )
                }
                <Route path="*" element={<Event/>}/>
            </Routes>
            :
            <Routes>
                {
                    publicRoutes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.element/>}
                        />
                    )
                }
                <Route path="*" element={<Login/>}/>
            </Routes>
    )
}

export default AppRouter


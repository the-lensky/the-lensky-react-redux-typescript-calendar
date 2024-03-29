import React, {FC, useEffect} from 'react'
import './App.css'
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'
import {Layout} from 'antd'
import {useActions} from './hooks/useActions'
import {IUser} from './models/IUser'

const App: FC = () => {

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('username' || '')} as IUser)
            setIsAuth(true)
        }
    }, [])

    const {setUser, setIsAuth} = useActions()

    return (
        <Layout>
            <Navbar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    )
}

export default App

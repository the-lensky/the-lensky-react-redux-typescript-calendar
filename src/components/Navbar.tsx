import React, {FC} from 'react'
import {Layout, Menu, Row} from 'antd'
import {useNavigate} from 'react-router-dom'
import {RoutesName} from '../router'
import {useTypedSelector} from '../hooks/useTypedSelecrtor'
import {useActions} from '../hooks/useActions'

const Navbar: FC = () => {
    const navigate = useNavigate()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const {logout} = useActions()
    return (
        <Layout.Header>
            <Row justify="end">
                {
                    isAuth
                        ?
                        <>
                            <div style={{color: 'white'}}>{user.username}</div>
                            <Menu theme="dark" mode="horizontal" selectable={false}>
                                <Menu.Item
                                    key="1"
                                    onClick={logout}
                                >Выйти
                                </Menu.Item>
                            </Menu>
                        </>
                        :
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item
                                key="1"
                                onClick={() => navigate(RoutesName.LOGIN)}
                            >Логин
                            </Menu.Item>
                        </Menu>
                }

            </Row>
        </Layout.Header>
    )
}

export default Navbar
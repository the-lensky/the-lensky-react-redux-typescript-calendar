import React, {FC} from 'react'
import {Layout, Menu, Row} from 'antd'
import {useNavigate} from 'react-router-dom'
import {RoutesName} from '../router'
import {useTypedSelector} from '../hooks/useTypedSelecrtor'

const Navbar: FC = () => {
    const navigate = useNavigate()
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        <Layout.Header>
            <Row justify="end">
                {
                    isAuth
                        ?
                        <>
                            <div style={{color: 'white'}}>Juve</div>
                            <Menu theme="dark" mode="horizontal" selectable={false}>
                                <Menu.Item
                                    key="1"
                                    onClick={() => console.log('ВЫШЕЛ')}
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
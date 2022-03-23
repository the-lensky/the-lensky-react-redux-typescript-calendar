import React, {FC, useState} from 'react'
import {Button, DatePicker, Form, Input, Row, Select} from 'antd'
import {rules} from '../utils/rules'
import {IUser} from '../models/IUser'
import {IEvent} from '../models/IEvent'
import {Moment} from 'moment'
import {formatDate} from '../utils/date'
import {useTypedSelector} from '../hooks/useTypedSelecrtor'

interface EventProps {
    guests: IUser[]
    submit: (event: IEvent) => void
}

const EventForm: FC<EventProps> = (props) => {
    const [event, setEvent] = useState<IEvent>({
        guest: '',
        description: '',
        author: '',
        date: ''
    } as IEvent)

    const {user} = useTypedSelector(state => state.auth)

    const selectDate = (date: Moment | null) => {
        if (date) {
            setEvent({...event, date: formatDate(date.toDate())})
        }
    }

    const submitForm = () => {
        props.submit({...event, author: user.username})
    }

    return (
        <Form
            onFinish={submitForm}
        >
            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    onChange={e => setEvent({...event, description: e.target.value})}
                    value={event.description}
                />
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="date"
                rules={[rules.required(), rules.isDayAfter('Нельзя создавать назад')]}
            >
                <DatePicker
                    onChange={date => selectDate(date)}
                />
            </Form.Item>
            <Form.Item
                label="Выберите гостя"
                name="guest"
                rules={[rules.required()]}
            >
                <Select
                    onChange={(guest: string) => setEvent({...event, guest})}
                >
                    {
                        props.guests.map(guest =>
                            <Select.Option value={guest.username} key={guest.username}>
                                {guest.username}
                            </Select.Option>
                        )
                    }
                </Select>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    )
}

export default EventForm

import React from 'react'
import { Menu, Button, message } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons'
const { SubMenu } = Menu

export default class Demo extends React.Component {
    state = {
        current: 'mail',
    }
    constructor(props) {
        super(props)
    }

    handleClick = () => {
        console.log('click')
        message.info('这是信息')
        // this.setState({
        //     current: e.key,
        // })
    }
    render() {
        return (
            <>
                <Button type="primary" onClick={this.handleClick}>
                    Primary Button
                </Button>
            </>
        )
    }
}

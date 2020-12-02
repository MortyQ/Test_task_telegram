import React,{useState} from 'react'
import { Input } from 'antd';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const MainTelegramm =()=>{

    const [state, setState] =useState({
        data: '',
        time: '',
        adress:''
    });



    const { TelegramClient } = require('messaging-api-telegram');
 

const client = new TelegramClient({
  accessToken: '1437432634:AAEfa3yM3DmDOOh5LTMzbY0Z37jDGXMQFo4',
});

client.getWebhookInfo().catch((error) => {
    console.log(error); // formatted error message
    console.log(error.stack); // error stack trace
    console.log(error.config); // axios request config
    console.log(error.request); // HTTP request
    console.log(error.response); // HTTP response
  });


    const handle =(event)=>{
        setState({ ...state, [event.target.name]: event.target.value})
    }

    

    // await client.sendMessage('TestTaskTelegrammMessagebot', 'hi', {
    //     disableWebPagePreview: true,
    //     disableNotification: true,
    //   });
    const push_info =()=>{
        console.log(state.data,state.time,state.adress)
        const message = 'Дата: ' + state.data +',  '+
            'Время: ' + state.time + ',  '+
            'Адресс: '+ state.adress
        const token = '1437432634:AAEfa3yM3DmDOOh5LTMzbY0Z37jDGXMQFo4'
        let url = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id=-348038280&text='
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url+message, true);
        xhttp.send();
    }

    return(            
                <div className="main_telegram">
                        <h1>Тестовое задание для собеседования</h1>
                        <div className="position_section">
    <Input  onChange={handle} name='data' size="large" placeholder="data:" prefix={<UserOutlined />} />
    {state.data}
    <br />
    <br />
    <Input  onChange={handle} name='time'  size="large" placeholder="time:" prefix={<UserOutlined />} />
    {state.time}
    <br />
    <br />
    <Input  onChange={handle} name='adress'   size="large" placeholder="adress:" prefix={<UserOutlined />} />
    {state.adress}

    <Button onClick={push_info}  type="primary">Button</Button>
                        </div>

                </div>



            )
}

export default MainTelegramm;
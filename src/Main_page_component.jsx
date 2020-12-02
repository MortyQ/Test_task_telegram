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


    const handle =(event)=>{
        setState({ ...state, [event.target.name]: event.target.value})
    }



    const push_info =()=>{

        
    }

            return(
                

                <div className="main_telegram">

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
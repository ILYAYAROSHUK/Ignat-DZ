import React from 'react'
import angle_style from './angle.module.css'
import avatar_style from './avatar.module.css'
import content_style from './content.module.css'
import wrap_style from './wrap.module.css'
import around_style from './around.module.css'

type MessagePropsType = {
    avatar: string
    name: string,
    message: string,
    time: string
}
export let Message = (props: MessagePropsType) => {
    return (
        <div className={wrap_style.wrap_message}>

           <div> <img src={props.avatar} alt={'avatar'} className={avatar_style.avatar}/></div>

            <div className={wrap_style.wrap_block}><div></div> <div className={around_style.around}></div> </div>
            <div className={content_style.content} >
                <div className={content_style.name}>{props.name}</div>
                <div className={content_style.text}>{props.message}</div>
                <div className={content_style.time}>{props.time}</div>
            </div>
            <div className={angle_style.angle}></div>
        </div>
    )
}


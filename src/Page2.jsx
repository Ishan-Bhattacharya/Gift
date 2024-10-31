import React,{useState} from 'react'
import Booboo from './boo'
import Booboolink from './Booboolink'
import { useNavigate } from 'react-router-dom'
export default function Page2() {

    return (
        <div>
            <Booboo />
            <h1>This is a booboo.</h1>
            <h2>Are you a booboo?</h2>
            <Booboolink />
        </div>
    )
}
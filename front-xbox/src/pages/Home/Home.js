import React from 'react'
import Jogolist from '../../components/JogoList/Jogolist';
import "./Home.css";
import {Header} from '../../components/Header/Header'

export default function Home() {
    return (
        <div>
            <Header/>
            <Jogolist/>
        </div>
    )
}

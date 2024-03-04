import { Github, Youtube, Palette, Facebook, Bot } from "lucide-react"
import { useState } from 'react'
import { Header } from './Components/Header.jsx'
import { Card } from './Components/Card.jsx'
import { Clock } from './Components/Clock.jsx'
import { Weather } from "./Components/Weather.jsx"



import './App.css'

function App() {
    return (
    <>
      <Header></Header>
      <div className='wrap'>
            <div className='grid1'>
            <Card title={''} href={'https://github.com/vaquitamarina'} >             
                
                <Github size={48}/>
            </Card>
            </div>

            <div className='grid2'>
            <Card title={''} href={''} >
                <Bot size={48}/>
            </Card>
            </div>
            
            {/* <div className='grid3'>
            <Card title={''} href={'https://coolors.co/generate'} >
                <Palette size={48}/>
            </Card>
            </div>
            
            <div className='grid4'>
            <Card title={''} href={'https://coolors.co/generate'} >
                <Palette size={48}/>
            </Card>
            </div> */}

            <div className='grid5'>
            <Card title={''} href={'https://github.com/vaquitamarina'} >
                <Github size={48}/>
            </Card>
            </div>

            <div className='grid6'>
            <Card title={''} href={'https://www.youtube.com/'} >
                <Youtube size={48}/>
            </Card>
            </div>

            <div className='grid7'>
            <Card title={''} href={'https://coolors.co/generate'} >
                <Weather></Weather>
            </Card>
            </div>

            <div className='grid8'>
            <Card title={''} href={'https://coolors.co/generate'} >
                <Palette size={48}/>
            </Card>
            </div>

            <div className='grid9'>
            <Card title={''} href={'https://www.facebook.com/'} >
                <Facebook size={48}/>
            </Card>
            </div>

            <div className='grid10'>
            <Card title={''} href={'https://coolors.co/generate'} >
                <Clock></Clock>
            </Card>
            </div>

            <div className='grid11'>
            <Card title={''} href={'https://coolors.co/generate'} >
                <Palette size={48}/>
            </Card>
            </div>

            
      </div>
    </>

    )
}

export default App

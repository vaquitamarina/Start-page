import { Github, Youtube, Palette } from "lucide-react"
import { useState } from 'react'
import { Header } from './Components/Header.jsx'
import { Card } from './Components/Card.jsx'
import { Clock } from './Components/Clock.jsx'
import { Weather } from "./Components/Weather.jsx"


import './App.css'

function App() {
    const [count, setCount] = useState(0)
    return (
    <>
      <Header></Header>
      <div className='wrap'>
            <div className='grid1'>
            <Card title={'a'} href={'https://github.com/vaquitamarina'} >             
                
                <Github size={48}/>
            </Card>
            </div>

            <div className='grid2'>
            <Card title={'Youtube'} href={'https://www.youtube.com/'} >
                <Youtube size={48}/>
            </Card>
            </div>
            
            <div className='grid3'>
            <Card title={'Colors'} href={'https://coolors.co/generate'} >
                <Palette size={48}/>
            </Card>
            </div>
            
            <div className='grid4'>
            <Card title={'Colors'} href={'https://coolors.co/generate'} >
                <Palette size={48}/>
            </Card>
            </div>

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
            <Card title={'Colors'} href={'https://coolors.co/generate'} >
                <Palette size={48}/>
                <Weather></Weather>
            </Card>
            </div>

            <div className='grid8'>
            <Card title={''} href={'https://coolors.co/generate'} >
                <Palette size={48}/>
            </Card>
            </div>

            <div className='grid9'>
            <Card title={''} href={'https://coolors.co/generate'} >
                <Palette size={48}/>
            </Card>
            </div>

            <div className='grid10'>
            <Card title={''} href={'https://coolors.co/generate'} >
                <Clock></Clock>
            </Card>
            </div>

            <div className='grid11'>
            <Card title={'Colors'} href={'https://coolors.co/generate'} >
                <Palette size={48}/>
            </Card>
            </div>

            
      </div>
    </>

    )
}

export default App

import React from 'react'
import { About } from './Components/About/About'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Nav } from './Components/Nav/Nav'
import { Portfolio } from './Components/Portfolio/Portfolio'
import { Contact } from '../src/Components/Contact/Contact'
import { Experience } from '../src/Components/Experience/Experience'
import { Stats } from './Components/Stats/stats'
import Calender from './Components/Calender/Calender'

export const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Portfolio/>
    <Calender/>
    <Stats/>
    <Contact/>
    <Footer/>
    </>
  )
}
import React,{useState, useEffect} from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Horizontal from './components/Horizontal';

const color1 = '#000'
const color2 = '#e2e2e2'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Studio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main uppercase " style={{backgroundColor:color1, color:color2, minHeight:'100vh'}}>        
        <Horizontal text="abcdefghi" direction={1}/>
        <Horizontal text="abcdefghi" direction={-1}/>
      </main>
    </>
  )
}

export default Home
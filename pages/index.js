import Head from 'next/head'
import Image from 'next/image'
import OpacityCard from '../components/OpacityCard'


export default function Home() {
  return (
    <div>
      <h1 className="bg-pink-500">
        Welcome to Mappearte
      </h1>        
      <OpacityCard>
      </OpacityCard>
    </div>
  )
}

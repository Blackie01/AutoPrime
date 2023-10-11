import Navigation from '@/components/nav'
import Image from 'next/image'
import Link from 'next/link'
import JumboImage from '../assets/jumbo.png'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation/>
      <section class="border-purple border-1 border-solid">
        <Image className="border-black border-1 border-solid" src={JumboImage}/>
      </section>
    </main>
  )
}

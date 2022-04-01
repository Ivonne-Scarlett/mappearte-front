
import OpacityCard from '../components/OpacityCard'


export default function Home() {
  return (
    <div className='w-full h-screen bg-test'>
      <OpacityCard className='w-1/2 mt-8'>
        <h1 className='font-[Gabriela] text-3xl'>Hola</h1>
      </OpacityCard>
      <OpacityCard className='w-1/2 mt-8'>
        <h1 className='font-[Megrim] text-3xl'>SUBE TU ARTE</h1>
        <p className='text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maiores molestiae voluptatibus aliquam vel alias facilis blanditiis dolorum odit molestias ullam animi eos nulla, saepe tenetur voluptate vitae? Odit, ipsum.
        Temporibus labore reiciendis voluptate incidunt, assumenda rem? Aliquam, cumque cum neque provident quia temporibus inventore voluptatibus molestiae quas quis doloremque magni dolorum ab iure aut corporis blanditiis nulla sint ex!</p>
      </OpacityCard>
    </div>
  )
}

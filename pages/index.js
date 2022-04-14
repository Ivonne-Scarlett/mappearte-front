import OpacityCard from '../components/OpacityCard'
import ToggleSwitch from '../components/ToggleSwitch'
import Map from '../components/Map'




export default function Home() {
  return (
    <div className='w-full h-screen bg-test '>
      <OpacityCard className='w-1/2 mt-5'>
        <h1 className='font-[Mali] text-4xl mt-3'>Artistas más populares 1</h1> <span className='text-base font-semibold font-[]'>Alicia</span>
        <p className='text-white mt-5'>umque cum neque provident quia temporibus inventore voluptatibus molestiae quas quis doloremque magni dolorum ab iure aut corporis blanditiis nulla sint ex!</p>
      <ToggleSwitch>

      </ToggleSwitch>
      
      </OpacityCard>
      <Map className='mt-8'>

      </Map>
      
    </div>
  )
}

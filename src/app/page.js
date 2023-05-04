import Footer from './components/Footer'
import Matchlist from './components/Matchlist'
import News from './components/News'
import Performers from './components/Performers'

export default function Home() {
  return (
    <div>
        <div className="grid grid-cols-1 bg-red-500 sm:grid-cols-3 lg:h-screen lg:grid-cols-5">
          <Matchlist/>
          <Performers />
          <News />
        </div>
    </div>
  
  )
}

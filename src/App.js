import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/layout/Footer'
import TopNav from './components/layout/TopNav'
import Game from './pages/Game'
import About from './pages/About'
import { GameProvider } from './context/game/GameContext'

function App() {
  return (
    <GameProvider>
      <Router>
        <div className='flex h-screen flex-col justify-between bg-gradient-to-br from-base-100 to-base-300'>
          <TopNav />
          <main className='container mx-auto px-3 pb-12 h-full'>
            <Routes>
              <Route path='/' element={<Game />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GameProvider>
  )
}

export default App

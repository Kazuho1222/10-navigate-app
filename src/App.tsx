import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'

function App() {

  return (
    <>
      <div className='container mx-auto w-1/2 h-screen'>
        <div className='container items-center h-4/5 bg-white rounded-md'>
          <div className='flex justify-between font-bold h-10 bg-slate-300 text-black rounded-md'>
            <Home />
            <About />
            <Contact />
          </div>
        </div>
      </div>
    </>
  )
}

export default App

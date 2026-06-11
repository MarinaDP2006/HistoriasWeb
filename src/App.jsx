import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-12">
        <section id="what-is" className="text-center text-white mb-12">
          <h2 className="text-5xl font-bold mb-4 text-purple-300">Bienvenido a mi Biblioteca</h2>
          <p className="text-xl text-gray-300">
            Explora historias fanfic, originales y ediciones especiales de Ninai_06
          </p>
          <p className="text-lg text-gray-400 mt-6 max-w-3xl mx-auto">
            Esta es una plataforma dedicada a compartir mis historias publicadas en Wattpad. 
            Aquí encontrarás todas mis fanfics, historias originales y ediciones especiales en un solo lugar.
            Sin necesidad de iniciar sesión, puedes navegar libremente y acceder directamente a mis historias en Wattpad.
          </p>
        </section>

        {/* Featured Stories Preview */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition cursor-pointer">
            <h3 className="text-xl font-bold text-purple-300 mb-2">Thranduil</h3>
            <p className="text-gray-300">Una de las historias más leídas</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition cursor-pointer">
            <h3 className="text-xl font-bold text-purple-300 mb-2">Dayan Denali</h3>
            <p className="text-gray-300">Una de las historias más leídas</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition cursor-pointer">
            <h3 className="text-xl font-bold text-purple-300 mb-2">JJ Maybank</h3>
            <p className="text-gray-300">Una de las historias más leídas</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App

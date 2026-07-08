import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import WhatsappButton from './components/layout/WhatsappButton'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Preparado para futuras páginas independientes, ej: /blog/:slug */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  )
}

export default App

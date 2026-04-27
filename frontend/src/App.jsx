import { useState, useEffect } from 'react'
import './App.css' 
import SearchBar from './components/SearchBar'
import MakeupItem from './components/MakeupItem'
import MakeupForm from './components/MakeupForm'
import { 
  getMakeupService
} from './services/makeup.service';
import { useMakeup } from '../context/MakeupContext.jsx';

function App() {
  const { state, dispatch } = useMakeup();
  const [editando, setEditando] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  const fetchMakeup = async () => {
    setLoading(true)
    try {
      const data = await getMakeupService()
      dispatch({ type: 'SET_MAKEUPS', payload: Array.isArray(data) ? data : [] })
    } catch (err) {
      setError(err.message || 'Error al cargar los maquillajes')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMakeup()
  }, [])


  const makeupFiltrado = state.makeups.filter((m) =>
    (m.nombre || '').toLowerCase().includes(search.toLowerCase()),
  )
  

  return (
    
    <div className="App">
      <SearchBar value={search} onChange={setSearch} />
      <h1>Maquillajes</h1>

      <MakeupForm 
      
        makeupEditando={editando} 
        onCancelarEdicion={() => setEditando(null)} 
      />


      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <ul>

          {makeupFiltrado.map((m) => (
  <MakeupItem 
    key={m.id} 
    makeup={m} 
    onEditar={setEditando} 
  />
  
))}
        </ul>
      )}
    </div>
  )
}

export default App
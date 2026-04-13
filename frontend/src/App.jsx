import { useState, useEffect } from 'react'
import './App.css' 
import SearchBar from './components/SearchBar'
import MakeupItem from './components/MakeupItem'
import MakeupForm from './components/MakeupForm'
import { 
  getMakeupService, 
  createMakeupService, 
  updateMakeupService, 
  deleteMakeupService 
} from './services/makeup.service';


function App() {
  const [makeup, setMakeup] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  const fetchMakeup = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await getMakeupService()
      setMakeup(Array.isArray(data) ? data : [])
    } catch (err) {
      setError(err.message || 'Error al cargar los maquillajes')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMakeup()
  }, [])

  const handleCreate = async (newMakeup) => {
    try {
      await createMakeupService(newMakeup)
      fetchMakeup()
    } catch (err) {
      setError('Error al crear maquillaje')
    }
  }

  const handleUpdate = async (id, updatedMakeup) => {
    try {
      await updateMakeupService(id, updatedMakeup)
      fetchMakeup()
      setEditando(null)
    } catch (err) {
      setError('Error al actualizar maquillaje')
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteMakeupService(id)
      fetchMakeup()
    } catch (err) {
      setError('Error al eliminar maquillaje')
    }
  }

  const makeupFiltrado = makeup.filter((m) =>
    (m.nombre || '').toLowerCase().includes(search.toLowerCase()),
  )
  
  const [editando, setEditando] = useState(null);

  return (
    
    <div className="App">
      <SearchBar value={search} onChange={setSearch} />
      <h1>Maquillajes</h1>

      <MakeupForm 
        onSubmit={editando ? (datos) => handleUpdate(editando.id, datos) : handleCreate} 
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
    onEliminar={handleDelete} 
  />
  
))}
        </ul>
      )}
    </div>
  )
}

export default App
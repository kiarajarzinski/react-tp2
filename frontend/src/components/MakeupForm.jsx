import { useState, useEffect } from "react";
import { useMakeup } from '../../context/MakeupContext';


function MakeupForm({ makeupEditando, onCancelarEdicion }) {
const {dispatch} = useMakeup();

  const [form, setForm] = useState({
    nombre: "",
    marca: "",
    precio: "",
  });

  useEffect(() => {
    if (makeupEditando) {
      setForm(makeupEditando); 
} else {
      setForm({ nombre: "", marca: "", precio: "" });
    }
  }, [makeupEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   if (makeupEditando) {
      
      dispatch({ 
        type: "UPDATE_MAKEUP", 
        payload: form 
      });
      onCancelarEdicion(); 
    } else {
      
      dispatch({ 
        type: "ADD_MAKEUP", 
        payload:{ ...form, id: Date.now() }
      });
    }

    setForm({ nombre: "", marca: "", precio: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="makeup-form">
      <h3>{makeupEditando ? "Editar" : "Nuevo Producto"}</h3>
      
      <input 
        name="nombre" 
        placeholder="Nombre" 
        value={form.nombre} 
        onChange={handleChange} 
      />
      
      <input 
        name="marca" 
        placeholder="Marca" 
        value={form.marca} 
        onChange={handleChange} 
      />
      
      <input 
        name="precio" 
        type="number" 
        placeholder="Precio" 
        value={form.precio} 
        onChange={handleChange} 
      />

      <button type="submit">Guardar</button>
      
      {makeupEditando && (
        <button type="button" onClick={onCancelarEdicion}>Cancelar</button>
      )}
    </form>
  );
}

export default MakeupForm;
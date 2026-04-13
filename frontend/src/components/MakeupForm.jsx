import { useState, useEffect } from "react";

function MakeupForm({ onSubmit, makeupEditando, onCancelarEdicion }) {
  const [form, setForm] = useState({
    nombre: "",
    marca: "",
    precio: "",
  });

  useEffect(() => {
    if (makeupEditando) {
      setForm(makeupEditando); 
      setForm({ nombre: "", marca: "", precio: "" }); 
    }
  }, [makeupEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    if (!makeupEditando) setForm({ nombre: "", marca: "", precio: "" });
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
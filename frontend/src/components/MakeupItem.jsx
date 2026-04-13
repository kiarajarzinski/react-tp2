function MakeupItem({ makeup, onEditar, onEliminar }) {
  return (
    <div className="makeup-item">
      <div className="makeup-info">
        <h3 className="makeup-nombre">{makeup.nombre}</h3>
        
        <p>
          <strong>{makeup.marca}</strong> - ${makeup.precio}
        </p>
      </div>

      <div className="makeup-acciones">
        <button onClick={() => onEditar(makeup)} className="btn-edit">
          Editar
        </button>
        
        <button onClick={() => onEliminar(makeup.id)} className="btn-delete">
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default MakeupItem;
import { useMakeup } from '../../context/MakeupContext';
function MakeupItem({ makeup, onEditar}) {
  const { dispatch } = useMakeup();

  return (
    <div className="makeup-item">
      <div className="makeup-info">
        <h3 className="makeup-nombre">{makeup.nombre}</h3>
        
        <p>
          <strong>{makeup.marca}</strong> - ${makeup.precio}
        </p>
      </div>

      <div className="makeup-acciones">
        <button onClick={() => onEditar(makeup)}>
          Editar
        </button>
        
        <button onClick={() => dispatch({ type: 'DELETE_MAKEUP', payload: makeup.id })}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default MakeupItem;
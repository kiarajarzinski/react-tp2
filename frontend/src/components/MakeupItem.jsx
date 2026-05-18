import { useMakeup } from '../../context/MakeupContext';
import { memo } from 'react';

function MakeupItem({ makeup, onEditar}) {
  const { dispatch } = useMakeup();
  console.log("Me rendericé:", makeup.nombre);



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

export default memo(MakeupItem);
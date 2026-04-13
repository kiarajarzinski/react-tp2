import MakeupModel from "../models/makeup.model.js";

//obtener todos los maquillajes 
export const getAllMakeup = async (req, res) => {
    try {
        res.status(200).json({ makeup: await MakeupModel.findAll() });
    }
    catch (error) {
        console.error("Error al obtener los maquillajes:", error);
        res.status(500).json({ error: "Error al obtener los maquillajes" });
    }
}

//obtener maquillaje por id
export const getMakeupById = async (req, res) => {
    try { 
      const makeup = await MakeupModel.findByPk(req.params.id);
      if (!makeup) {
        return res.status(404).json({ error: "Maquillaje no encontrado" });
      }
        res.status(200).json({ makeup });

    } catch (error) {
        console.error("Error al obtener el maquillaje:", error);
        res.status(500).json({ error: "Error al obtener el maquillaje" });
    }

}
//crear maquillaje
export const createMakeup = async (req, res) => {
    try {
        const { nombre, marca, precio } = req.body;
        if (!nombre || !marca || !precio) {
            return res.status(400).json({ error: "nombre, marca y precio son requeridos" });
        }
        const newMakeup = await MakeupModel.create({ nombre, marca, precio });
        res.status(201).json({ makeup: newMakeup });
    } catch (error) {
        res.status(500).json({ error: "Error al crear el maquillaje" });
    }
};


//actualizar maquillaje
export const updateMakeup = async (req, res) => {
    const { id } = req.params;
    const { nombre, marca, precio } = req.body;
    try {
        const makeup = await MakeupModel.findByPk(id);
        if (!makeup) {
            return res.status(404).json({ error: "Maquillaje no encontrado" });
        }
        makeup.nombre = nombre || makeup.nombre;
        makeup.marca = marca || makeup.marca;
        makeup.precio = precio || makeup.precio;
        await makeup.save();
        res.status(200).json({ makeup });
    }
    catch (error) {
        console.error("Error al actualizar el maquillaje:", error);
        res.status(500).json({ error: "Error al actualizar el maquillaje" });
    }
};

//eliminar maquillaje 
export const deleteMakeup = async (req, res) => { 
    const { id } = req.params;

    try { 
        const makeup = await MakeupModel.findByPk(id);

        if (!makeup) {
            return res.status(404).json({ error: "Maquillaje no encontrado" });
        }

        await makeup.destroy();
        res.status(200).json({ message: "Maquillaje eliminado correctamente" });

    } catch (error) { 
        console.error("Error al eliminar el maquillaje:", error);
        res.status(500).json({ error: "Error al eliminar el maquillaje" });
    }
}; 

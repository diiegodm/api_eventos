
const events = require('../models/event.model');



const getEvents = async (req, res) => {

    try {


        const eventBD = await events.find();

        if(eventBD.length === 0 ){
            return res.status(200).json({mensaje:"no hay eventos disponibles"})
        }

        const listEventos = eventBD.map(event => ({

            nombre: event.nombre,
            descripcion: event.descripcion, 
            fecha: event.fecha,
            deporte: event.tipoDeporte, 
            ubicacion: event.ubicacion,
            organizador: event.organizador 
 
        }))

       
        return res.status(200).json(listEventos)




    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: "Error en el servidor", error: error.message });
    };

}

const eventUni = async (req, res) => {

    try {


        const eventBD = await events.findById(req.params.id);

        console.log(eventBD)  

        if (!eventBD) {
            return res.status(400).json({ mensaje: "no se ha encontrado el evento " })// no necesito hacer el map ya que devuelve un unico objeto
        }

        const Evento = {
            nombre: eventBD.nombre,
            descripcion: eventBD.descripcion,
            fecha: eventBD.fecha,
            deporte: eventBD.tipoDeporte,
            ubicacion: eventBD.ubicacion,
            organizador: eventBD.organizador

        }// devolvera solo  los datos que el usuario vera de forma limpia (eso espero)

        return res.json(Evento)


    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: "Error en el servidor", error: error.message });
    };
}


const addEvent = async (req, res) => {
    try {
        const newEvent = req.body;// recibimos los datos desde el body 

        const eventBD = await events.find({ nombre: newEvent.nombre });// buscamos el username como principal y unico elemento (KE


        const event = await events.create(newEvent);



        const Evento = {
            nombre: event.nombre,
            descripcion: event.descripcion,
            fecha: event.fecha,
            deporte: event.tipoDeporte,
            ubicacion: event.ubicacion,
            organizador: event.organizador

        }
        return res.status(201).json({
            mensaje: "el evento ha sido agregado con exito",
            event: Evento
        })




    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: "Error en el servidor", error: error.message });
    }
}

const evendelete = async (req, res) => {

    try {


        const eventBD = await events.findByIdAndDelete(req.params.id);

        if (!eventBD) {
            return res.status(400).json({ mensaje: "Evento no encontrado" });
        }

        const Evento = {
            nombre: eventBD.nombre,
            descripcion: eventBD.descripcion,
            fecha: eventBD.fecha,
            deporte: eventBD.tipoDeporte,
            ubicacion: eventBD.ubicacion,
            organizador: eventBD.organizador

        }// devolvera solo  los datos que el usuario vera de forma limpia (eso espero)

        return res.status(201).json({
            msg: "evento eliminado con exito",
            data: Evento
        })


    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: "Error en el servidor", error: error.message });
    }


}

const update = async (req, res) => {

    const id = req.params.id;
    const eventUpdates = req.body;// guardo la contrasen apara encryptarla

    try {



        const upDateEvent = await events.findByIdAndUpdate(id, eventUpdates, { new: true })

        if (!upDateEvent) {
            return res.status(400).json({ mensaje: "Evento no encontrado" });
        }

        const newEventoModificado = {
            nombre: upDateEvent.nombre,
            descripcion: upDateEvent.descripcion,
            fecha: upDateEvent.fecha,
            ubicacion: upDateEvent.ubicacion,
            tipoDeporte: upDateEvent.tipoDeporte,
            organizador: upDateEvent.neganizador,
            updatedA: upDateEvent.updatedA

        }


        return res.status(201).json({
            mensaje: "se modifico con exito",
            newEventoModificado
        })


    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: "Error en el servidor", error: error.message });

    }
}

const getBydata = async (req, res) => {

   
    try {
        // Obtener el parámetro de consulta type`
        const  {type } = req.query; 
           
       
        let filteredEvents = [] ;

        if (type) {
             
            filteredEvents = await events.find({ tipoDeporte: { $regex: `^${type}$`, $options: "i" }  });
            console.log(filteredEvents)
        }else {
            return res.status(404).json({ mensaje: "no se encuentra el evento " });
        }

        

        // Mapear los eventos para devolver sólo los campos relevantes
        const eventList = filteredEvents.map(event => ({
            nombre: event.nombre,
            descripcion: event.descripcion,
            fecha: event.fecha,
            ubicacion: event.ubicacion, 
            tipoDeporte: event.tipoDeporte,
            organizador: event.organizador 
        })); 

        return res.status(201).json(eventList);
    } catch (error) {
        
        return res.status(500).json({ mensaje: "Error al obtener los eventos por tipo" });
    }
};



module.exports = { getEvents, addEvent, eventUni, evendelete, update, getBydata }

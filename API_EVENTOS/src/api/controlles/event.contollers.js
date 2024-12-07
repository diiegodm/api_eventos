

//const bcrypt = require("bcryptjs")
const events = require('../models/event.model');



const getEvents = async (req, res) => {

    try {


        const eventBD = await events.find();// buscamos el username como principal y unico elemento (KEY)

        const listEventos = eventBD.map(event =>({

            nombre: event.nombre,
            descripcion: event.descripcion,
            fecha: event.fecha,
            deporte:eventBD.tipoDeporte,
            ubicacion: event.ubicacion,
            organizador: event.organizador,

        }))

        console.log(eventBD)
        return res.json(listEventos)


 
    
    }catch (error){  
        console.error(error);
        return res.status(500).json({ mensaje: "Error en el servidor", error: error.message });
    };

}

const eventUni = async(req,res) => {

  try {


        const eventBD = await events.findById(req.params.id);
       
       console.log(eventBD)

       if(!eventBD){
        return res.json ({mensaje: "no se ha encontrado el evento "})// no necesito hacer el map ya que devuelve un unico objeto
       }

        const Evento = {
            nombre: eventBD.nombre,
            descripcion: eventBD.descripcion,
            fecha: eventBD.fecha,
            deporte:eventBD.tipoDeporte,
            ubicacion: eventBD.ubicacion,
            organizador: eventBD.organizador

        }// devolvera solo  los datos que el usuario vera de forma limpia (eso espero)
        
        return res.json(Evento)


    }catch (error){  
        console.error(error);
        return res.status(500).json({ mensaje: "Error en el servidor", error: error.message });
    };
}


const addEvent = async (req, res) => {
    try {
        const newEvent = req.body;// recibimos los datos desde el body 

        const eventBD = await events.find({ nombre: newEvent.nombre });// buscamos el username como principal y unico elemento (KEY)
       

        if (eventBD.length !== 0) {

            return res.status(404).json({ message: "el evento ha sido registrado anteriormente" });// en caso de que el username ya este usado 
        };

        

        const event = await events.create(newEvent);



           const Evento = {
            nombre: event.nombre,
            descripcion: event.descripcion,
            fecha: event.fecha,
             deporte:eventBD.tipoDeporte,
            ubicacion: event.ubicacion,
            organizador: event.organizador

        }
        return res.json({
            mensaje:"el evento ha sido agregado con exito",
            event: Evento})

      


        }catch (error){  
            console.error(error);
            return res.status(500).json({ mensaje: "Error en el servidor", error: error.message });
    }
}

const evendelete = async (req,res)=>{

    try {
       

        const eventBD = await events.findByIdAndDelete( req.params.id );

        if (!eventBD) {
            return res.status(404).json({ mensaje: "Evento no encontrado" });
        }

        const Evento = {
            nombre: eventBD.nombre,
            descripcion: eventBD.descripcion, 
            fecha: eventBD.fecha,
            deporte:eventBD.tipoDeporte,
            ubicacion: eventBD.ubicacion,
            organizador: eventBD.organizador

        }// devolvera solo  los datos que el usuario vera de forma limpia (eso espero)
        
        return res.json({msg:"evento eliminado con exito",
            data: Evento})
         
 
        }catch (error){  
            console.error(error);
            return res.status(500).json({ mensaje: "Error en el servidor", error: error.message });
    }


}

const update = async (req,res)=>{
   
    const id = req.params.id;
      const eventUpdates = req.body;// guardo la contrasen apara encryptarla
  
      try{
  
  
         
          const upDateEvent = await events.findByIdAndUpdate(id, eventUpdates,{new:true})
  
          if (!upDateEvent) {
            return res.status(404).json({ mensaje: "Evento no encontrado" });
        }

          const newEventoModificado = {
            nombre : upDateEvent.nombre,
           descripcion : upDateEvent.descripcion,
            fecha: upDateEvent.fecha,
           ubicacion:  upDateEvent.ubicacion, 
            tipoDeporte:  upDateEvent.tipoDeporte,
            organizador:upDateEvent.neganizador,
            updatedA: upDateEvent.updatedA  
     
          }
          
          
          return res.json({mensaje: "se modifico con exito", 
            newEventoModificado} )
  
    
      }catch (error){  
        console.error(error);
        return res.status(500).json({ mensaje: "Error en el servidor", error: error.message });
   
      }  
  } 


module.exports = { getEvents, addEvent, eventUni, evendelete,update }   

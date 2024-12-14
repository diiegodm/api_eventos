 const supertest = require("supertest")
 const server = require("../index")


  const api = supertest(server);

  describe("get/ "/",", ()=>{

     test ("retornar lista de enventos", async ()=>{

        const response = await api.get("events/");
        //verificar la respuesta condigo de rspuesta 200

        expect(response.status).tobe(200)
     })
    
  })
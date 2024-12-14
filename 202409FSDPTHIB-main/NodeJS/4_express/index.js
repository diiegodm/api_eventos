//imports
const express = require('express');

// creando el servidor con express
const server = express();

// configurar
server.use(express.json());

//puerto mediante el cual se ejecutara el servidor
const port = 4000;
server.listen(port, () => {
  console.log(`Servidor corriendo por : http://localhost:${port}`);
});
//rutas--> metodos
/*
    post --> create --> enviar datos al servidor, registrar, login, hacer compras
    get--> read --> devolver o consultar datos, listados, detalles, filtros (BD)
    put --> update --> editar datos que existen, editar perfil de usuario, modificar cant de un carrito de compra
    delete --> delete--> eliminar o borraR datos, eliminar un cuenta, eliminar contactos, eliminar post
*/
const products = [
  { name: 'pantalon', price: 50 },
  { name: 'falda', price: 46 },
  { name: 'camiseta', price: 15 },
];
//modulo de rutas
const routerProduct = express.Router();
//listar todos los productos
routerProduct.get('/listproduct', (req, res) => {
  //buscar en un fichero
  //buscar en la BD. buscar Array
  //devolver una respuesta--> json, pdf, html
  res.json(products);
});
//mostrar los productos con precio mayor a 40
routerProduct.get('/productprice', (req, res) => {
  const filterProduct = products.filter((item) => item.price > 40);
  res.json(filterProduct);
});
//añadir un nuevo producto
routerProduct.post('/addproduct', (request, response) => {
  //body--> enviar grander volumnenes de datos, añadir un registro nuevo, cuando hay datos sensible
  //recibimos los datos
  const newProduct = request.body; //{ name: 'xyz', price: 0 },
  //guardamos los datos--> array
  products.push(newProduct);
  //devolver una respuesta--> json
  response.json({
    success: true,
    message: 'Producto agregado con exito',
    data: products,
  });
});

/*
parametros para mandar información al servidor
1.- Body--> body params
2.- url params --> id, filtrado,
3.- query params --> filtro, ordenamiento, paginacion, 
4.- authorization params --> token de autenticación -> 
*/
routerProduct.get('/filterproduct/:data', (req, res) => {
  console.log(req.params);
  //const info = req.params.data;
  const { data } = req.params;
  const filterProduct = products.filter((item) => item.name === data);
  res.json(filterProduct);
});

server.use('/product', routerProduct);

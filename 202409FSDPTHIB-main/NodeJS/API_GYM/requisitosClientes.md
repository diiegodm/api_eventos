# API Clientes

## Recuperar todos los clientes

URL: /api/clientes
MÉTODO: GET

Respuesta:

- Responde con un array incluyendo todos los clientes

```json
[
  { "name": "ana", "age": 25 },
  { "name": "ana", "age": 25 }
]
```

## Crear un nuevo cliente

URL: /api/clientes
MÉTODO: POST
HEADERS: X
BODY: nombre, apellidos, direccion, email, edad, dni

Respuesta:

- Respondo con los datos del nuevo cliente

## Recuperar un único cliente

URL: /api/clientes/{CLIENTEID}
MÉTODO: GET

Respuesta:

- Responde con el objeto que representa al cliente cuyo id es CLIENTEID

## Recuperar una lista de clientes en un rango de edades

URL: /api/clientes/edad/min/{EDADMIN}/max/{EDADMAX}
MÉTODO: GET
Respuesta:

- Un array con todos los clientes en ese rango de edad

## Actualización completa de un cliente

URL: /api/clientes/:clienteId
req.params.clienteId -> ID del cliente a actualizar

MÉTODO: PUT
HEADERS: X

BODY: nombre, apellidos, direccion, email, edad, dni
req.body -> Datos para la actualización

Respuesta:

- Los datos del cliente actualizado

## Borrado de un cliente

URL: /api/clientes/{CLIENTEID}
MÉTODO: DELETE
HEADERS: X
BODY: X

Respuesta:

- Los datos del cliente borrado

1. Método en el modelo - deleteById
2. Método en el controlador - deleteCliente
3. Ruta - ya debería estar
4. Dentro del método del controlador
   1. Borramos
   2. Respondemos con el cliente borrado

# Creación del CRUD

- [x] Generación fichero routes/api.routes.js
- [x] Desde app.js mandamos todas las peticiones que empiezan por /api al fichero anterior
- [x] Generación fichero routes/api/clientes.routes.js
- [x] Desde api.routes.js mandamos todas las peticiones que empiezan por /api/clientes al fichero anterior
- Generar el controlador, los métodos necesarios y las rutas en el fichero clientes.routes.js

```bash
GET /api/clientes

###
POST /api/clientes
Content-Type: application/json

{
    OBJETO CON LOS CAMPOS
}

###
PUT /api/clientes/342
Content-Type: application/json

{
    OBJETO CON LOS CAMPOS
}

###
DELETE /api/clientes/4381
```

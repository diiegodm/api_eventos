# API Usuarios

## enlaces usados en la api usuarios

URL: /api/users/register
MÉTODO: post

URL: /api/users/login
MÉTODO: post

URL: /api/users/deleteusrt/:id
MÉTODO: delete

URL: /api/users/profile/:id
MÉTODO: put

URL: /api/users/update/:id
MÉTODO: put




## Crear un nuevo ususrio

URL: /api/users/register
MÉTODO: POST
BODY: name, username, password,evento

Respuesta:


- Respondo con los datos del nuevo usuario, es lo que vera el usuario

```js
{
  "mensaje": "te haz registrado con exito",
    "resuser": {
        "name": "diego arevalo",
        "username": "diiego arevalo",
        "evento": "futbol femenino  "
    }
}

```
los datos que se almacenaran en la data--

```js
{
   name: 'diego arevalo',
  username: 'diiego arevalo',
  password: '$2a$10$q63Vwj0ZhvU79Ie/XJuhX.b5F/i5zudJLP8mgqo8i6NhxCh80T8bS',
  evento: 'futbol femenino  ',
  role: 1,
  _id: new ObjectId('67546b54125675a87643f32b'),
  createdAt: 2024-12-07T15:35:48.454Z,
  updatedAt: 2024-12-07T15:35:48.454Z
}

```

## hacer un login 

URL: /api/users/login
MÉTODO: post

Respuesta:

 Respuesta al usuario, es lo que vera el usuario
```js
 {"message":" felicidades Login exitoso"}

 ```
 Respuesta en consola, solo en consola se podra ver el token 

```js
 {"message":" felicidades Login exitoso","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc1NDZkMWYyOGM1Njc3NTNhOTUxNjAxIiwidXNlciI6ImRpaWVnbyBhcmV2YXhsbyIsInJvbGUiOjEsImlhdCI6MTczMzU4NjU5NH0.oJRwVchrrVm7hMm-L9xHEDUkkYP35W5P0ZLn30Awn8U"}
```


## Eliminar un usuario (solo sera por un admin)

URL: /api/users/deleteusrt/:id
MÉTODO: put

HEADERS: req.params.id

se buscara e indentificara individualmente por el ID

Respuesta:

- Un array con un json si el token no existe(no ha iniciado sesion)

```js
 {"message":" debe incluir un token"}

 ```
- Un array con un json si el usuario no es admin
```js
 {"message":" el usuario no es admin "}

 ```

 - respuesta si todo es exitoso devolvera un array con datos del usuario eliminado (para usuarios)
```js
 {
    "mensaje": "usuario eliminado con exito",
    "Evento": {
        "name": "diego arevalo",
        "username": "diiego arevalo",
        "role": 1,
        "createdAt": "2024-12-06T19:12:14.337Z",
        "updatedAt": "2024-12-06T23:26:18.455Z"
    }
}
```



## Actualización completa de unusuario solo por admin

URL: /api/users/updste/:id
MÉTODO: put

MÉTODO: PUT

HEADERS: req.params.id

se buscara e indentificara individualmente por el ID

BODY: name, username, password, evento, role

req.body -> Datos para la actualización

Respuesta:


- Un array con un json si el token no existe(no ha iniciado sesion)

```js
 {"message":" debe incluir un token"}

 ```
- Un array con un json si el usuario no es admin
```js
 {"message":" el usuario no es admin"}

 ```

 - respuesta si todo es exitoso devolvera un array con datos del usuario modificado (para usuarios)

 ```js
{
    "name": "diego arevalo",
    "username": "diieego Arevalo",
    "role": 1,
    "createdAt": "2024-12-06T18:28:24.938Z",
    "updatedAt": "2024-12-06T23:01:06.897Z"
}
 ```

 - lo que se guardara en al base de datos 

  ```js
  id: new ObjectId('67534248a37a022271187201'),
  name: 'diego arevalo',
  username: 'diieego Arevalo',
  password: '$2a$10$mKvNUytVtj0nhrXfJ36XA.j0RcBqADaVxZ1P/LK9LXpkDT5wnrv/q',
  evento: 'futbol masculino',
  role: 1,
  createdAt: 2024-12-06T18:28:24.938Z,
  updatedAt: 2024-12-06T23:01:06.897Z,
  __v: 0
   ```

## buscar un usuario por ID

URL: /api/users/profile/:id
MÉTODO: put
HEADERS: X

HEADERS: req.params.id

se buscara e indentificara individualmente por el ID

Respuesta:

- Un array con un json si el token no existe(no ha iniciado sesion)

```js
 {"message":" debe incluir un token"}

 ```
- respuesta si todo es exitoso devolvera un array con datos del usuario eliminado (para usuarios)

```js
 {
    "name": "diego arevalo",
    "username": "diieego Arevalo",
    "role": 1,
    "createdAt": "2024-12-06T18:28:24.938Z",
    "updatedAt": "2024-12-06T23:01:06.897Z"
}
 ```

 
# Creación del CRUD

- [x] Generación fichero routes/api.routes.js
- [x] Desde app.js mandamos todas las peticiones que empiezan por /api al fichero anterior
- [x] Generación fichero routes/api/users.routes.js
- [x] Desde api.routes.js mandamos todas las peticiones que empiezan por /api/users al fichero anterior
- Generar el controlador, los métodos necesarios y las rutas en el fichero users.routes.js

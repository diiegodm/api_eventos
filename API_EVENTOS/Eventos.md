# API eventos

## enlaces usados en la api eventos 

URL: /api/events/
MÉTODO: get

URL: /api/egvents/:id
MÉTODO: get

URL: /api/events/
MÉTODO: post

URL:  /api/events/:id
MÉTODO: put

URL:  /api/events/:id
MÉTODO: delete





## buscar todos los eventos 

URL: /api/events/
MÉTODO: get


Respuesta:

- Respondo con los datos del nuevo usuario, es lo que vera el usuario

```js
{
  {
        "nombre": "champions masculina",
        "descripcion": "32 equipos de toda la ciudad",
        "fecha": "2025-03-09T00:00:00.000Z",
        "tipo de deporte": "futbol"
        "ubicacion": " madrid",
        "organizador": "adiego arevalo "
    }
}

```



## obtener evento unico 

URL: /api/events/:id
MÉTODO: get

HEADERS: req.params.id


Respuesta: esto veran los usuarios 
```js
{
  {
        "nombre": "champions masculina",
        "descripcion": "32 equipos de toda la ciudad",
        "fecha": "2025-03-09T00:00:00.000Z",
        "deporte" : "futbol",
        "ubicacion": " madrid",
        "organizador": "adiego arevalo "
    }
}


```


## agregar un evento (solo se hara  por un admin)

URL: /api/events/
MÉTODO: post

BODY: nombre, descripcion,fecha,deporte,ubicacion,organizador

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
    "mensaje": "el evento ha sido agregado con exito",
    "event": {
        "nombre": "champions masculina",
        "descripcion": "32 equipos de toda la ciudad",
        "fecha": "2025-03-09T00:00:00.000Z",
        "ubicacion": " madrid",
        "organizador": "adiego arevalo "
    }
}
```



## Actualización completa de un evento (solo se hara  por un admin)

URL:  /api/events/:id
MÉTODO: put

HEADERS: req.params.id
BODY: nombre, descripcion,fecha,deporte,ubicacion,organizador

se buscara e indentificara individualmente por el ID


Respuesta:


- Un array con un json si el token no existe(no ha iniciado sesion)

```js
 {"message":" debe incluir un token"}

 ```
- Un array con un json si el usuario no es admin
```js
 {"message":" el usuario no es admin"}

 ```

 - respuesta si todo es exitoso devolvera un array con datos delevento modificado (para usuarios)

 ```js
{
    "mensaje": "se modifico con exito",
    "newEventoModificado": {
        "nombre": "futbol femeninosdww",
        "descripcion": "32 equipos de todo el barrio",
        "fecha": "2024-03-09T00:00:00.000Z",
        "ubicacion": "madridd",
        "tipoDeporte": " futfol"
    }
}
 ```



## eliminar un evento 

URL: /api/events/:id
MÉTODO: delete
HEADERS: X

HEADERS: req.params.id

se buscara e indentificara individualmente por el ID

Respuesta:

- Un array con un json si el token no existe(no ha iniciado sesion)

```js
 {"message":" debe incluir un token"}

 ```

 - Un array con un json si el usuario no es admin
```js
 {"message":" el usuario no es admin"}

 ```

- respuesta si todo es exitoso devolvera un array con datos del evento eliminado (para usuarios)

```js
{
    "msg": "evento eliminado con exito",
    "data": {
        "nombre": "futbol femeninosdww",
        "descripcion": "32 equipos de todo el barrio",
        "fecha": "2024-03-09T00:00:00.000Z",
        "deporte": " futfol",
        "ubicacion": "madridd",
        "organizador": "andres  sosa"
    }
}
 ```

 
# Creación del CRUD

- [x] Generación fichero routes/api.routes.js
- [x] Desde app.js mandamos todas las peticiones que empiezan por /api al fichero anterior
- [x] Generación fichero routes/api/events.routes.js
- [x] Desde api.routes.js mandamos todas las peticiones que empiezan por /api/users al fichero anterior
- Generar el controlador, los métodos necesarios y las rutas en el fichero events.routes.js


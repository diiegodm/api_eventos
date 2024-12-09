# API eventos


- esta API nos proporcia los evetos que estan programados en diferentes localidades, distintas fechas y sus diferentes disiplinas.


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
 
 
-al usar esta direccion veremos todos los eventos programados 

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

```js
 URl = http://localhost:3400/api/users/update/6756227af22f3491e9814eba

 ```


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

debemos enviar atravez del body los elemtos que vamos a agregar 
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
        "organizador": "diego arevalo "
    }
}
```



## Actualización completa de un evento (solo se hara  por un admin)

URL:  /api/events/:id
MÉTODO: put

HEADERS: req.params.id

buscamos el elemntos o evento individual por medio del id 

```js
 URl = http://localhost:3400/api/users/update/6756227af22f3491e9814eba

 ```
 
BODY: nombre, descripcion,fecha,deporte,ubicacion,organizador

agregamos los datos que vamos a modificar para guardarlo de nuevo 
```js
 {
        "nombre": "champions masculina",
        "descripcion": "32 equipos de toda la ciudad",
        "fecha": "2025-03-09T00:00:00.000Z",
        "ubicacion": " madrid",
        "organizador": "diego arevalo "
  }

```



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

buscamos el elemntos o evento individual por medio del id 

```js
 URl = http://localhost:3400/api/users/update/6756227af22f3491e9814eba

 ```

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


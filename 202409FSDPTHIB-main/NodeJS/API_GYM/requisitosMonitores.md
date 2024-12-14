# API Monitores

## Recuperación de todos los monitores

URL: /api/monitores
MÉTODO: GET

Respuesta:

- Un array con todos los monitores de la tabla

## Recuperación de todos los monitores con X años de experiencia o más

URL: /api/monitores/exp-min/7
MÉTODO: GET

Respuesta:

- Un array con todos los monitores que tenga X o más años de experiencia

## Recuperación de todos los monitores con X años de experiencia o menos

URL: /api/monitores/exp-max?num=10
MÉTODO: GET
HEADERS: X
BODY: X

Respuesta:

- Un array con todos los monitores que tengan como máximo X años de experiencia.

## Recuperación de todos los monitores con sus clientes asociados

URL: /api/monitores/clientes
MÉTODO: GET
HEADERS: X
BODY: X

Respuesta:

- Un array con todos los monitores y sus clientes

```js
[
  {
    id: 1,
    nombre: "Mario",
    experiencia: 23,
    clientes: [
      { nombre: "", apellidos: "" },
      { nombre: "", apellidos: "" },
      { nombre: "", apellidos: "" },
    ],
  },
  {
    id: 2,
    nombre: "Laura",
    experiencia: 12,
    clientes: [{ nombre: "", apellidos: "" }],
  },
];
```

# A tener en cuenta

- No tenemos ningún fichero para monitores (rutas, controller, modelo)
- Hay que crear la ruta base /api/monitores (api.routes)
- Cuanto más trabajo hagamos en el modelo, más sencillo será el controlador (Fat Model Skinny Controller);

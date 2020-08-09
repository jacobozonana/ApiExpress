const express = require('express');
const app = express(); //express es una funcion y la instansio a app

// http://localhost:8000/

app.get('/', (request, response)=>{
    response.send('Hola Mundo')
})

// http://localhost:8000/jacobo

app.get('/jacobo', (request, response)=>{
    response.send({
       'Nombre': 'Jacobo Zonana',
       'Edad': 41,
       'Fecha': '9 Enero 1979'
    })
})

// http://localhost:8000/saludar/Jacobo/Zonana esta si da entrada
// http://localhost:8000/saludar/David/Zonana esta marca error

app.get('/saludar/:name/:lastname', (request, response)=>{
    console.log(request) //este console.log pone todo el objeto, params es donde esta la info que yo quiero
    const { name, lastname } = request.params;
        // response.send(`Hola ${name}`) //Aqui se puede poner cualquier logica if etc.
        if (name === 'Jacobo'){
            response.status(200).json({'respuesta':`Hola ${name} ${lastname}, Bienvenido!`})
        }else {
            response.status(400).json(`Hubo un error en esta url denegado!`)
            
        }
    })
// http://localhost:8000/mayores?edad=17

    app.get('/mayores/', (request, response)=>{
        console.log(request.query)
        const { edad } = request.query
        if (edad >=18){
            response.send('Bienvenido')
        }else{
            response.send('Vete Menor!')
        }
        })

app.listen(8000, ()=>{
    console.log('Esta vivo en el puerto 8000')
})
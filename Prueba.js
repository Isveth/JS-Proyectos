
    //ARREGLOS
    //Proximo en fila

    function pEnFil(arr,num){
        arr.shift()
        arr.push(num)
        return arr
    }
    
    //CONTEO DE CARTAS

    var conteo = 0

    function cont(cart){
       if (cart==2 || cart==3 || cart==4 || cart==5 || cart==6){
           conteo+=1
       }
       else if (cart==10 || cart=='J' || cart=='Q'|| cart=='K' || cart=='A'){
           conteo-=1
       }
       if (conteo >0){
           return 'Apuesta! tu conteo es igual a: '+conteo
       }
       else{
        return 'Espera! tu conteo es igual a: '+conteo
       }
    }

    //ARREGLOS ANIDADOS MODIFICACION

    var coleccionDeDiscos = {
        7853: {
            tituloAlbum: 'Bee Gess Greatest',
            artista: 'Bee Gess',
            canciones: ['Stay', 'leave']
        },

        5439: {
            tituloAlbum: 'Rafa gold'
        }
    }

    function actualizarDiscos(discos,id,propiedad,valor){
        if(valor==''){
            delete discos.id.propiedad
        }
        if(propiedad=='canciones'){
           discos[id][propiedad] = discos[id][propiedad] || []
           discos.push(valor)
        }
        if(valor!='' && propiedad!='canciones'){
            discos[id][propiedad]=valor
        }
    }

    /*CICLO WHILE: No se tiene un numero especifico de veces
                   a iterar, Se conoce la condicion a cumplir 
                   para que el proceso cintinue
    */

    /*CICLO FOR:   Se tiene un numero de veces a ejecutar
                   var i=0;1< n;i++
    */

    /*CICLO DO WHILE:   Hacer algo luego evaluar la condicion.
                        Se ejecuta por lo menos una vez
    */

    //LISTA DE CONTACTOS

    var contactos = [
        {
            nombre: 'Noera',
            apellido: 'Nav',
            numero: '052435679',
            gustos: ['Pizza','Programacion']
        },
        {
            nombre: 'Harry',
            apellido: 'Potter',
            numero: '024565798',
            gustos: ['Magia','Jazz']
        },
        {
            nombre: 'Sherlock',
            apellido: 'Holmes',
            numero: '052435453',
            gustos: ['Misterio','Roñar']
        }
    ]

    function buscarPerfil(nombre, propiedad){
        i=0
        while(nombre!=contactos[i].nombre){
            i++
        }
        return contactos[i][propiedad] || 'La propiedad no existe'
    }

    //CONDICIONES TERNARIAS: Condicion a evaluar ? valorSiVerdadero : valorSiFalso

    function comp(a,b){
        return a==b ? 'a y b son iguales' : (a>b ? 'a es mayor que b' : 'b es mayor que a')
    }

    // Var: Permite declarar una variable con el mismo nombre varias veces
    // let: solo permite declarar a la variable una vez y no se puede acceder
    //        por fuera del bloque de codigo en la que fue declarada
    // Const: No se puede modificar el valor que ya ha sido declarado
    // Object.freeze(objeto): no permite el cabio del objeto
    /*FUNCIONES FLECHA (tambien anonimas): toma los parametros en () y retorna
                                           lo que esta despues de la flecha
    
    ... al usar los trespuntos mas una palabra, se genera un 
    arreglo llamado como lo pongas despues de los 3 puntos */

    // DEFINICION DE OBJETOS con METODOS

    const persona = {
        nombre: 'Isabel',
        presentarse() {
            return `Hola! mi nombre es ${this.nombre}`
        }
    }

    // Llamando al METODO

    persona.presentarse()

    // CREACION DE OBJETOS

    const crearPersona = (nombre, edad, idioma)=>({nombre, edad, idioma})
    // Retorna un objeto con las propiedades nombre, edad e idioma

    //CLASES (actua casi como objeto) Plantilla de objeto

    class TrasnbordadorEspacial {
        constructor(planetaDestino){ //Propiedades de la clase
            this.planetaDestino = planetaDestino;
        }
    }

    var zeus = new TrasnbordadorEspacial('Jupiter') // Traspordador espacial 
                                                    // con Jupiter como planeta de destino

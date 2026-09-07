/**
 *  Nivel 1: agregar_libro(titulo, autor) y listar_libros() (ordenado alfabéticamente).
 *  Comprobación: si alguien *modifica lo que devuelve listar_libros(),
 *  el estado interno de la biblioteca no debe cambiar.
 */

class Biblioteca {
  #coleccion; //renonbrado de #libros a #coleccion puesto que alberga 3 tipos de formatos

  constructor() {
    this.#coleccion = [];
  }

  agregar_libro(titulo, autor) {
    const nuevoLibro = new Libro(titulo, autor) ;
    this.#coleccion.push(nuevoLibro);
    return nuevoLibro;
  }

  agregar_revista(titulo, numeroEdicion) {
    const nuevaRevista = new Revista(titulo, numeroEdicion) ;
    this.#coleccion.push(nuevaRevista);
    return nuevaRevista;
  }

   agregar_dvd(titulo, genero) {
    const nuevoDVD = new DVD(titulo, genero) ;
    this.#coleccion.push(nuevoDVD);
    return nuevoDVD;
  }

  prestar(item) {
    const dias = item.obtenerPlazo();
    const fechaDevolucion = new Date(); // objeto nativo de JavaScript
    fechaDevolucion.setDate(fechaDevolucion.getDate() + dias); 
    // getDate(), método del objeto Date. Lee el día y lo transforma en un número y setDate() actualiza la fecha con la suma con dias.
    console.log(`Préstamo de "${item.titulo}": Devolver en ${dias} días (Fecha: ${fechaDevolucion.toLocaleDateString()})`);
    /* se usan los "Template literals" de JS para concatenar una cadena con valores de métodos. toLocalDateString transforma la fecha en una cadena de texto legible
    *  07-09-2026 (ejemplo)
    */
    return fechaDevolucion; // fecha del resultado de la suma 
  }

 /* Correspondiente al nivel 1
  listar_libros() {
    const copia = Array.from(this.#coleccion); // se puede usar este método o el "Spread Syntax"

    copia.sort((a, b) => a.titulo.localeCompare(b.titulo)); //función con flechita =>

    return copia;
  } */
}



/* ======================================================================================
  Nivel 2: 
  añade Revista y DVD — cada uno con sus propios campos (no tienen por qué coincidir con los de Libro) y su propio plazo de préstamo (Libro=15 días, Revista=7, DVD=3). Necesitas poder añadir los tres tipos (agregar_libro ya lo tenías del nivel 1, ahora te falta el equivalente para los otros dos). prestar(item) es un único método que sirve para los tres tipos —Libro incluido— y calcula la fecha de devolución según el tipo del item que reciba.
  Comprobación: añadir un tipo nuevo de item con su propio plazo no debe requerir tocar ni una línea del método prestar(). 
 ======================================================================================*/

class Libro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }
  obtenerPlazo() {
    return 15; // <---días
  }
}

class Revista {
  constructor(titulo, numeroEdicion) {
    this.titulo = titulo;
    this.numeroEdicion = numeroEdicion;
  }
  obtenerPlazo() {
    return 7; // <---días
  }
}

class DVD {
  constructor(titulo, genero) {
    this.titulo = titulo;
    this.genero = genero;
  }
  obtenerPlazo() {
    return 3; // <---días
  }
}
/*==========================
Comprobación del nivel 2
==============================*/ 

const miBiblioteca = new Biblioteca();

// Agregamos e instanciamos elementos
const libro = miBiblioteca.agregar_libro("Dune", "Frank Herbert");
const revista = miBiblioteca.agregar_revista("National Geographic", 2024);
const dvd = miBiblioteca.agregar_dvd("Inception", "Ciencia Ficción");

console.log("--- PRUEBA DE PRESTAMOS POLIMÓRFICOS ---");
miBiblioteca.prestar(libro);   // Suma 15 días
miBiblioteca.prestar(revista); // Suma 7 días
miBiblioteca.prestar(dvd);     // Suma 3 días
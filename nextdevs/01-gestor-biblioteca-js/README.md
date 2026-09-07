# 📚 Reto #1 — Gestor de Biblioteca (JS Vanilla)

¡Buenas! Este es mi código para resolver el primer desafío semanal lanzado en la comunidad de **NEXTDEVS**.

---

## 👥 ¿Qué es NEXTDEVS?

Es una comunidad en Discord creada para desarrolladores que buscan aprender, compartir conocimiento y mejorar sus habilidades técnicas a través de la práctica constante, debates sobre código y retos semanales.

---

## 🎯 El Desafío

El reto propone construir un sistema de gestión de biblioteca aplicando buenas prácticas de diseño de software (inmutabilidad, polimorfismo y desacoplamiento), sin depender de librerías ni frameworks externos.

Se estructuró en 3 niveles de complejidad progresiva:

### 🟢 Nivel 1: Métodos Básicos e Inmutabilidad
- Implementar `agregar_libro(titulo, autor)` y `listar_libros()` (ordenado alfabéticamente).
- **Comprobación clave:** Si alguien modifica el resultado devuelto por `listar_libros()`, el estado interno de la biblioteca no debe verse afectado.

### 🟡 Nivel 2: Polimorfismo y Plazos de Préstamo
- Añadir **Revistas** y **DVDs**, cada uno con campos propios y plazos de préstamo distintos (Libro: 15 días, Revista: 7 días, DVD: 3 días).
- Crear un método único `prestar(item)` que funcione para los tres tipos y calcule automáticamente la fecha de devolución.
- **Comprobación clave:** Añadir un nuevo tipo de elemento en el futuro no debe requerir modificar ni una sola línea del método `prestar()`.

### 🔴 Nivel 3: Notificaciones Desacopladas
- Permitir que un usuario pida que le avisen cuando un elemento prestado quede libre.
- **Comprobación clave:** La clase `Biblioteca` no debe contener código relacionado con el envío o formato de las notificaciones al usuario.

---

## 🛠️ Tecnologías y Enfoque

- **Lenguaje:** JavaScript (Vanilla / ES6+).
- **Conceptos aplicados:** Clases ES6, copias superficiales/profundas para evitar mutación de memoria, *Duck Typing* y arquitectura orientada a eventos.

---

## 🚀 ¿Cómo ejecutarlo?

**Descargar solo esta carpeta (Recomendado)**
```bash
npx degit tu-usuario/code-challenges/nextdevs/01-gestor-biblioteca-js gestor-biblioteca
cd gestor-biblioteca
node src/index.js
```

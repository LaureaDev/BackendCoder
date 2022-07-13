class Persona  {
    constructor(nombre, apellido, mascota, books) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascota = mascota;
    }
    getFullName () {
        return `${this.nombre} ${this.apellido}`;
    }

    getMascota () {
        return this.mascota;
    }
    addBook () {
        this.books;
    }
   
}





const persona1 = new Persona('Juan', 'Perez', ['gato1', 'gato2']  );
const persona2 = new Persona('Maria', 'López', ['perro1', 'perro2']);


console.log(persona1.getFullName());
console.log(persona1.getMascota());


console.log(persona2.getFullName());
console.log(persona2.getMascota());

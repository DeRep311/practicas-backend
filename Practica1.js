class Usuario {
  constructor(nombre, apellido) {
    
      this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
    
  }
  getFullName(){
    return (`${this.nombre} ${this.apellido}`);
  }
  addMascota(nomM){
    this.mascotas.push(nomM);
  }
  countMascotas(){
    return this.mascotas.length;
  }
  addBook(nombre,autor){
    this.libros.push({Nombre:nombre, Autor: autor});
    
   
  }
  getBookNames(){

   let nom=this.libros.map(function(current){
     return (current.Nombre);

   })
  }


}


const usuario = new Usuario(`Lucas`, "De Armas");
usuario.getFullName();
usuario.addMascota("Chester");
usuario.countMascotas();
usuario.addBook("Detectives en el cementerio central", "Helen Velando");
usuario.getBookNames();

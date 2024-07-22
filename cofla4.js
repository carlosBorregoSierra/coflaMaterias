const materias = {
	fisica: ["Perez","pedro","pepito","cofla","maria"],
	programacion: ["Carlos","Salo","Luis","pipe","Ledis"],
	logica: ["Hernandez","pedro","maria","Chepo","pipe"],
	quimica: ["rodriguez","pedro","juan","julio","maria"]
}

const inscribir = (alunmno, materia)=>{
	let personas = materias[materia];
	personas.shift(); 
	let alumnos = personas;
}
document.write(materias["fisica"]);
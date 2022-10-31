const nombre = "Sergio"
const apellido = "Pacheco"
const estudiante = nombre.concat("").concat(apellido)

const estudianteMayus = estudiante.toUpperCase()
const estudianteMinus = estudiante.toLowerCase()//

const estudianteLength = estudiante.length

const inicialNombre = nombre[0]

const finalApellido = apellido[apellido.length -1]

const estudianteSinEspacio = estudiante.replace(/ /g,"")

const nombreEnEstudiante = estudiante.includes(nombre)
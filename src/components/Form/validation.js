export default function validation(imputs){

const errors = {}; 
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^ (?=\w*\d)\${6,10}$/;
const regexNumber = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;

if (!regexEmail.test(imputs.username)) {
    errors.username = "Debe ser un correo electronico"
}
if (!imputs.username) {
    errors.username="No puede estar vacio"
}

if (imputs.username.length > 35) {
    errors.username = "El nombre de usuario no puede ser mayor a 35 caracteres"

}
if (!regexNumber.test(imputs.password)) {
    errors.password = "La contraseña debe tener al menos un numero"
}

if (regexPassword.test(imputs.password)) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres"

}

return errors; 

}
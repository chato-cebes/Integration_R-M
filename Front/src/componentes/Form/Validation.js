const Validation = (userData) => {

    let errors = {};
     
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)){
       errors.username = "El E-mail es inválido";
    }
    if (!userData.username){
       errors.username = "Este campo no puede estar vacío";
    }
    if (userData.username.length > 35){
       errors.username = "El E-mail no puede superar los 35 caracteres";
    }

    if (!userData.password.match(/\d/)){
       errors.password = "La constraseña debe tener al menos un numero";
    }

    if (userData.password.length < 6 || userData.password.length > 10){
       errors.password = "La contraseña debe contener de 6 a 10 caracteres"
    }
   return errors;
}

export default Validation;
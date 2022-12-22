import React from "react";
import "./style.css" ;

const Form = ({ user, handleChange, handleSubmit, sucess, error }) => {
  const disabled = !(user.nombre && user.mail && user.telefono && user.mensaje)
  return (
    <div>
    <div class="container">
        	<div class="row">
			<h1>Contactanos</h1>
	        </div>
            <div class="row">
			<h4>Queremos leer tu mensaje!</h4>
	</div>
        <form onSubmit={handleSubmit} Method="POST">
        <div class="row input-container">
            <div class="col-xs-12">
              <div class="styled-input wide">
                <label htmlFor="nombre" required> </label>
                <input value={user.nombre} onChange={handleChange}type="text" name="nombre" placeholder="Ingrese su nombre"/>
              </div>
            </div>
          <div class="col-md-6 col-sm-12">
            <div class="styled-input">
              <label htmlFor="telefono" type="number" required></label>
              <input value={user.telefono} onChange={handleChange} type="number" name="telefono" placeholder="Ingrese su telefono"/>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="styled-input" style={{float:"right"}}>
              <label htmlFor="mail" required></label>
              <input value={user.mail} onChange={handleChange} type="email"name="mail" placeholder="Ingrese su correo"/>
            </div>
          </div>
            <div class="col-xs-12">
              <div class="styled-input wide">
                <label htmlFor="mensaje" required></label>
                  <textarea value={user.mensaje} onChange={handleChange} name="mensaje" placeholder="Ingrese su mensaje"/>
                     <input class="btn-lrg submit-btn" disabled={disabled} type="submit"/>
              </div>
            </div>
        </div>
        </form>
      {sucess && <p>Mensaje enviado correctamente!</p>}
      {error && <p>Ocurrio un error al intentar enviar el mensaje!</p>}
    </div>
    </div>

  );
};

export default Form;

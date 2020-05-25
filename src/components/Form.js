import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Form = ({ createAppointment }) => {

  // Crear State de citas
  const [medicalAppointment, setMedicalAppointment] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  })

  const [errorValidation, setErrorValidation] = useState(false);

  // funcion que se ejecuta cuando el usuario escribe en un input
  const handleChange = event => {

    setMedicalAppointment({
      ...medicalAppointment,
      [event.target.name] : event.target.value
    })
  }

  // Extraer los valores del usuario
  const { mascota, propietario, fecha, hora, sintomas } = medicalAppointment;

  // Cuando el usuario guarda los datos
  const handleSubmit = event => {
    event.preventDefault();

    // Validar los campos
    if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      setErrorValidation(true);
      return;
    }

    // Eliminar el error
    setErrorValidation(false);
    // Asignar un ID
    medicalAppointment.id = uuid();

    // Crear la cita
    createAppointment(medicalAppointment);


    // Reiniciar el Form
    setMedicalAppointment({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    })
  }

  return (
    <Fragment>
      <h2>Crear la Cita</h2>

      { errorValidation ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null }

      <form
        onSubmit={ handleSubmit }
      >
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={ handleChange }
          value={mascota}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la mascota"
          onChange={ handleChange }
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={ handleChange }
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={ handleChange }
          value={hora}
        />
        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={ handleChange }
          value={sintomas}
        ></textarea>

        <button
          type="submit"
          className="u-full-width button-primary"
        >Agregar Cita</button>
      </form>
    </Fragment>
   );
}

Form.propTypes = {
  createAppointment: PropTypes.func.isRequired
}
export default Form;
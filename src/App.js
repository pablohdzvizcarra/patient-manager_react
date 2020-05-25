import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

  // Citas en local storage
  let initialAppointment = JSON.parse(localStorage.getItem('appointmentList'));

  if (!initialAppointment) {
    initialAppointment = [];
  }

  // Arreglo de citas
  const [appointmentList, setAppointmentList] = useState(initialAppointment);

  // useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
    let initialAppointment = JSON.parse(localStorage.getItem('appointmentList'));

    if (initialAppointment) {
      localStorage.setItem('appointmentList', JSON.stringify(appointmentList));
    } else {
      localStorage.setItem('appointmentList', JSON.stringify([]));
    }
  }, [appointmentList] );

  // funcion que tome las citas actuales y agrege la nueva
  const createAppointment = medicalAppointment => {
    setAppointmentList([
      ...appointmentList,
      medicalAppointment
    ])
  }

  // funcion que elimina una cita por su ID
  const deleteAppointment = id => {
    const newAppointment = appointmentList.filter(appointment => appointment.id !== id);
    setAppointmentList(newAppointment);
  }

  // Mensaje condicional
  const tittle = appointmentList.length === 0 ? "No hay citas" : 'Administra tus citas';

  return (
    <Fragment>
      <h1>Tus citas Medicas</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            < Form
              createAppointment={ createAppointment }
            />
          </div>
          <div className='one-half column'>
            <h2>{tittle}</h2>
            { appointmentList.map( appointment => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;

import React, { Fragment, useState } from 'react';
import Form from './components/Form'

function App() {

  // Arreglo de citas
  const [appointmentList, setAppointmentList] = useState([]);

  // funcion que tome las citas actuales y agrege la nueva
  const createAppointment = medicalAppointment => {
    setAppointmentList([
      ...appointmentList,
      medicalAppointment
    ])
  }

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
            2
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;


import { useState } from 'react';

const Formulario = () => {
      const [nombre, setNombre] = useState('');
      const [email, setEmail] = useState('');
      const [mensaje, setmensaje] = useState('')

  const manejarEnvio = (evento) => {
    evento.preventDefault()
    alert(`Form de: ${nombre} enviado \nEmail: ${email}\nMensaje: ${mensaje}`)
    setNombre('')
    setEmail('')
    setmensaje('')
  }

  return(
    <form onSubmit={manejarEnvio}>
        <h3>Contactanos para hacer tu reserva</h3>
      <input 
        type="text"
        value={nombre}
        onChange={evento => setNombre(evento.target.value)} required
        />
        <input 
        type="email"
        placeholder='Email'
        value={email}
        onChange={evento => setEmail(evento.target.value)} required
        />
        <textarea
        placeholder='Escribi tu consulta'
        value={mensaje}
        onChange={evento => setmensaje(evento.target.value)} required
        />
        
      <button type='submit'>Enviar</button>
    </form>
  );
}
export default Formulario
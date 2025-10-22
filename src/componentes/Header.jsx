import NavBar from "./NavBar"

const Header = () => {
    const estilo = {
    backgroundColor: '#2eafc6ff',
    color: '#0d0d10ff',
    textAlign: 'center',
    fontFamily: 'Poppins, sans-serif',
  }
  return (

      <div style={estilo}>
        <NavBar/>
      </div>
 



  )
}

export default Header
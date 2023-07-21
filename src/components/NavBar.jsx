

export const NavBar = () => {
  return (
    <header className="bg-gradient-to-b from-sky-800 to-sky-600 border flex min-w-screen justify-evenly md:px-5 py-4">

      <div>
        Todos los comics
      </div>

      <div>
        <form action="">
          <input type="text" placeholder="Buscar comics" />
          <input type="submit" value="Buscar" />
        </form>
      </div>

      <div>
        Login - Registrarse
      </div>

      <hr />
    </header>
  )
}

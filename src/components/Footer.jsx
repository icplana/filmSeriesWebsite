

export const Footer = () => {
  const date = new Date
  
  return (
    <footer className="text-center">
      <hr />
      <p className="py-4">
        Data provided by Marvel. © { date.getFullYear() } <a target="_blank" className="underline" href="https:\\marvel.com">Marvel</a>
      </p>
    </footer>
  )
}

import './App.css'
import Card from './components/Card'

function App() {
  return (
    <Card
      photo="./src/assets/img/profile.png"
      name="Ithallo Lima"
      // pronoum="Ele/Dele"
      occupation="Desenvolvedor Front-end"
      enterprise="Freelancer"
      country="Brasil"
      description="Apaixonado por CSS com suas bibliotecas e frameworks. Falo sobre tudo que envolve a área Front-end."
      social={
        {
          figma: 'ithallo',
          behance: 'ithallo',
          instagram: 'ithallolima',
        }
      } />
  )
}

export default App

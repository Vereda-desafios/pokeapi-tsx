import { Container, PokedexBackground } from './styles'
import pokeballImage from '../../assets/pokeball.png'

export function Header() {
  return (
    <Container>
      <PokedexBackground>
        <img src={pokeballImage} alt="Pokebola centralizada no header" />
      </PokedexBackground>
    </Container>
  )
}

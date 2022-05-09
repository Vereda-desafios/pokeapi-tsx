import { Container, PokedexBackground, SearchInputContainer } from './styles'
import pokeballImage from '../../assets/pokeball.png'
import searchIcon from '../../assets/magnifying-glass.png'

export function Header() {
  return (
    <Container>
      <PokedexBackground>
        <img src={pokeballImage} alt="Pokebola centralizada no header" />
      </PokedexBackground>
      <SearchInputContainer>
        <input type="text" id="searchIcon" />
        <label htmlFor="searchIcon">
          <img src={searchIcon} alt="Lupa para buscar pokemon" />
        </label>
      </SearchInputContainer>
    </Container>
  )
}

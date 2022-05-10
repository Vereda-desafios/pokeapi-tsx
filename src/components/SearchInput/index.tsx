import { SearchInputContainer } from './styles'
import searchIcon from '../../assets/magnifying-glass.png'

export function SearchInput() {
  return (
    <SearchInputContainer>
      <input type="text" id="searchIcon" />
      <label htmlFor="searchIcon">
        <img src={searchIcon} alt="Lupa para buscar pokemon" />
      </label>
    </SearchInputContainer>
  )
}

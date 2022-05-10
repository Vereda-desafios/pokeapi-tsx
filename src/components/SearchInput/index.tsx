import { SearchInputContainer } from './styles'
import searchIcon from '../../assets/magnifying-glass.png'
import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
}

export function SearchInput({ id, ...rest }: SearchInputProps) {
  return (
    <SearchInputContainer>
      <input type="text" id={id} {...rest} />
      <label htmlFor={id}>
        <img src={searchIcon} alt="Lupa para buscar pokemon" />
      </label>
    </SearchInputContainer>
  )
}

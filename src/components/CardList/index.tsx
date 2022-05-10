import { Container, ListContainer } from './styles'
import { SearchInput } from '../SearchInput'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Card } from '../Card'

interface PokemonsProps {
  name: string
  image_url: string
  types: {
    name: string
  }[]
}

export function CardList() {
  const [pokemonsList, setPokemonsList] = useState<PokemonsProps[]>([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
      const { results } = response.data

      results.forEach(async (pokemon) => {
        const response = await axios.get(pokemon.url)
        const { data } = response
        const pokemonDataFormatted = {
          name: data.name,
          image_url: data.sprites.front_default,
          types: data.types.map((pokemonType) => ({
            name: pokemonType.type.name,
          })),
        }

        setPokemonsList((previousState) => [
          ...previousState,
          pokemonDataFormatted,
        ])
      })
    }
    fetchData()
  }, [])

  const filteredPokemons = searchInput
    ? pokemonsList.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
      })
    : pokemonsList

  return (
    <Container>
      <SearchInput
        id="searchValue"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <h2>Pokédex</h2>
      <ListContainer>
        {filteredPokemons?.map((pokemon, id) => (
          <Card
            key={id}
            name={pokemon.name}
            image={pokemon.image_url}
            types={pokemon.types}
          />
        ))}
      </ListContainer>
    </Container>
  )
}

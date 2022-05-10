import { Container, PokemonInfo, PokemonImage } from './styles'
import pokeballImageBackground from '../../assets/poke-color-cinza.png'

interface PokemonProps {
  name: string
  image: string
  types: {
    name: string
  }[]
}

export function Card({ name, image, types }: PokemonProps) {
  return (
    <Container color={types[0].name}>
      <header>
        <h2>{name}</h2>
      </header>

      <div>
        <PokemonInfo>
          {types.map((type, id) => (
            <div key={id}>
              <p>{type.name}</p>
            </div>
          ))}
        </PokemonInfo>
        <PokemonImage>
          <img className="img-bg" src={pokeballImageBackground} />
          <img
            className="img-pokemon"
            src={image}
            alt={`Imagem em pixel art do pokemon ${name}`}
          />
        </PokemonImage>
      </div>
    </Container>
  )
}

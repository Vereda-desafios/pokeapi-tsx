import styled from 'styled-components'

interface ContainerColors {
  color: string
}

const pokemonsColors = {
  grass: '#13EF7A',
  fire: '#F95151',
  water: '#007AF1',
}

export const Container = styled.div<ContainerColors>`
  width: 100%;
  height: 180px;
  background: ${({ color }) =>
    pokemonsColors[color] ? pokemonsColors[color] : pokemonsColors.grass};
  border-radius: 25px;
  padding: 12px 8px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.04);
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      color: white;
      font-size: 19px;
      text-transform: capitalize;
    }
    p {
      color: #43734c;
      font-weight: bold;
    }
  }
  > div {
    margin-top: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const PokemonInfo = styled.div`
  div {
    width: fit-content;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 4px 8px;
    border-radius: 30px;
    box-shadow: 1px 1px 5px 2px rgba(50, 50, 50, 0.1);
    &:not(:first-child) {
      margin-top: 8px;
    }
    p {
      font-size: 13px;
      color: white;
      text-transform: capitalize;
    }
  }
`

export const PokemonImage = styled.div`
  position: relative;

  img.img-bg {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.4;
    z-index: 1;
    transition: transform 0.6s;
  }

  img.img-pokemon {
    position: relative;
    width: 100%;
    opacity: 1;
    z-index: 2;
    transition: 0.2s;
  }

  ${Container}:hover & {
    img.img-pokemon {
      transform: scale(1.1);
    }
    img.img-bg {
      transform: rotate(360deg);
    }
  }
`

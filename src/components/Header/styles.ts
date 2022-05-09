import styled from 'styled-components'
import PokedexBackgroundImage from '../../assets/top-pokedex.png'

export const Container = styled.header`
  width: 100%;
`

export const PokedexBackground = styled.div`
  width: 100%;
  height: 100px;
  background-image: url(${PokedexBackgroundImage});
  background-position: center;
  background-size: cover;
  margin-top: -4px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-top: -4px;
    width: 70px;
  }
`

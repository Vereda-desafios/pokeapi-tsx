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

export const SearchInputContainer = styled.div`
  width: 450px;
  height: 35px;
  box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  margin: 28px auto;

  input {
    width: 100%;
    height: 30px;
    border: 0;
    font-size: 18px;

    &:focus {
      outline: none;
    }
  }
`

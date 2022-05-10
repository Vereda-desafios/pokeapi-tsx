import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  h2 {
    text-align: center;
    font-size: 42px;
  }
`

export const ListContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 28px;
`

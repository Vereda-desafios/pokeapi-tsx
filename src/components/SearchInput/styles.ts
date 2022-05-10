import styled from 'styled-components'

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

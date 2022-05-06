import styled from 'styled-components'
export const ContainerSearch = styled.div`

display:flex;
align-items:center;
justify-content:center;
margin: 30px auto;
flex-direction: column;
font-family: Sans-serif;
width: 600px;
position: relative;


input{
    border: none;
    box-shadow: 3px 5px 8px 0px rgba(0,0,0,0.2);
    width: 600px;
    height: 40px;
    border-radius: 40px
    
}
img{
    position: absolute;
    right: 20px;
    top: 13px;
}
`
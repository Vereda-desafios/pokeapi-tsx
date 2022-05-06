import * as C  from './styles'
// @ts-ignore  
import imgPokeball from '../../Assets/pokeball.png'
// @ts-ignore  
import backgroundImg from '../../Assets/background.png'
const  Header = () => {

    return (
       
        <C.ContainerHeader>
            <img className="fundo"src={backgroundImg}></img>
            <img className="pokebola"src={imgPokeball}></img>
            </C.ContainerHeader>
    )
}

export default Header
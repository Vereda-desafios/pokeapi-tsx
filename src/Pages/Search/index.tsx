import * as C  from './styles'
// @ts-ignore  
import img from '../../Assets/search.png'


const  Search = () => {

    return (
        <>
        <C.ContainerSearch>
            <input>
            
            </input>
            <img src={img}/>
            <h1>Pokédex</h1>
            </C.ContainerSearch>
            
            </>
    )
}

export default Search
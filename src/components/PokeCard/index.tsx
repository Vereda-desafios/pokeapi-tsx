import { FC, useEffect, useState } from 'react'
import * as C from './styles'

interface Props  {
props: {
   url: string,
    name: string, 
}

}

type Pokemon = {
    name: string
}
export const PokeCard:FC<Props> = ({props}: Props) => {
    const [pokedata, setPokeData] = useState<Pokemon>({
        name: ""
    })
    useEffect(() => {
        fetch(`${props.url}`)
        .then(response => response.json())
        .then(data => {
          setPokeData({...data})
        })
      },[])

      console.log("data: ", pokedata.name)
    return (
        <C.Container>
        <p> {pokedata.name}</p>
        </C.Container>
    )
}
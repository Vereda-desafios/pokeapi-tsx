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
    id: number
}
export const PokeCard:FC<Props> = ({props}: Props) => {
    const [pokedata, setPokeData] = useState<Pokemon>({
        name: "",
        id: 0
    })
    useEffect(() => {
        fetch(`${props.url}`)
        .then(response => response.json())
        .then(data => {
          setPokeData({...data})
        })
      },[])

      console.log("data: ", pokedata.name, pokedata.id)
    return (
        <C.Container>
       
        <C.Card>
            <C.Image/>
            <C.Number>#{pokedata.id}</C.Number>
            <C.Type></C.Type>
            <C.Name>{pokedata.name}</C.Name>
        </C.Card>
        
        </C.Container>
    )
}
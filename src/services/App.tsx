import { useEffect, useState } from 'react'
import { PokeCard } from '../components/PokeCard'
import  Header  from '../Pages/Header'
import Search from '../Pages/Search';
import GlobalStyles from '../globalstyles'

interface Repository {
  name: string;
  url: string;
  description: string;
  
}

function App() {
  const [repositories, setRepositories] = useState<any>([{}])

  useEffect(() => {
    fetch(' https://pokeapi.co/api/v2/pokemon/?offset=151&limit=302')
    .then(response => response.json())
    .then(data => {
      console.log('estou aqui', data.results)
      setRepositories([...data.results])
      
    })
  },[])
  
  return (
    <>
    <GlobalStyles/>
    <Header/>
    <Search/>
    <ul>
      {
        repositories.length !==0 && repositories?.map((repo: { name: string, url: string}) => {
          return (
            <li key={repo.name}>
               <PokeCard props={repo}/>
               
            </li>
            
          )
        })
      }
    </ul>
    
    </>
  )
}

export default App;

import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

const fetchFriends = () => {
  return axios.get('http://localhost:4000/friends')
}

export const ParallelQueriesPage = () => {
  const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeroes)
  const { data: friends } = useQuery('friends', fetchFriends)
  console.log(superHeroes, friends)
  return <div className='d-flex justify-content-between'>
    <div className=''>
      <h1>superHeroes data</h1>
      <ul>

        {
          superHeroes?.data.map((value) => <li key={value.id}>{value.name}</li>)
        }
      </ul>
    </div>
    <div className=''>
      <h1>friends data</h1>
      <ul>

        {
          friends?.data.map((value) => <li key={value.id}>{value.name}</li>)
        }
      </ul>
    </div>
  </div>
}

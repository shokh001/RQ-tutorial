import { useState } from 'react'
import {
  useAddSuperHeroData,
  useSuperHeroesData
} from '../hooks/useSuperHeroesData'
import { Link } from 'react-router-dom'

export const RQSuperHeroesPage = () => {
  const [name, setName] = useState('')
  const [alterEgo, setAlterEgo] = useState('')

  const onSuccess = data => {
    console.log({ data })
  }

  const onError = error => {
    console.log({ error })
  }

  const { isLoading, data, isError, error, refetch } = useSuperHeroesData(
    onSuccess,
    onError
  )

  const { mutate: addHero } = useAddSuperHeroData()

  const handleAddHeroClick = () => {
    const hero = { name, alterEgo }
    addHero(hero)
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <div className='d-flex mb-4'>
        <input
        className='form-control w-50'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='role'
        />
        <input
        placeholder='name'
        className='form-control w-50'
          type='text'
          value={alterEgo}
          onChange={e => setAlterEgo(e.target.value)}
        />
        <button className='btn btn-success' onClick={handleAddHeroClick}>Add Hero</button>
      </div>
      <button className='btn btn-primary' onClick={refetch}>Fetch heroes</button>
      {data?.data.map(hero => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>
              {hero.id} {hero.name}
            </Link>
          </div>
        )
      })}
      {/* {data.map(heroName => {
        return <div key={heroName}>{heroName}</div>
      })} */}
    </>
  )
}

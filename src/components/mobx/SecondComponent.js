import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 80%;
  height: 100px;
  background-color: red;
  margin: auto;
`

const jobs = [
  { id: '0', name: 'Dev JR', liquidValue: 5000, tribute: 15 },
  { id: '1', name: 'Dev PL', liquidValue: 8000, tribute: 15 },
  { id: '2', name: 'Dev SR', liquidValue: 11000, tribute: 15 },
  { id: '3', name: 'Tech Lead', liquidValue: 14000, tribute: 18 }
]

const SecondMobxComponent = observer(({ userState }) => {
  const [name, setName] = useState('')

  useEffect(() => {
    setName(userState.detail.name || '')
  }, [])

  const changeName = () => {
    userState.changeUserName(name)
  }

  return (
    <Wrapper>
      <p>{userState.detail.name}</p>
      <p>{userState.detail.email}</p>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="button" onClick={changeName}>
        Trocar nome
      </button>
      <hr />
      <select name="select-job">
        {jobs.map((job, index) => (
          <option key={index}>{job.name}</option>
        ))}
      </select>
    </Wrapper>
  )
})

export default SecondMobxComponent

import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 240px;
  height: 216px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin: 16px;
  padding: 8px;
  background-color: #fafafa;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  border-radius: 5px;
  text-align: center;
`

const jobs = [
  { id: '0', name: 'Dev JR', grossValue: 5000, tribute: 15 },
  { id: '1', name: 'Dev PL', grossValue: 8000, tribute: 15 },
  { id: '2', name: 'Dev SR', grossValue: 11000, tribute: 15 },
  { id: '3', name: 'Tech Lead', grossValue: 14000, tribute: 18 }
]

const SecondMobxComponent = observer(({ userState, jobState }) => {
  const [name, setName] = useState('')

  useEffect(() => {
    setName(userState.detail.name || '')
    userState.changeUserJob(jobState.data)
  }, [])

  const changeName = () => {
    userState.changeUserName(name)
  }

  const changeJob = (id) => {
    console.log('id: ', id)
    const job = jobs.find((job) => job.id === id)
    jobState.changeJob(job)
  }

  return (
    <Wrapper>
      <p>{userState.detail.name}</p>
      <p>{userState.detail.email}</p>
      <p>{jobState.data.name}</p>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="button" onClick={changeName}>
        Trocar nome
      </button>
      <hr />
      <select
        onChange={(event) => changeJob(event.target.value)}
        name="select-job"
      >
        {jobs.map((job) => (
          <option key={job.id} value={job.id}>
            {job.name}
          </option>
        ))}
      </select>
    </Wrapper>
  )
})

export default SecondMobxComponent

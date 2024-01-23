import { useState } from 'react'

const Button = ({handleClick, text }) => <button onClick={handleClick}>{text}</button>
const Header = ({text}) => <h1>{text}</h1>
const StatisticLine = ({name, value}) => <p>{name}: {value}</p>
const Statistics = ({good, bad, neutral, total, average, positive}) => {
  if(total === 0)
  {
    return <p>No feedback given</p>
  }
  return <div>
      <StatisticLine name="good" value={good} />
      <StatisticLine name="neutral" value={neutral} />
      <StatisticLine name="bad" value={bad} />
      <StatisticLine name="total" value={total} />
      <StatisticLine name="average" value={average} />
      <StatisticLine name="positive" value={positive} />
  </div>

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const addGoodFeedback = () => {
    const updatedGood = good +1
    setGood(updatedGood)
    setTotal(total + 1)
  }


  const addBadFeedback = () => {
    const updatedBad = bad +1
    setBad(updatedBad)
    setTotal(total + 1)

  }

  const addNeutralFeedback = () => {
    const updatedNeutral = neutral +1
    setNeutral(updatedNeutral)
    setTotal(total + 1)

  }

  const getAverageFeedback = () => {
    if(total === 0)
      return 0
    return (good - bad)/ total
  }

  const getPositiveFeedback = () => {
    if (total === 0){
      return `0 %`
    }
    return `${(good * 100)/total} %`
  }


  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={addGoodFeedback} text="good" />
      <Button handleClick={addNeutralFeedback} text="neutral" />
      <Button handleClick={addBadFeedback} text="bad" />
      <br />
      <Header text="statistics" />
      <Statistics 
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          average={getAverageFeedback()}
          positive={getPositiveFeedback()}
      />
    </div>
  )
}

export default App
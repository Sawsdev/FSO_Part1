import { useState } from 'react'

const Button = ({handleClick, text }) => <button onClick={handleClick}>{text}</button>
const Header = ({text}) => <h1>{text}</h1>
const Statistic = ({name, amount}) => <p>{name}: {amount}</p>


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGoodFeedback = () => {
    const updatedGood = good +1
    setGood(updatedGood)
  }


  const addBadFeedback = () => {
    const updatedBad = bad +1
    setBad(updatedBad)
  }

  const addNeutralFeedback = () => {
    const updatedNeutral = neutral +1
    setNeutral(updatedNeutral)
  }


  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={addGoodFeedback} text="good" />
      <Button handleClick={addNeutralFeedback} text="neutral" />
      <Button handleClick={addBadFeedback} text="bad" />
      <br />
      <Header text="statistics" />
      <Statistic name="good" amount={good} />
      <Statistic name="neutral" amount={neutral} />
      <Statistic name="bad" amount={bad} />
    </div>
  )
}

export default App
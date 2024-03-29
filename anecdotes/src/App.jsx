import { useState } from 'react'


const Button = ({handleClick, text }) => <button onClick={handleClick}>{text}</button>
const Anecdote = ({text, title} ) => {
  return <div>
    <h1>{title}</h1>  
    <p>{text}</p>
  </div>
}

const MostVotedAnecdote = ({text, title, votes}) => {
  return <div>
    <Anecdote text={text} title={title} />
    <p>has {votes} votes</p>
  </div>

}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({
    "0" : 0
  })
  const [mostVoted, setMostVoted] = useState({
    "text": anecdotes[0],
    "votes": 0
  })
  
  const getNextAnecdote = () => {
    const anecdoteIndex = Math.floor(8* Math.random())
    const newVoteOption = {
      ...votes
    }
    if (!Object.keys(votes).includes(`${anecdoteIndex}`)){
      newVoteOption[`${anecdoteIndex}`] = 0
      setVotes(newVoteOption)
    }
    setSelected(anecdoteIndex)
  }

  const saveAnecdoteVote = () => {
    
      const updatedVote = votes[`${selected}`] + 1
      const newVotes = {...votes}
      newVotes[`${selected}`] = updatedVote
      setVotes(newVotes)
      getMostVotedAnecdote(newVotes)
   
  }

  const getMostVotedAnecdote = (votes) => {
    const allVotes = Object.values(votes)
    const allKeys = Object.keys(votes)
    const maxVoted = Math.max(...allVotes)
    const anecdoteIndex = allVotes.findIndex((element) => element === maxVoted)
    const newMostVoted = {
      "text": anecdotes[Number(allKeys[anecdoteIndex])],
      "votes": maxVoted
    }
    if (maxVoted > 0) {
      
      setMostVoted(newMostVoted)
    }
  }

  return (
    <div>
      <Anecdote text={anecdotes[selected]} title={"Anecdote of the day"} />
      <p>has {votes[selected]} votes</p>
      <Button handleClick={saveAnecdoteVote} text="vote"/>
      <Button handleClick={getNextAnecdote} text="Next anecdote"/>
      <MostVotedAnecdote text={mostVoted.text} votes={mostVoted.votes} title="Most Voted Anecdote" />
    </div>
  )
}

export default App
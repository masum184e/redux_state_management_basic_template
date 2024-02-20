import { useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './../redux/features/counter/counterSlice'
import { changeName } from '../redux/features/name/nameSlice'

const Child = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <h5>I&apos;m from Child</h5>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment By Amount
        </button>
      </div>
      <div style={{marginTop:"5px"}}>
        <input type="text" name="" id="" onChange={(event) => { dispatch(changeName(event.target.value)) }} />
      </div>
    </>
  )
}

export default Child
import { useSelector } from 'react-redux'
import SuperParent from "./SuperParent"

const App = () => {
  const count = useSelector(state => state.counter.value)
  const name = useSelector(state => state.name.value)
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Hello Redux</h1>
      <h2>I&apos;m from App, my name {name} & value {count}</h2>
      <SuperParent />
    </>
  )
}

export default App
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import nameReducer from './features/name/nameSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    name: nameReducer
  }
})
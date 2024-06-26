## Redux State Management Basic Template

<p textAlign="justify">Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. </p>

## Preview
<img src="https://github.com/masum184e/redux_state_management_basic_template/blob/main/preview.png" >
<a href="https://redux-state-management-basic-template.vercel.app/"><b>Live View</b></a>

## Requirements

[Install Node On Your Device](https://nodejs.org/)

## How to Run

```
git clone https://github.com/masum184e/redux_state_management_basic_template.git
cd redux_state_management_basic_template
npm install
npm run dev
```

## Redux Installation

```
npm install @reduxjs/toolkit react-redux
```

## Explaination

<p> We bassically need 5 different component:</p>

1. **provider:**

   It wraps your React application and provides the Redux store to all components in the application. It accepts a `store` prop, which is the Redux store you created using `configureStore`. By wrapping your entire application with `Provider`, you make the Redux store available to all components in your React app.

   ```jsx
   import React from 'react'
   import ReactDOM from 'react-dom/client'
   import App from './App.jsx'
   import { Provider } from 'react-redux'
   import store from './../redux/store.js'

   ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
       <Provider store={store}>
         <App />
       </Provider>
     </React.StrictMode>,
   )

2. **store:**

    The Redux store is a single source of truth for the state of your application. It holds the entire state tree of your application.

   ```jsx
    import { configureStore } from '@reduxjs/toolkit'
    import counterReducer from './features/counter/counterSlice'
    import nameReducer from './features/name/nameSlice'

    export default configureStore({
      reducer: {
          counter: counterReducer,
          name: nameReducer
      }
    })

3. **slice:**

    `slice` is a collection of Redux reducer logic and actions for a single feature of your application. It helps to organize your Redux code by grouping related reducer logic and actions together. It define the logic of how state should change.

   ```jsx
    import { createSlice } from '@reduxjs/toolkit'

    export const nameSlice = createSlice({
        name: 'name',
        initialState: {
            value: ""
        },
        reducers: {
            changeName: (state, action) => {
                state.value = action.payload
            }
        }
    })

    export const { changeName } = nameSlice.actions

    export default nameSlice.reducer

4. **selector:**

    Selectors are functions that extract specific pieces of data from the Redux store state. It can be created using `useSelector` hook.

   ```jsx
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

5. **dispatch:**

    Dispatch is a function provided by the Redux store. It's used to dispatch actions to the Redux store. Actions are payloads of information that send data from your application to your Redux store.

   ```jsx
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
            aria-label="Increment value"
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

## Features
__Update Counter:__ It allows the user to increase/decrease the counter value by 1 as well as increase the counter value by a specific amount. It is typically used to track and display incremental changes.

__Decrement Counter:__ It lets the user update the name value to a new string. It's useful for scenarios where dynamic updates to a displayed name are required.

## Structure
```
├─ public
│  └─ images                  - store images
│
├─ redux
│  ├─ store.js                - sets up the Redux store, combining all the reducers and applying any middleware.
│  └─ features
|     ├─ counter
|     |  └─ counterSlice.js   - contain slices of counter state
|     |
|     └─ name
|        └─ nameSlice.js      - contain slices of counter state
│
├─ src
│  ├─ App.jsx                 - main application component that typically includes routing and other high-level logic. It use selector funtionalities
│  ├─ Child.jsx               - component that use dispatch
│  ├─ Parent.jsx              - component that help to increase tree size
│  ├─ SuperParent.jsx         - component that help to increase tree size
│  └─ main.jsx                - entry point file where the React application is rendered and the Redux provider is set up.
│
├─ .eslintrc.cjs              - configuration for eslint
├─ .gitignore                 - store details about ingnored file by git
├─ README.md                  - serve a details documentation
├─ index.html                 - main HTML file for the application. It typically includes a <div id="root"></div> where your React app will be mounted. Vite injects the necessary scripts into this file.
├─ package-lock.json          - contains metadata about dependencies, scripts, and other configurations
├─ package.json               - contains metadata about dependencies, scripts, and other configurations.
├─ preview.png                - preview image
├─ vercel.json                - configuration for vercel
└─ vite.config.js             - configuration for vite
```
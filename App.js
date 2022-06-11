import React from 'react'
import { Provider } from 'react-redux'
import store from './src/config/Store'
import DrawerNavigation from './src/navigation/drawerNavigation/DrawerNavigation'

export default function App() {
  return (
    <Provider store={store}>
      <DrawerNavigation />
    </Provider>
  )
}
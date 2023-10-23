import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { Switch, Route } from 'wouter'

import Layout from './layout/General'
import Home from './pages/Home'
// import Ingredients from './pages/Ingredients'
import Cocktails from './pages/Cocktails'
import './App.css'
import CocktailSingle from './pages/CocktailSingle'

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ChakraProvider>
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            {/* <Route path="/ingredients" component={Ingredients} /> */}
            <Route path="/cocktails" component={Cocktails} />
            <Route path="/cocktail/:id" component={CocktailSingle} />
          </Switch>
        </Layout>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App

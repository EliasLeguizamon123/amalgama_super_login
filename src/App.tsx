import { Flex } from '@chakra-ui/react'
import './App.css'
import Router from './routes/Router.routes'

function App() {

    return (
        <Flex direction={'column'} h={'100%'} overflow={'hidden'}>

            <Router />
        </Flex>
    )
}

export default App

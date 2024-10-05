import { Image, Text, VStack } from "@chakra-ui/react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import Navbar from "../../components/Navbar.component";
import Logo from '../../assets/logo.png'

export default function Home() {
    return (
        <VStack
            h={"91vh"}
            overflow={'hiden'}
            paddingBottom={'2em'}
            paddingTop={'1em'}
            spacing="1rem"
            w="full"
        >
            <Navbar />
            <Fireworks autorun={{ speed: 1, duration: 4000 }} />
            <Text pt={12} fontSize={'5xl'}>Welcome to the Home Page</Text>
            <Image src={Logo} />
        </VStack>
    )
}
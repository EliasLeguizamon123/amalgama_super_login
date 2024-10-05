import { VStack } from "@chakra-ui/react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

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
            <Fireworks autorun={{ speed: 1, duration: 4000 }} />
            <h1>Welcome to the Home Page</h1>
        </VStack>
    )
}
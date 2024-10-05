import { Flex, Spinner } from '@chakra-ui/react';

export const Loading = () => {
    return (
        <Flex
            align="center"
            direction="column"
            gap="2"
            h="100vh"
            justify={'center'}
            minH={'max-content'}
        >
            <Spinner color="primary" size="xl" />
        </Flex>
    );
};

export default Loading;
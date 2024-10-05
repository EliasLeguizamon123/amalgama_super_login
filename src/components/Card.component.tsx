import {  Flex, VStack } from '@chakra-ui/react';
import { CardProps } from '../models/Card.model';

const Card = (prop: CardProps) => {
    return (
        <>
            <Flex
                align={'center'}
                direction={'column'}
                h={'auto'}
                justify={'center'}
                ml={'0rem'}
                paddingX={'1rem'}
                w="full"
            >
                <VStack
                    align={'center'}
                    border={'1px'}
                    borderColor={'border'}
                    borderRadius="lg"
                    boxShadow="lg"
                    minHeight={'20rem'}
                    justify={'start'}
                    p={2}
                    minW={['2xs', '2xs', 'xl', 'xl']}
                    overflow={'auto'}
                    w="90%"
                >
                    {prop.children}
                </VStack>
            </Flex>
        </>
    );
};

export default Card;
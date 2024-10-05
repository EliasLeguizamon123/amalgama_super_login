import { Button, Flex, Text } from "@chakra-ui/react";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {

    const handleLogout = () => {
        sessionStorage.clear();
        window.location.reload();
    }
    return (
        <Flex
            align={'center'}
            bgColor="primary"
            color="white"
            direction={'row'}
            fontSize={'1.3rem'}
            height={'4vh'}
            justifyContent={[
                'space-between',
                'space-between',
            ]}
            minH={['50px', '60px']}
            position="fixed"
            px={'1rem'}
            py={'0.5rem'}
            top={'0'}
            w="100vw"
            zIndex="1000"
        >
            <Text>Amalgama</Text>
            <Button 
                bg="white" 
                color="base" 
                onClick={handleLogout} 
                rightIcon={<IoIosLogOut />}
                variant={'outline'}
            >
                Logout
            </Button>
        </Flex>
    )
}

export default Navbar;
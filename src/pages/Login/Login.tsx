import { Button, Flex, VStack } from "@chakra-ui/react";
import Card from "../../components/Card.component";
import { FaUserCircle } from "react-icons/fa";
import { Form, Formik } from "formik";
import CustomInput from "../../components/CustomInput.component";

export default function Login() {
    const initialData = {
        email: '',
        password: ''
    }
    return (
        <VStack
            h={"91vh"}
            overflow={'hiden'}
            paddingBottom={'2em'}
            paddingTop={'1em'}
            spacing="1rem"
            w="full"
        >
            <Card>
                <FaUserCircle size="5rem" />
                <Formik initialValues={initialData} enableReinitialize onSubmit={(values) => {
                    console.log(values)
                }}>
                    <Form>
                        <Flex w="full" gap={4} direction="column" p={4}>
                            <CustomInput name="email" id="email" placeholder="Email" label="Email" isRequired />
                            <CustomInput name="password" id="password" placeholder="Password" type="password" label="Password" isRequired />
                            <Button type="submit" colorScheme="blue" size="lg">
                                Login
                            </Button>
                        </Flex>
                    </Form>
                </Formik>
            </Card>
        </VStack>
    )
}
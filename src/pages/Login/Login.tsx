import { Button, Flex, VStack } from "@chakra-ui/react";
import Card from "../../components/Card.component";
import { FaUserCircle } from "react-icons/fa";
import { Form, Formik } from "formik";
import CustomInput from "../../components/CustomInput.component";
import * as yup from 'yup';
import { MdEmail } from "react-icons/md";
import useMakeLogin from "../../hooks/useMakeLogin.hook";

export default function Login() {
    const { getLoginForm, loading } = useMakeLogin()
    const initialData = {
        email: '',
        password: ''
    }

    const validationSchema = yup.object().shape({
        email: yup.string()
            .email('This field is an email')
            .required('This field is required'),
        password: yup.string()
            .required('This field is required')
    })
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
                <Formik initialValues={initialData} 
                    validationSchema={validationSchema} 
                    enableReinitialize 
                    onSubmit={(values) => {
                        getLoginForm(values)
                    }}
                >
                    <Form>
                        <Flex w="full" gap={4} direction="column" p={4}>
                            <CustomInput name="email" 
                                id="email" 
                                placeholder="Email" 
                                label="Email" 
                                isRequired 
                            />
                            <CustomInput 
                                name="password" 
                                id="password" 
                                placeholder="Password" 
                                type="password" 
                                label="Password" 
                                isRequired 
                            />
                            <Button 
                                type="submit" 
                                colorScheme="blue" 
                                size="lg" 
                                isLoading={loading} 
                                rightIcon={<MdEmail />}
                            >
                                Login
                            </Button>
                        </Flex>
                    </Form>
                </Formik>
            </Card>
        </VStack>
    )
}
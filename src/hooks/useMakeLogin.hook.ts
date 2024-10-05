import { useEffect, useState } from "react";
import LoginFormProps from "../models/LoginForm.model";
import { makeLogin } from "../services/login.service";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function useMakeLogin() {
    const [loginForm, setLoginForm] = useState<LoginFormProps>()
    const [loading, setLoading] = useState(false)

    const toast = useToast()
    const navigate = useNavigate()

    const getLoginForm = (loginForm: LoginFormProps) => {
        setLoginForm(loginForm)
    }

    useEffect(() => {
        if (loginForm) {
            setLoading(true)
            makeLogin(loginForm).then(response => {
                console.log(response)
                sessionStorage.setItem('token', response.token)
                navigate('/')
                setLoading(false)
            }).catch(error => {
                console.log(error)
                toast.closeAll()
                toast({
                    title: 'Error',
                    description: error.description,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
            }).finally(() => {
                setLoginForm(undefined)
                setLoading(false)
            })
        }
    }, [loginForm])


    return {getLoginForm, loading}
}
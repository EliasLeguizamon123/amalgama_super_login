import { useEffect, useState } from "react";
import LoginFormProps from "../models/LoginForm.model";

export default function useMakeLogin() {
    const [loginForm, setLoginForm] = useState<LoginFormProps>()
    const [loading, setLoading] = useState(false)

    const getLoginForm = (loginForm: LoginFormProps) => {
        setLoginForm(loginForm)
    }

    useEffect(() => {
        if (loginForm) {
            setLoading(true)
        }
    }, [loginForm])


    return {getLoginForm, loading}
}
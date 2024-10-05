import axios, { isAxiosError } from "axios"
import LoginFormProps from "../models/LoginForm.model"

export const makeLogin = async (loginForm: LoginFormProps) => {
    try {
        const formData = new FormData();
        formData.append('email', loginForm.email);
        formData.append('password', loginForm.password);

        const { data } = await axios.post(
            'https://2v234d7xc7.execute-api.us-east-1.amazonaws.com/default/login',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );

        return data;
    } catch (e) {
        if (isAxiosError(e)) {
            throw e.response?.data;
        } else {
            throw e;
        }
    }
};
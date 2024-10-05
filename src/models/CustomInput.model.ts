/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputElementProps } from '@chakra-ui/react';

export interface CustomInputProps {
    name: string;
    placeholder: string;
    id: string;
    children?: React.ReactNode;
    type?: string;
    errors?: unknown;
    touched?: unknown;
    leftAddon?: string;
    rightAddon?: string;
    variant?: string;
    inputProps?: InputElementProps;
    preventDefault?: boolean;
    onChange?: (e: any) => void;
    onKeyDown?: (e: any) => void;
    defaultValue?: number;
    selectValue?: string;
    label?: string;
    dateFormat?: string;
    autofocus?: boolean;
    isRequired?: boolean;
    isDisabled?: boolean;
    value?: string;
    removeTime?: boolean;
    format?: string;
    minWidth?: string;
}
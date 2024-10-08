import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightAddon,
    InputRightElement,
    Text,
} from '@chakra-ui/react';
import { Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { CustomInputProps } from '../models/CustomInput.model';


const CustomInput = (props: CustomInputProps) => {
    const [show, setShow] = useState(false);

    const handleShowPassword = () => setShow((show) => !show);

    return (
        <>
            <Field id={props.id} name={props.name}>
                {({ field, form }: { field: any; form: any }) => {
                    const error = form.errors[props.name];
                    const touched = form.touched[props.name];

                    return (
                        <FormControl isInvalid={!!error && touched}>
                            {props.label ? (
                                <FormLabel htmlFor={props.name}>
                                    {props.label}{' '}
                                    {props.isRequired ? (
                                        <Box as="span" color="error">
                                            *
                                        </Box>
                                    ) : null}
                                </FormLabel>
                            ) : null}
                            <InputGroup variant={'outline'}>
                                
                                <Input
                                    color="base"
                                    bg="input"
                                    {...props.inputProps}
                                    {...field}
                                    {...(props.onKeyDown && {
                                        onKeyDown: props.onKeyDown,
                                    })}
                                    _placeholder={{
                                        color: '#363a4f',
                                        fontWeight: 'bold',
                                    }}
                                    _focusWithin={{
                                        border: '0.15em solid',
                                        boxShadow: 'none',
                                    }}
                                    autoFocus={props.autofocus}
                                    css={{
                                        '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button':
                                            {
                                                '-webkit-appearance': 'none',
                                                margin: 0,
                                            },
                                        '-moz-appearance': 'textfield',
                                    }}
                                    id={props.id}
                                    isDisabled={props.isDisabled}
                                    name={props.name}
                                    placeholder={props.placeholder}
                                    step={
                                        props.type === 'number'
                                            ? '1'
                                            : undefined
                                    }
                                    textAlign={
                                        props.inputProps?.textAlign ||
                                        props.type === 'number'
                                            ? 'right'
                                            : 'left'
                                    }
                                    type={
                                        props.type && !show
                                            ? props.type
                                            : 'text'
                                    }
                                    value={
                                        props.value ? props.value : field.value
                                    }
                                />
                                {props.rightAddon ? (
                                    <InputRightAddon pointerEvents={'none'}>
                                        {props.rightAddon}
                                    </InputRightAddon>
                                ) : null}
                                {props.type && props.type === 'password' ? (
                                    <InputRightElement>
                                        <Button
                                            color="base"
                                            _focus={{}}
                                            h="95%"
                                            size="sm"
                                            variant="ghost"
                                            onClick={handleShowPassword}
                                        >
                                            {show ? (
                                                <AiOutlineEye />
                                            ) : (
                                                <AiOutlineEyeInvisible />
                                            )}
                                        </Button>
                                    </InputRightElement>
                                ) : null}
                            </InputGroup>
                        </FormControl>
                    );
                }}
            </Field>
            <ErrorMessage
                name={props.name}
                render={(msg) => (
                    <Text color="error" fontSize={'0.8em'} margin={'0.5em'}>
                        {msg}
                    </Text>
                )}
            />
        </>
    );
};

export default CustomInput;
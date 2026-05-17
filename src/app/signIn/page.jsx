'use client'
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
const SignIn = () => {
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formData.entries())
        const { data, error } = await authClient.signIn.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
        })
        if (data) {
            redirect('/')
        }
    }
      const handleGoogle = async () => {
        await authClient.signIn.social({
            provider: 'google'
        })
    }
    return (
        <div className="flex max-w-4xl mx-auto justify-center my-8">
            <Card>
                <Form className="flex w-full flex-col gap-4   " onSubmit={onSubmit}>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div >
                        <Button type="submit" className={'w-full rounded-none'}>
                            <Check />
                            Submit
                        </Button>
                        <div>
                            <div className="flex items-center gap-3 my-2">
                                <Separator className="flex-1" />
                                <span className="whitespace-nowrap text-sm text-gray-500">
                                    or signin with
                                </span>
                                <Separator className="flex-1" />
                            </div>
                            <div>
                                <Button
                                    onClick={handleGoogle}
                                    className={'w-full my-2 rounded-none bg-white border border-gray-400 text-black'}> <FcGoogle /> Google </Button>
                            </div>
                        </div>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default SignIn;
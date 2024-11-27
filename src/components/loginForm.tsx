"use client"
import React, { useState } from "react";
import * as yup from "yup";
import { useRouter } from "next/navigation";

export default function LoginForm() {

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const inputClass = "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 mb-2"+
                       " focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm";

    const validationSchema = yup.object().shape({
    email: yup.string()
        .required("Email is required")
        .email("Must be a valid email address"),

    password: yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .max(15, "Password cannot should not exceed 15 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/\d/, "Password must contain at least one number"),
    });

    const handleClick = () => {
        validationSchema.validate({ email: mail, password })
            .then(() => {
                router.push('/home');
            })
            .catch(error => {
                alert(error.errors.join(", "));
            });
    };
    return (
        <form>
            <div>
                <div>
                    <input type="email" value={mail}  onChange={(event) => setMail(event.target.value)} autoComplete="none" required className={`${inputClass} rounded-t-md`} placeholder="email adress"/>
                </div>
                <div>
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="none" required className={`${inputClass} rounded-b-md`} placeholder="password"/>
                </div>
                <div>
                    <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"type="button" onClick={handleClick}>Login</button>
                </div>
            </div>
        </form>
    )
}

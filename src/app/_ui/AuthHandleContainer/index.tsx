'use client'
import { useSession } from "next-auth/react";
import { Login } from "../Login";
import { PrevLogin } from "../Login"; // for redirect to old webClient

import { LoggedUserInfo } from "@/app/_components/LoggedUserInfo";
export const AuthHandleContainer = () => {
    const { data: session } = useSession();
    return session?.user ? <LoggedUserInfo /> : <Login container={true}  /> ;
}
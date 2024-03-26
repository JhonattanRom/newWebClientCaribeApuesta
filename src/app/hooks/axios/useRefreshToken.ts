"use client"

import axios from "@/app/_lib/axios";
import { useSession } from "next-auth/react";

export const useRefreshToken = () => {
    const { data: session } = useSession();

    const refreshToken = async () => {
        const res = await axios.post('/Auth/RefreshToken', {
            token : session?.user.tokens.token,
            refreshToken: session?.user.tokens.refreshToken
        })
        if(session) session.user.tokens.token = res.data.tokens.token
    };
    return refreshToken;
}

import { axiostAuth } from "@/app/_lib/axios";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRefreshToken } from "./useRefreshToken";

const useAxiosAuth = () => {
    const { data: session } = useSession();
    const refreshToken = useRefreshToken();
    useEffect(() => {
        const requestIntercept = axiostAuth.interceptors.request.use((config) => {
            if (!config.headers['Authorization']) {
                config.headers["Authorization"] = `Bearer ${session?.user.tokens.token}`;
                // config.headers["x-access-token"] = token; // for Node.js Express back-end
            }
            return config;
        },
            (error) => Promise.reject(error)
        );
        const responseIntercept = axiostAuth.interceptors.response.use(
            (response) => response,
            async (error) => {
                const prevRequest = error.config;
                if (error.response.status === 401 && !prevRequest.semt) {
                    prevRequest.sent = true;
                    await refreshToken();
                    prevRequest.headers["Authorization"] = `Bearer ${session?.user.tokens.token}`;
                    return axiostAuth(prevRequest);
                }
                return Promise.reject(error);
            })
        return () => {
            axiostAuth.interceptors.request.eject(requestIntercept);
            axiostAuth.interceptors.response.eject(responseIntercept);
        }
    }, [refreshToken, session]);

    return axiostAuth;
}

export default useAxiosAuth;
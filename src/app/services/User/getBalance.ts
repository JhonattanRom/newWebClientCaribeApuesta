import instance from "@/interceptors/axios.interceptor";
import useAxiosAuth from "@/app/hooks/axios/useAxiosAuth";


const getBalance = async function ()
{
    return instance.get(process.env.NEXT_PUBLIC_BACKEND_URL+'/user/mybalance')
    .then((response) => response.data);
}

export default getBalance;
import instance from "@/interceptors/axios.interceptor";


const getBalance = async function ()
{
    return instance.get(process.env.NEXT_PUBLIC_BACKEND_URL+'/user/mybalance')
    .then((response) => response.data);
}

export default getBalance;
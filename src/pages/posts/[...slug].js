import { useRouter } from "next/router";

export default function Slug() {

    const router = useRouter()

    console.log(router)
    
    return <h1>Reached the Slug Page</h1>
}
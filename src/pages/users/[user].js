import { useRouter } from 'next/router';

export default function user() {
    const router = useRouter();
    console.log(router.query);
    return (
        <h1>user {router.query.user}</h1>
    )
}
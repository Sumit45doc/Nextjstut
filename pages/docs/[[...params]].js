import { useRouter } from "next/router"
function Docs() {
    const router = useRouter();
    const { params=[] } = router.query
    console.log(params);
    if (params.length >= 1) {
        return (
            <div>
                {params[0]}
            </div>
        )
    }
    return (
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis repellat eaque vitae nisi rem aliquid beatae, officia quae voluptates neque labore placeat officiis magni, accusantium, cupiditate adipisci provident suscipit! Voluptatibus?</div>
    )
}

export default Docs

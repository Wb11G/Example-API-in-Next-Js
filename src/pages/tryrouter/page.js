import { useState } from "react";

const Page = () => {
    const [hallo, setHallo] = useState("cek")

    console.log(hallo);
    setTimeout(() => {
        setHallo("hihihih")
    }, 3000)
    return (
        <div>hallo</div>
    )
}

export default Page;
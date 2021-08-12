import Image from "next/image";
import pic from "../public/images/1_1.jpg"
import pic2 from "../public/images/2.jpg"
import React from "react"
function Gallery() {
    const [toggle, setToggle] = React.useState(false)
    return (
        <div>
            <Image src={toggle ? pic2 : pic}
                alt="kurti"
                placeholder="blur"
                objectFit="cover"
                objectPosition="center"
                quality={100}
                layout="fill"
            />
            <button onClick={() => setToggle(!toggle)}>Toggle image</button>
        </div>
    )
}

export default Gallery

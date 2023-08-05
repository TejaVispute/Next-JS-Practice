import React from "react";
import Image from "next/image";
import Vercel from "../../../public/vercel.svg";
import { Roboto } from "next/font/google";
import Script from "next/script";
const roboto = Roboto({
    weight: "100",
    subsets: ["latin"],
    display: "swap"
})
const ImageComp = () => {
    // console.log(Vercel);
    return (
        <div>
            <Script
            src="/file.js"
            />
            <h1>This is image component</h1>
            {/* <Image width={500} height={500} src={Vercel} alt="image not found" /> */}
            <Image src="https://th.bing.com/th/id/OIP.HxCUDuhXiUIYR73NuIvIvQHaEp?pid=ImgDet&rs=1" alt="not found" width={600} height={600} />

            <h1 className={roboto.className}>This is Font from Next</h1>
        </div>
    );
};

export default ImageComp;


export function generateMetadata({ params }) {
    return {
        title: "This is Image Component ",
        description: "This is description of our image component"
    }
}
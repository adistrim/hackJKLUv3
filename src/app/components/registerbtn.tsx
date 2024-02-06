import React from "react";
import NextLink from "next/link";

const RegisterBtn: React.FC = () => {
    return (
        <NextLink href="/" passHref>
            <p className="inline-flex px-8 py-3 text-black text-[1.1rem] md:text-[1.3rem] justify-center items-center gap-4 rounded-md bg-gradient-to-r from-red-600 to-yellow-500">
                Starting Soon
            </p>
            {/* <div
className="apply-button"
data-hackathon-slug="hackjklu3"
data-button-theme="dark-inverted"
style={{ height: "44px", width: "312px" }}
>
Register Now
</div> */}
        </NextLink>
    );
};

export default RegisterBtn;
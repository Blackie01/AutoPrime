import React from "react";

export default function Navigation () {
    return (
        <section className="flex justify-around p-4 bg-[#1F2321] text-white ">
            <div>
                AUTOPRIME
            </div>

            <div className="flex gap-16 text-xs align-center">
            <p>Home</p>
            <p>About Us</p>
            <p>Cars</p>
            <p>Services</p>
            <p>Contacts</p>
            </div>
        </section>
    )
}
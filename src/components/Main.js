import React from 'react'
import box1 from '../assets/img/box 1.jpg'
import box2 from '../assets/img/box2.jpg'
import header from '../assets/img/header.jpg'
import lastone from '../assets/img/lastone.jpeg'
const Main = () => {
    return (
        <>
            <main>
                {/* <!-- images section --> */}
                <section className="home">

                    <section className="home-text-box">
                        <img alt='Image' className="my-images" src={lastone} />
                        <p>Software Developer </p>
                    </section>

                </section>

                {/* <!-- Section  About me --> */}
                <section id="about" className="container">

                    <section className="grid-box">
                        <section className="item1">
                            <p>About Me</p>
                        </section>
                        <section className="item2">
                            <p>Hello, my name Maria. I am a self-motivated Entry-level Full Stack Developer. I am currently enrolled in a full stack bootcamp. Later you will be able to find some of my current project and sample my work.</p>
                        </section>
                    </section>

                </section>

                {/* <!--Section work with 5 grid box --> */}

            </main>
        </>
    )
}

export default Main
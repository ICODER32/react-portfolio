import React from 'react'

const Footer = () => {
    return (
        <>
            <footer id="contact">
                <section className="grid-box">
                    <section className="item1">
                        <p>Contact Me</p>
                    </section>
                    <section className="item2">
                        <section>
                            <form onSubmit={(e) => e.preventDefault()} className='form-container' >
                                <input type="text" required placeholder='Enter Name' />
                                <input type="email" required placeholder='Enter Email' />
                                <textarea required placeholder='Enter Message here' />
                                <button className='submit-btn' type="submit">Submit</button>
                            </form>
                        </section>
                        <section className="contact-box">
                            <ul>
                                <li>
                                    <a href="tel:555.555.5555">555.555.5555</a>
                                </li>
                                <li>
                                    <a href="mailto:lefebvre.mary90272@gmail.com?subject = feedback&body = Message">Email Me</a>
                                </li>
                                <li>
                                    <a href="https://github.com/Mary90272">Github</a>
                                </li>
                                <li>
                                    <a href="#">Twitter</a>
                                </li>
                                <li>
                                    <a href="#">Spotify</a>
                                </li>
                            </ul>
                        </section>

                    </section>
                </section>
            </footer></>
    )
}

export default Footer
import { faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
    return (
        <div className='Header'>
            <div className="container">
                <div className="navbar justify-content-end">
                    <ul className='d-flex align-items-center'>
                        <li><a className='social-icon' href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a className='social-icon' href=""><FontAwesomeIcon icon={faTelegramPlane} /></a></li>
                        <li><a className='order' href="">Заказать открытку</a></li>
                    </ul>
                </div>
                <div className="row justify-content-center">
                    <div className="col-9">
                        <div className="logo">
                            <img className='w-100' src="./img/logo.png" alt="" />
                        </div>
                        <div className="description">
                            <p>Креативные открытки, <br />
                                которые ваши близкие сохранят навсегда!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="square1"></div>
            <div className="square2"></div>
        </div>
    )
}

export default Header
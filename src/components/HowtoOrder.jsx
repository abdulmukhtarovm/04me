import React from 'react'

const HowtoOrder = () => {
    return (
        <div className='HowtoOrder'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="title">
                            <h2>КАК ЗАКАЗАТЬ ОТКРЫТКИ?</h2>
                            <p>Мы доставляем открытки по всему Узбекистану </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <div className="card">
                            <div className="img">
                                <img src="./img/icon1.png" alt="" />
                            </div>
                            <div className="text">
                                <p>Выберите самую красивую открытку</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="img">
                                <img src="./img/icon3.png" alt="" />
                            </div>
                            <div className="text">
                                <p>Воспользуйтесь промокодом FOREVER и получите 10% скидку</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="img">
                                <img src="./img/icon2.png" alt="" />
                            </div>
                            <div className="text">
                                <p>Доставим по указанному адресу в течении 24 часа</p>
                            </div>
                        </div>
                    </div>
                    <div className="aftercard">*принимаем индивидуалные заказы</div>
                </div>
            </div>
        </div>
    )
}

export default HowtoOrder
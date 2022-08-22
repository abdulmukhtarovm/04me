import React from 'react'

const Promokod = () => {
    return (
        <div className='Promokod'>
            <div className="square1"></div>

            <div className="square23"></div>
           <div className="container">
           <div className="row justify-content-end">
                <div className="col-6 img" style={{zIndex:2}}>
                        <img src="./img/forever.png" alt="" />
                </div>
                <div className="col-7" style={{zIndex:2}}>
                    <div className="container">
                        <div className="info">
                            <h3>ПРОМОКОД <span>FOREVER</span></h3>
                            <p>Воспользуйтесь промокодом FOREVER, получите 10% скидку</p>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Promokod
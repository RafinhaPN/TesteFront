//import Bola from '../../Imagens/image1.png';
//import Kong from '../../Imagens/image2.png';
import './produtos.css';
import React, { useState, useEffect } from 'react';
function Produtos() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://app.econverse.com.br/teste-front-end/junior/caoselheiro/lista-produtos/produtos.json')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.products);
                setData(responseJson.products);
            })
    }, [])


    return (
        <div className="App">
            <h1>Vitrine Produtos</h1>

            {data.map(item => (
                <div key={item.price} className="container">
                    <div className="produto1">

                        <div className='item' >
                            <img src={item.photo} alt="imagem" />
                            <span>
                                <h1>{item.productName}</h1>
                                <p>{Intl.NumberFormat('de-BR', { style: 'currency', currency: 'BRA' }).format(item.price)

                                }</p>
                            </span>
                        </div>

                    </div>
                    <div className="produto2">



                    </div>
                </div>




            ))}


        </div>
    );
}

export default Produtos;

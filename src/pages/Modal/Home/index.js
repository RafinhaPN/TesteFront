import Produtos from '../Produtos'

//biblioteca utilizada 
import Modal from 'react-modal';

import React, { useState } from 'react';

// referencia onde ira buscar o HTML  o id
Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}
function HomeProdutos() {
    // pra inicializar a janela modal
    const [modal_Produto, setIsModal2Open] = useState(false);
    // fecha a janela modal
    function closeModal() {
        setIsModal2Open(false);
    }
    // abre a janela modal
    function openModal() {
        setIsModal2Open(true);
    }

    return (
        <div className="App">
            <h1>Listar Produtos</h1>
            <Modal
                isOpen={modal_Produto}
                //onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles.content}
                contentLabel="Produtos" >

                <div className='content'>

                    <Produtos />

                </div>

                <button onClick={closeModal} className="btn">Fechar</button>
            </Modal>

            <button onClick={openModal} className="btn">Vitrine</button>

        </div>
    );
}

export default HomeProdutos;

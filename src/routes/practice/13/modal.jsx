const Modal = (props) => {
    const closeModal = () => {
        props.setShow(false)
    }

    if (props.show) {
        return (
            <div id="overlay">
            <div id="content">
                <p>モーダル</p>
                <p><button onClick={closeModal}>close</button></p>
            </div>
            </div>
        )
    }else{
        return null;
    }
}

export default Modal;
import { useState } from 'react';
import Modal from '../components/Modal'; 
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () =>{
        setShowModal(false);
    };
    const actionBar = <div>
        <Button primary onClick={handleClose}>I Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>;

    return (
        <div className="relative">
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal }
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at metus fermentum, luctus ex eget, varius lacus. Aenean faucibus, purus eu vestibulum faucibus, felis libero auctor mi, nec vehicula turpis ex a enim. Pellentesque nec blandit metus. Suspendisse ultrices fringilla rutrum. Aliquam eu libero et sem egestas dignissim sed vel est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed convallis lorem ut sollicitudin bibendum. Nam viverra tincidunt nunc consectetur consectetur. Fusce et convallis nunc. Curabitur ac elit eros.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at metus fermentum, luctus ex eget, varius lacus. Aenean faucibus, purus eu vestibulum faucibus, felis libero auctor mi, nec vehicula turpis ex a enim. Pellentesque nec blandit metus. Suspendisse ultrices fringilla rutrum. Aliquam eu libero et sem egestas dignissim sed vel est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed convallis lorem ut sollicitudin bibendum. Nam viverra tincidunt nunc consectetur consectetur. Fusce et convallis nunc. Curabitur ac elit eros.
            </p>            
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at metus fermentum, luctus ex eget, varius lacus. Aenean faucibus, purus eu vestibulum faucibus, felis libero auctor mi, nec vehicula turpis ex a enim. Pellentesque nec blandit metus. Suspendisse ultrices fringilla rutrum. Aliquam eu libero et sem egestas dignissim sed vel est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed convallis lorem ut sollicitudin bibendum. Nam viverra tincidunt nunc consectetur consectetur. Fusce et convallis nunc. Curabitur ac elit eros.
            </p>            
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at metus fermentum, luctus ex eget, varius lacus. Aenean faucibus, purus eu vestibulum faucibus, felis libero auctor mi, nec vehicula turpis ex a enim. Pellentesque nec blandit metus. Suspendisse ultrices fringilla rutrum. Aliquam eu libero et sem egestas dignissim sed vel est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed convallis lorem ut sollicitudin bibendum. Nam viverra tincidunt nunc consectetur consectetur. Fusce et convallis nunc. Curabitur ac elit eros.
            </p>            
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at metus fermentum, luctus ex eget, varius lacus. Aenean faucibus, purus eu vestibulum faucibus, felis libero auctor mi, nec vehicula turpis ex a enim. Pellentesque nec blandit metus. Suspendisse ultrices fringilla rutrum. Aliquam eu libero et sem egestas dignissim sed vel est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed convallis lorem ut sollicitudin bibendum. Nam viverra tincidunt nunc consectetur consectetur. Fusce et convallis nunc. Curabitur ac elit eros.
            </p>
        </div> 
    );
}

export default ModalPage;
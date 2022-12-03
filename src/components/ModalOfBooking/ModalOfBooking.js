import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import toast from 'react-hot-toast';

function ModalOfBooking({modalInfo,refetch}) {
    // console.log('rootmodalInfo',modalInfo);
    const [show, setShow] = useState(false);
    const handleClose = (id) => {
        
        fetch(`http://localhost:5000/advertise/approved/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',

                authorization: `bearer ${localStorage.getItem('myToken')}`
            },
            body: JSON.stringify({ isBooked: 'false' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Booked successfully`);
                    
                }
                // toast.error('You are not verified by Our admin')
            })
        setShow(false);

    };
    const handleShow = () => setShow(true);
    
    return (
        <>
            
           
           
           <button className="button-default rounded" variant="primary" onClick={handleShow}>Book Now</button>
        
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{`Are You Sure To booked ${modalInfo.ItemName} ?`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Price{modalInfo.SellPrice}</Form.Label>
                            
                            <Form.Control
                                disabled
                                
                                type="text"
                                placeholder={modalInfo.description}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Your Comment</Form.Label>
                            <Form.Control 
                            name='description'
                            placeholder={modalInfo.description}
                            as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Back
                    </Button>
                    <Button variant="primary" type='submit' onClick={()=>handleClose(modalInfo._id)}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default ModalOfBooking;
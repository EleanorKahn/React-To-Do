import React, { useState } from "react";
import { Button, Label, Col, FormGroup, Modal, ModalHeader, ModalBody } from "reactstrap";
//import { Formik, Field, Form, ErrorMessage } from "formik";

const ChangeThemeForm = () => {
    // const [colorTheme, setColorTheme] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (values) => {
        console.log("form values", values);
        setModalOpen(false);
    };

    // testing modal popup
    return (
        <>
            <Button className="btn toggle-btn" outline onClick={() => setModalOpen(true)}>
                Set Color Theme
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    <ModalBody>
                        <p>I want to change the color!</p>
                        <Button type="submit" onClick={handleSubmit}>Submit</Button>
                    </ModalBody>
                </ModalHeader>
            </Modal>
        </>
    );
};

export default ChangeThemeForm;
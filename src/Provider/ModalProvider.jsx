import SOSModal from '../components/SOSModal/SOSModal';
import React from 'react'
import { useEffect, useState } from "react";

const ModalProvider = ({products}) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <SOSModal />
        </>
    )
}

export default ModalProvider
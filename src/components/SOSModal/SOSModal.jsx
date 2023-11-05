import React, { useState } from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import useSOSModal from "../../Utils/UseSOSModal";
import Modal from '../Modal/Modal';

const SOSModal = () => {
    const { onClose, isOpen } = useSOSModal();

    const onChange = (open) => {
        if (!open) {
            onClose();
        }
    }

    const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    // Handle completion event and update state variable
    setCompleted(true);
  };


    return (
        <Modal
            isOpen={isOpen}
            onChange={onChange}
        >
            <CountdownCircleTimer
                isPlaying
                duration={10}
                colors={["#004777", "#F7B801", "#A30000", "#A30000", "#004777"]}
                colorsTime={[10, 7, 5, 2, 0]}
                size={200}
                onComplete={handleComplete}
                >
                    {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
            <div onClick={()=>{onClose()}} className="cursor-pointer px-5 py-2.5 relative rounded group text-white font-medium inline-block">
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-red-600 to-red-500"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-red-600 to-red-500"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-red-600 to-red-500"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-red-600 from-red-500"></span>
                <span className="relative uppercase font-bold text-xl">{ completed ? "Alert has been Generated !"  : "Stop"}</span>
            </div>
        </Modal>
    )
}

export default SOSModal
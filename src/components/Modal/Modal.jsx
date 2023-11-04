import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { IoMdClose } from 'react-icons/io';

const Modal = ({
  isOpen,
  onChange,
  children
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      
      <Dialog.Portal>

        <Dialog.Overlay 
          className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0" 
        />

        <Dialog.Content
          className="fixed drop-shadow-md border-2 border-green-800 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[90vh] w-full md:w-[90vw] md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-green-100 p-[25px] focus:outline-none">

          <div className='flex items-center flex-col gap-y-4 justify-center w-full h-full'>
            {children}
          </div>

          <Dialog.Close asChild>

            <button
              className="text-neutral-400 hover:text-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none" aria-label="Close"
            >
              <IoMdClose className='text-[2rem] font-black' />
            </button>

          </Dialog.Close>

        </Dialog.Content>

      </Dialog.Portal>

    </Dialog.Root>
  )
}

export default Modal
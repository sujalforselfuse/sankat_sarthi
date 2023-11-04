import { useEffect, useState } from 'react'
import { BiArrowFromBottom } from 'react-icons/bi'
import useSOSModal from '../../Provider/UseSOSModal'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(true)
  const sosModal = useSOSModal();

  const handleSOSclick = () => {
    return sosModal.onOpen();
  }

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   })
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', toggleVisibility)

  //   return () => {
  //     window.removeEventListener('scroll', toggleVisibility)
  //   }
  // }, [])

  return (
    <div className={isVisible ? 'opacity-100' : 'opacity-0'} onClick={handleSOSclick}>
      <div className="fixed bottom-4 right-4 z-[100]">
        <button
          type="button"

          className='bg-red-600 hover:bg-red-800 inline-flex items-center rounded-full p-6 text-white shadow-sm transition-opacity focus:outline-none'

        >
          SOS
        </button>
      </div>
    </div>
  )
}
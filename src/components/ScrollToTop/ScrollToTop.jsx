import { useEffect, useState } from 'react'
import { BiArrowFromBottom } from 'react-icons/bi'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className={isVisible ? 'opacity-100' : 'opacity-0'}>
    <div className="fixed bottom-4 right-4 z-[100]">
      <button
        type="button"
        onClick={scrollToTop}
        className='bg-[#AA67FE] hover:bg-purple-800 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none'
        
      >
        <BiArrowFromBottom className="2xl:h-[3.5rem] 2xl:w-[3.5rem] h-6 w-6" aria-hidden="true" />
      </button>
    </div>
    </div>
  )
}
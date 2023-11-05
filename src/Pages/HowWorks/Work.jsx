import React from 'react'
import resue from '../../Images/rescue.png'
import emergency from '../../Images/emergency.png'
import control from '../../Images/control_room.png'
import alert from '../../Images/alert.png'

const Work = () => {
  return (
    <>
    
      <div className='text-center mt-8'>

        <div className="flex flex-row items-center justify-center gap-x-2 capitalise text-[#007c7c]">
          <span className="text-3xl md:text-4xl font-black whitespace-nowrap">
            Sankat
          </span>

          <span className="text-3xl md:text-4xl font-black whitespace-nowrap">
            Sarthi
          </span>

        </div>

        <h1 className="text-green-900 text-md title-font font-medium my-2 max-w-lg m-auto">how 'Sankat Sarthi' swiftly transitions from an alert to action, ensuring your safety during disasters.</h1>

      </div>

      <section className="text-gray-600 body-font">

        <div className="container px-5 pb-24 pt-16 mx-auto">

          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-black sm:flex-row flex-col">

            <div className="w-32 h-32 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0">

              <img src={emergency} alt="" />

            </div>

            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">

              <h2 className="text-[#007c7c] text-lg title-font font-medium mb-2 uppercase"> Emergency Detection</h2>

              <p className="leading-relaxed text-green-900">Facing imminent danger, Shella turns to 'Sankat Sarthi', the digital lifeline. She opens the app, where users find solace and a promise of swift action. Her urgent need for help is communicated through the app, a guardian in the digital age, amidst the unfolding disaster</p>

            </div>

          </div>

          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-black sm:flex-row flex-col">

            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">

              <h2 className="text-[#007c7c] text-lg title-font font-medium mb-2 uppercase">Alert Triggered</h2>

              <p className="leading-relaxed text-green-900">With urgency, Shella taps the SOS, her digital flare in the night. This simple yet powerful act triggers an intricate network of alerts within 'Sankat Sarthi', setting off a chain reaction that mobilizes a dedicated team poised to leap into action for her rescue.</p>

            </div>

            <div className="w-32 sm:order-none order-first h-32 sm:ml-10 inline-flex items-center justify-center rounded-full bg-green-100 flex-shrink-0">

              <img src={alert} alt="" />

            </div>

          </div>

          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-black  sm:flex-row flex-col">

            <div className="w-32 h-32 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 flex-shrink-0">

              <img src={control} alt="" />
              
            </div>

            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">

              <h2 className="text-[#007c7c] text-lg title-font font-medium mb-2 uppercase"> Control Room Notification</h2>

              <p className="leading-relaxed text-green-900">In the heartbeat of 'Sankat Sarthi', the control room, vigilant operators receive Shella's distress signal. They harness cutting-edge technology to pinpoint her exact location, crafting a rescue plan with precision, ensuring that every second counts as they orchestrate her path to safety.</p>
              
            </div>

          </div>

          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-black sm:flex-row flex-col">

            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">

              <h2 className="text-[#007c7c] text-lg title-font font-medium mb-2 uppercase">Rescue Operation</h2>

              <p className="leading-relaxed text-green-900"> Rescue teams, the unsung heroes, receive their marching orders. They set out with determination, equipped with the knowledge and tools provided by 'Sankat Sarthi', to navigate the perilous landscape. Their mission: to reach Shella, to bring her home, a testament to the app's solemn vow to protect.</p>
              
            </div>

            <div className="w-32 sm:order-none order-first h-32 sm:ml-10 inline-flex items-center justify-center rounded-full bg-green-100 flex-shrink-0">
              
              <img src={resue} alt="" />

            </div>
          </div>

        </div>
      </section>

    </>
  )
}

export default Work
import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { sliderData } from '../assets/slider_data';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const Slider = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
      <div className='mb-10'>
                <AutoplaySlider  play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={3000}
    className="relative w-full h-4/5 aws-btn">
        {
            sliderData.map((ele,i)=>{
                return (
                    <div key={i} className=''>
                        <img src={ele.image}/>
                        <div className='absolute flex flex-col gap-2 top-[20%] md:top-[30%] left-[40%] text-white bg-black py-5 px-10 md:px-20 bg-opacity-60 items-center justify-center'>
                            <h1 className='flex items-center justify-center text-xl  md:text-4xl'>{ele.heading}</h1>
                            <p className='flex items-center justify-center text-xs'>{ele.desc}</p>
                            <button className='flex items-center justify-center bg-blue-600 px-2 py-1 rounded-lg'>Shop now</button>
                        </div>

                        </div>
                )
            })
        }
        </AutoplaySlider>
    </div>
  )
}

export default Slider
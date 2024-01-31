import React from "react";
import { useForm, Controller } from "react-hook-form"

export default function AddFeedBack() {
  const { register, control, handleSubmit } = useForm({
    defaultValues:{
        feedBackTitle:"",

    }
  })
  const onSubmit = (data) => console.log(data)


  return (
     <div className="bg-white rounded-xl p-5 md:w-[540px] h-[auto]">
        <div className=" left-0 -mt-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
            <circle cx="28" cy="28" r="28" fill="url(#paint0_radial_0_2017)"/>
            <path d="M30.3425 36V30.1657H36.0295V25.8637H30.3425V20H25.7459V25.8637H20V30.1657H25.7459V36H30.3425Z" fill="white"/>
            <defs>
                <radialGradient id="paint0_radial_0_2017" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.184 -5.81647) rotate(129.411) scale(93.4169)">
                <stop stop-color="#E84D70"/>
                <stop offset="0.530886" stop-color="#A337F6"/>
                <stop offset="1" stop-color="#28A7ED"/>
                </radialGradient>
            </defs>
            </svg>
        </div>
        <div className="text-[#3A4374]">
            <h5 className="text-xl font-bold">Create New Feedback</h5>
            <h6 className="font-bold">Feedback Title</h6>
            <p className="">Add a short, descriptive headline</p>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("feedBackTitle", { required: true, maxLength: 20 })} className="bg-[#F7F8FD] w-[279px] md:w-[456px] h-[48px]" placeholder="Enter Title" />
            <h6 className="">Category</h6>
            <p className="">Choose a category for your feedback</p>
            <select {...register("category")} className="bg-[#F7F8FD] w-[279px] md:w-[456px] h-[48px]" >
                <option value="feature">Feature</option>
                <option value="ui">UI</option>
                <option value="ux">UX</option>
                <option value="enhancement">Enhancement</option>
                <option value="bug">Bug</option>
            </select>
            <h6 className="">Feedback Detail</h6>
            <p className="">Include any specific comments on what should be improved, added, etc.</p>
            <input {...register("feedBackdetails")} placeholder="" className="w-[279px] h-[96px] md:w-[456px] bg-[#F7F8FD]"  />
             <div className="btns my-5 flex justify-end">
                <button className="bg-[#3A4374] hover:bg-[#656EA3] text-white rounded-md py-1 px-3 mx-4" onClick={""} > Cancel</button>
                <button type="submit" className="bg-[#AD1FEA] hover:bg-[#C75AF6] text-white  rounded-md py-1 px-3 ">Add FeedBack </button>
             </div>
            </form>
        </div>
     </div>
  
  )
}
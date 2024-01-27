import { useForm, Controller } from "react-hook-form"


export default function App() {
  const { register, control, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)


  return (
     <div className="bg-white rounded-xl">
        <div className="">
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
            <input {...register("feedBackTitle", { required: true, maxLength: 20 })} />
            <h6 className="">Category</h6>
            <p className="">Choose a category for your feedback</p>
            <select {...register("category")}>
                <option value="feature">Feature</option>
                <option value="ui">UI</option>
                <option value="ux">UX</option>
                <option value="enhancement">Enhancement</option>
                <option value="bug">Bug</option>
            </select>
            <h6 className="">Feedback Detail</h6>
            <p className="">Include any specific comments on what should be improved, added, etc.</p>
            <input type="submit" />
            </form>
        </div>
     </div>
  
  )
}
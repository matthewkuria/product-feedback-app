import { useForm, Controller } from "react-hook-form"


export default function App() {
  const { register, control, handleSubmit } = useForm({
    defaultValues:{
        feedBackTitle:"",

    }
  })
  const onSubmit = (data) => console.log(data)


  return (
     <div>
        
     </div>
  
  )
}
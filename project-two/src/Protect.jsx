import { Navigate } from "react-router-dom"

const ProtectRouting=({children})=>{

const auth = JSON.parse(localStorage.getItem("currentuser"))

if(!auth){
   return <Navigate to="/Login" replace></Navigate>
}


    return children

}
export default ProtectRouting
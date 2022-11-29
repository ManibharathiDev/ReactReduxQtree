import { useSelector } from "react-redux"
import MyNestedComponent from "./MyNestedComponent"
const MyChildComponent = () =>{
    const myState = useSelector((state)=>state.changeTheNumber) 
    return(
        <div>
            <label>My Count is : 
                <h1>{myState}</h1></label>
                <MyNestedComponent/>
        </div>
    )
}

export default MyChildComponent;
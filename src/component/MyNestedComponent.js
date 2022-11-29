import { increment,decrement } from "../actions"
import { useSelector,useDispatch } from "react-redux"

const MyNestedComponent = () => {

    const myState = useSelector((state)=>state.changeTheNumber);
    const dispatch = useDispatch();

    return(
            <div>
            <button onClick={()=>dispatch(increment())}>Child Increment</button>
            <button onClick={()=>dispatch(decrement())}>Child Decrement</button>
            </div>
    )
}

export default MyNestedComponent;
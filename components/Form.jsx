import AddUserForm from "./AddUserForm"
import UpdateUserForm from "./UpdateUserForm"




const Form = () => {

    const flag = true

    return(
        <div className="container mx-auto">
            { flag ? <AddUserForm /> : <UpdateUserForm /> }
        
        </div>
    )


  
}

export default Form
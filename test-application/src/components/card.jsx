import Button from "./button";

function Card() {
    return (
       <div className='cardcomponents'>
       
            <div className='todocomponent'>
              <h1>To Do List</h1>
            <p>A simple to do list</p>
            <Button />  

        </div>
            

       <div className="switchcomponent">
            <h1>A switch Component</h1>
            <p>A Simple On/Off Switch</p>
            <Button />
            </div>
            
             <div className="formcomponent">
            <h1>A form that contacts my email</h1>
            <p>A submission form that allows you to contact me</p>
            <Button />
        </div>

        
        </div>
    )
}

export default Card;
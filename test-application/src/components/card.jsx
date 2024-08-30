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

            
            
            <div className='emailcomponent'>
              <h1>An email component to email me</h1>
            <p>A form to contact me</p>
            <Button />  

        </div>
        </div>
        
    )
}

export default Card;
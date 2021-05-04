// Post Entry consists of the text input and submit button
import React, {useState} from "react"


function PostEntry(props){
    const [isExpanded, setExpanded] = useState(false)
    const [post, setPost] = useState()

    
    // Expands the text area field upon click 
    function handleTextAreaClick(){
        setExpanded(true);
    }

    function handleChange(event){
        const {value} = event.target
        setPost(value)
    }

    // Posts stuff
    function handleButtonClick(event){
        console.log(post)
        props.addNew(post) // 'exports' the value of post to app.jsx, using prop addNew
        event.preventDefault();
        setPost("")
    }

    return(
        <div>
            <textarea
                placeholder="Enter Message"
                rows={isExpanded ? "2" : "1"}
                onClick = {handleTextAreaClick}
                onChange = {handleChange}
                value = {post}
            />

            <button onClick={handleButtonClick}>
                Submit
            </button>

        </div>
    )
}

export default PostEntry
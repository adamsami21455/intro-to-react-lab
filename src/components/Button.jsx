import './Button.css'
function Button() {

    function handleClick() {
        console.log("Button Clicked")
    }

    return (
        <div>
            <button onClick={handleClick} className='button-text'>Upload</button>
        </div>
    )
}

export default Button // Exporting the component Button
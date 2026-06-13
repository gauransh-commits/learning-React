

function Button(){

    /* Inline CSS*/
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px", /* Padding happens inside a div, it adjusts the text*/
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    
    return(
        <button className={styles}>Click Me</button>
    );
}

export default Button
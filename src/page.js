const clearPage = (call,caller) =>{
    const content = document.getElementById("content");

    content.removeChild(content.childNodes[2])
}

export default clearPage
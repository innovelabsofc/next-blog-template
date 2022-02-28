import React from 'react'

const Footer = () => {

const style : any = {
    container : {
        justifyContent : "center",
        height : "10vh",
        backgroundColor : "black",
        color : "white",
        display : "flex",
        alignItems : "center"
    }
}

  return (
    <footer style={style.container}>
        <p>Made by Fawaz Sullia with Nextjs</p>
    </footer>
  )
}

export default Footer
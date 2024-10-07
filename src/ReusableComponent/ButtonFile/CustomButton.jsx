import React from 'react'

function CustomButton(props) {
    const buttonstyle = {
        height: props.height,
        width: props.width,
        backgroundColor: props.backgroundColor,
        borderRadius: props.borderRadius,
        label: props.label,
        color: props.color || 'white',
        border: props.border || 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: props.fontSize,
        marginTop: props.marginTop,
        Type:props.type
        
    }
  return (
    <div>
         <button className={props.className} style={buttonstyle} onClick={props.onClick} >
            {props.label}

        </button>
    </div>
  )
}

export default CustomButton
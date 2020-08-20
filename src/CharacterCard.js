import React, { useState, useEffect, useRef } from 'react';

export default function CharacterCard(props) {
    const [active, setActive] = useState(false);
    const attempRef = useRef(props.attemp) 
    
    const activate = () => {
        if(!active){
        setActive(true)
        props.activationHandler(props.value)
        }
    }

    useEffect(()=>{
        if(attempRef.current != props.attempt){
            setActive(false);
            attempRef.current = props.attempt
        }

    }
    )
    

    const className = `card ${active ? 'activeCard': ''}`

    return (
        <div className={className} onClick={activate}>{props.value}</div>
    )
}
import React, { useState, } from 'react';
import _, { attempt } from 'lodash';
import CharacterCard from './CharacterCard';

const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attempt: 1,
        times: 5,
        guess: '',
        completed: false,
        
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c => {
        console.log(`${c} has been activated`)

        let guess = state.guess + c
        setState({...state, guess})
        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah!!!! Times you Attempt:',state.attempt)
                setState({...state, completed: true})
            }else if(state.times !=0){
                console.log('reset, next attempt times to try',state.times)
                setState({...state, guess: '', attempt: state.attempt +1,times: state.times -1})
                
            }else{
                console.log('Game Over')
            }
        }
        
    }
    return(
        <div>
            {
                state.chars.map((c, i) => 
                <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>)
            } 
        </div>
    )
}
import React, { useState, } from 'react';
import _, { attempt, words, times, set } from 'lodash';
import CharacterCard from './CharacterCard';


const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase() 
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attempt: 1,
        times: 2,
        guess: '',
        answer: '',
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
                // console.log('yeah!!!! Times you Attempt:',state.attempt)
                setState({...state, guess: '', answer: state.answer = props.value})
                setTimeout(() => {  gamecomplete() }, 4000);
                setTimeout(() => {   window.location.reload(false)}, 4000);
                setState({...state, completed: true})
            }else if(state.times !=0){
                console.log('reset, next attempt times to try',state.times)
                setState({...state, guess: '', attempt: state.attempt +1,times: state.times -1})
                
            }else{
                console.log('Game Over')
                setState({...state, guess: '', answer: state.answer = props.value})
                setTimeout(() => {  gameover() }, 4000);
                setTimeout(() => {   window.location.reload(false)}, 4000);
                
                
            }
        }
    }

    return(
        <div>
            <div class="textshow">
        GAME CARD
        <br></br>
        Attempt : {state.attempt}
        <br></br>
        Times remaining : {state.times+1}
        <br></br>
        answer = {state.answer}
      </div>
            {
                state.chars.map((c, i) => 
                <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>)
            } 
        </div>
    )
}
function gameover() {
    var x = Math.floor(Math.random() * 2);
    if (x == 0) {
      alert("You lose!!!!");
    }
    if (x == 1) {
      alert("try again");
    }
  }
function gamecomplete() {
    var x = Math.floor(Math.random() * 2);
    if (x == 0) {
       
      alert("congrat!!!!!");
    }
    if (x == 1) {
        
      alert("Yeah!!!!!!!");
    }
  }


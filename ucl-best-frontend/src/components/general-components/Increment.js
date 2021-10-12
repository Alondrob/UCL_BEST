import React, { PureComponent } from 'react'
export default class Increment extends PureComponent {

    constructor() {
        super()
        this.state = {
            count: 0,
            words: ''
        }
    }
    render() {
        const increaseButton = () => {
            this.setState((state) => {
                return {count: state.words}
            })
        }
        const handleChange = (event) => {
            const userInput = event.target.value.length
            
            const wordslenght = this.setState({words: userInput})
            console.log('currentState',this.state.words)
        }
        // console.log('wordsChecking', this.setState({words: userInput}))
        return (
            <div>
                <h1>Hello </h1>

                <button onClick={increaseButton}> Increment </button>
                <label> Type Here </label>
                <input onChange={handleChange} type="text"/>
                
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}

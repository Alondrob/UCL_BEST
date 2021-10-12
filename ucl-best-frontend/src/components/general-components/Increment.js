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
            this.setState({ count: this.state.words.length})
        }
        const handleChange = (event) => {
            
            
            this.setState({ words: event.target.value})
            
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

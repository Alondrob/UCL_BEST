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
            this.setState({ count:  this.state.count + this.state.words.length, words: ''})
             
        }
        const handleChange = (event) => {
            
            
            this.setState({ words: event.target.value})
            
        }
        // console.log('wordsChecking', this.setState({words: userInput}))
        return (
            <div>
                <h1>Hello </h1>

                <button onClick={increaseButton}> Increment </button>
                <label id="label"> Type Here </label>
                <input onChange={handleChange} type="text" value={this.state.words}/>
                
                
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}

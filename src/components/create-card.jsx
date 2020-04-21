import React from 'react';

class CreateCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      question: '',
      answer: ''
     };
    this.handleQuestion = this.handleQuestion.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleQuestion(event){
    this.setState({
      question: event.target.value
    })
  }

  handleAnswer(event){
    this.setState({
      answer: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addCard(this.state)
    console.log(this.state)
    this.setState({
      question: '',
      answer: ''
    })
  }

  handleReset(event){
    this.setState({
      question: '',
      answer: ''
    })
  }

  render(){
    return (
      <>
        <h1 className='text-center'>Create New Card</h1>
        <div className='form'>
          <form onSubmit={this.handleSubmit}>
            <label className='text-sm-left font-weight-bold'>Question:</label>
            <textarea onChange={this.handleQuestion} className='form-control form-control-lg' type="text" placeholder='Write the question here' rows='4' ></textarea>
            <label className='text-sm-left font-weight-bold'>Answer:</label>
            <textarea onChange={this.handleAnswer} className='form-control form-control-lg' type="text" placeholder='Write the answer here' rows='8'></textarea>
            <button className='btn btn-outline-secondary'>Cancle</button>
            <button onClick={this.handleReset} className='btn btn-outline-success'>Submit</button>
          </form>
        </div>
      </>
    )
  }
}

export default CreateCard;

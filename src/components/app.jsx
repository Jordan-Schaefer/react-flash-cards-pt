import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      view: 'view-cards',
      cards: []
    }
    this.setView = this.setView.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  setView(newView){
    this.setState({
      view: newView
    })
  }

  getView(){
    switch(this.state.view){
      case 'create-card':
        return <CreateCard addCard={this.addCard} setView={this.setView}/>;
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    }
  }

  saveCards(){
    const jsonCards = JSON.stringify(this.state.cards);
    localStorage.setItem("flash-cards", jsonCards);
  }

  addCard(newCards){
    this.setState({
      cards: newCards
    }, this.saveCards())
  }

  render(){
    return (
      <>
        <Nav setView={this.setView}/>
        <div>
          {this.getView()}
        </div>
      </>
    )
  }
}

export default App;

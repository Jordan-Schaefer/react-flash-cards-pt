import React from 'react';

class Nav extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <>
        <div className='d-flex justify-content-end'>
          <nav href='./view-cards' className='btn btn-outline-primary' onClick={() => this.props.setView('view-cards')}>View Cards</nav>
          <nav className='btn btn-outline-primary' onClick={() => this.props.setView('review-cards')}>Review</nav>
          <nav className='btn btn-outline-primary' onClick={() => this.props.setView('create-card')}>Create Cards</nav>
        </div>
      </>
    )
  }
}

export default Nav;

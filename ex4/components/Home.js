import React from 'react';
import Header from './Header';
import Categories from './Categories';

class Home extends React.Component {
     constructor(props) {
          super(props);
          this.state = {};
     }

     enterCategory = (i) => {
          this.props.enterCategory(i);
     }

     addCategory = (text) => {
          this.props.addCategory(text);
     }

     render() {
          return (
               <>
                    <Header isBack={false} title="NotesJS" slogan="Start saving important notes now!" />
                    <Categories addCategory={(text) => this.addCategory(text)} enterCategory={(i) => this.enterCategory(i)} categories={this.props.categories} notes={this.props.notes} />
               </>
          );
     }
}

export default Home;
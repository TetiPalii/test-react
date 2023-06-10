import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// export class Counter extends Component {
//   static defaultPropps = {
//     step: 1,
//   };
//   handleIncrement(evt) {
//     console.log('Increment button was clicked!', evt); // працює
//     console.log('this.props: ', this.props); // Error: cannot read props of undefined
//   }

//   handleDecrement(evt) {
//     console.log('Decrement button was clicked!', evt); // працює
//     console.log('this.props: ', this.props); // Error: cannot read props of undefined
//   }
//   render() {
//     const { step } = this.props;

//     return (
//       <div>
//         <span>0</span>
//         <button type="button" onClick={this.handleIncrement}>
//           Increment by {step}
//         </button>
//         <button type="button" onClick={this.handleDecrement}>
//           Decrement by {step}
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Counter step={5} />, document.getElementById('root'));
export class Counter extends Component {
  /* ... */

  handleIncrement = evt => {
    console.log('Increment button was clicked!', evt); // працює
    console.log('this.props: ', this.props); // працює
  };

  handleDecrement = evt => {
    console.log('Decrement button was clicked!', evt); // працює
    console.log('this.props: ', this.props); // працює
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}

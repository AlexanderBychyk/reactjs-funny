// const app = {
//   title: '- Hello there!',
//   subtitle: '- General Kenobi!',
//   options: ['yes', 'no'],
// };

// console.log(app);

// const onFormSubmit = (e) => {
//   e.preventDefault();
//   const option = e.target.elements.option.value;
//   if (option) {
//     app.options.push(option);
//     e.target.elements.option.value = '';
//     render();
//   }
// };

// const removeAll = () => {
//   app.options = [];
//   render();
// };

// const onMakeDecision = () => {
//   const randomNum = Math.floor(Math.random() * app.options.length);
//   const option = app.options[randomNum];
//   alert(option);
// };

// const render = () => {
//   const temp = (
//     <div>
//       <h1>{app.title}</h1>
//       {app.subtitle && <p>{app.subtitle}</p>}
//       <p>{app.options.length > 0 ? (`Here are your options ${app.options}`) : 'No options'}</p>

//       <button
//         disabled={app.options.length === 0}
//         onClick={onMakeDecision}
//       > What should I do?
//       </button>

//       <button onClick={removeAll}>Remove All</button>
//       <ol>
//         {
//             app.options.map((value) => (<li key={value}>{value}</li>))
//         }
//       </ol>
//       <form onSubmit={onFormSubmit}>
//         <input type="text" name="option" />
//         <button>Add Option</button>
//       </form>
//     </div>
//   );
//   ReactDOM.render(temp, document.getElementById('root'));
// };

// const multiplier = {
//   multiplyBy: 2,
//   numbers: [1, 2, 3],
//   multiply() {
//     return this.numbers.map((number) => this.multiplyBy * number);
//   },
// };

// console.log(multiplier.multiply());
// render();

// // ---------

// let bool = false;

// const checker = () => {
//   bool = !bool;
//   renderTemp2();
// };

// const renderTemp2 = () => {
//   const temp2 = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={checker}>{ bool ? 'Hide details' : 'Show details'}</button>
//       { bool ? <p>Pop!</p> : undefined }
//     </div>
//   );
//   ReactDOM.render(temp2, document.getElementById('root2'));
// };
// renderTemp2();

// class Person {
//   constructor(name = 'Anonymous', age = 0) {
//     this.name = name;
//     this.age = age;
//   }

//   getGreeting() {
//     return `Hi. I am ${this.name}! `;
//   }

//   getDescription() {
//     return `${this.name} is ${this.age} year(s) old `;
//   }
// };

// class Student extends Person {
//   constructor(name, age, major) {
//     super(name, age);
//     this.major = major;
//   }

//   hasMajor() {
//     return !!this.major;
//   }

//   getDescription() {
//     let description = super.getDescription();
//     if (this.hasMajor()) {
//       description += `and he(she) study ${this.major}`;
//     }
//     return description;
//   }
// };

// class Travaler extends Person {
//   constructor(name, age, homeLocation) {
//     super(name, age);
//     this.homeLocation = homeLocation;
//   }

//   getGreeting() {
//     let gretting = super.getGreeting();
//     if (this.homeLocation) {
//       gretting += `My home is ${this.homeLocation}`;
//     }
//     return gretting;
//   }
// };

// const me = new Travaler('Alexander Bychyk', 19, 'Computer Science');
// console.log(me.getGreeting());
// const other = new Travaler();
// console.log(other.getGreeting());

//AddOption.js old

// import React from 'react';

// export default class AddOption extends React.Component {

//   constructor(props) {
//     super(props);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.state = {
//       error: undefined,
//     };
//   }

//   handleAddOption = (e) => {
//     e.preventDefault();
//     const option = e.target.elements.option.value.trim();
//     const errorMsg = this.props.handleAddOption(option);

//     this.setState(() => ({ error: errorMsg }));

//     if (!errorMsg) {
//       e.target.elements.option.value = '';
//     }
//   }

//   render() {
//     return (
//       <div>
//         {this.state.error && <p>{this.state.error}</p>}
//         <form onSubmit={this.handleAddOption}>
//           <input type="text" name="option" />
//           <button>Add Option</button>
//         </form>
//       </div>
//     );
//   }
// };

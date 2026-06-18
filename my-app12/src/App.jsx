// function App(){
//     return(
//     <div className="App">
//         <h1>Hello World</h1>
//         <p>This is my first react app.</p>
//         {/* <Cse12 /> */}
//         </div>
//     );    
// }

// //2nd component
// function CSE12(){
//   return(
//   <div className="CSE12">
//     <h2>Welcwme to CSE12</h2>
//     <p>This is the second component.</p>
//     </div>
//   );
// }
// export default App;

// import Student from"./Student";

// function App(){

//   return(
//     <div className="App">
//       <h1>Student Information</h1>
//       <Student name="Atishaya" course="CSE12" marks="99">
//       </Student>
//     </div>
//   );

// }

function App(){
  return(
    <div>
      <h1>Student Card</h1>
      <StudentCard name="prop" marks="320" grade="A"/>
    </div>
  );
  export default App;
}
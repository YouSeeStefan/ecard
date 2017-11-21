import React from 'react';
import Menu from './components/menu';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.students = [
            { name : "Bob", age : 17 },
            { name : "Bob2", age : 18 },
            { name : "Bob3", age : 19 },
            { name : "Bob4", age : 20 },
            { name : "Bob5", age : 33 }
        ];

    }

    renderStudent(currentStudent, i){
        return (
            <Student
                name={currentStudent.name}
                age={currentStudent.age}
            />
        );
    }

    render() {
        return (
            <div className="app">
                <Menu />
            </div>
            
        );
    }

}
export default App;
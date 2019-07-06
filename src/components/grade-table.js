import React, { Component } from 'react';
import { connect } from 'react-redux';
import GradeRow from './grade-row';

class GradeTable extends Component {
    componentDidMount(){
        console.log('Grade Table Component Mounted');
    }

    render(){
        const rowElements = (
            <tr>
                <td colSpan="5">Save grade rows into this constant</td>
            </tr>
        );

        return (
            <table className="table table-hover mx-2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Grade</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rowElements}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state){
    return {
        
    }
}

export default connect(mapStateToProps, { })(GradeTable);

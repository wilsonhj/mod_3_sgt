import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGradeData } from '../actions';
import GradeRow from './grade-row';

class GradeTable extends Component {
    componentDidMount(){
        console.log('Grade Table Component Mounted');
        this.props.getGradeData();
    }

    render(){
        console.log('List Data: ', this.props.list);
        const rowElements = this.props.list.map(item => {
            return <GradeRow key={item.id} {...item} />
        });

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
        list: state.grades.list
    }
}

export default connect(mapStateToProps, {
    getGradeData: getGradeData
 })(GradeTable);

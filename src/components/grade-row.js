import React, { Component } from 'react';
import { connect } from 'react-redux';

class GradeRow extends Component {
    async handleDelete(id){
        // Delete grade entry from server

        console.log('Delete Grade Data with ID:', id);
    }

    render(){
        const { name, course, grade, id } = this.props;

        return (
            <tr className={''}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{course}</td>
                <td>{grade}</td>
                <td className="text-center">
                    <i 
                        className="fas fa-trash fa-lg text-danger mx-2"
                        onClick={() => this.handleDelete(id)}
                    ></i>
                    {/* When Ready to add update functionality uncomment this code
                    <i
                        className="fas fa-edit fa-lg text-info mx-2"
                        onClick={() => setActiveForEdit(id)}
                    ></i> */}
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state){
    return {
        
    }
}

export default connect(mapStateToProps, {})(GradeRow);

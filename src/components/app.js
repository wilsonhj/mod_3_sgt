import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/app.scss';
import React from 'react';
import { connect } from 'react-redux';
import GradeTable from './grade-table';
import AddGradeForm from './add-grade-form';


const App = props => (
    <div className="my-5 container-fluid">
        <div className="row">
            <div className="col-8">
                <h1>Student Grade Table</h1>
            </div>
            <div className="col-4">
                <h2>Average Grade <span className="badge badge-secondary">{props.average}</span></h2>
            </div>
        </div>
        <hr/>
        <div className="row">
            <div className="col-8">
                <GradeTable/>
            </div>
            <div className="col-4">
                <AddGradeForm/>
            </div>
        </div>
    </div>
);

function mapStateToProps(state){
    return {
        average: 0 // Get average from state here
    }
}

export default connect(mapStateToProps)(App);

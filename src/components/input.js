import React from 'react';

export default ({input, icon = 'user', meta: { error, touched }, placeholder, type}) => (
    <div className="input-group mb-4">
        <div className="input-group-prepend">
            <span className="input-group-text">
                <i className={`fas fa-${icon}`}></i>
            </span>
        </div>
        <input {...input} type={type} className={`form-control ${touched && error ? 'is-invalid' : ''}`} placeholder={placeholder}/>
        <div className="invalid-feedback">{touched && error}</div>
    </div>
);

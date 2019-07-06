exports.validateNewEntry = (req, res, next) => {
    const { method, body } = req;

    if(method === 'POST'){
        const { course, grade, name } = body;
        let errors = [];
        let gradeError = null;

        if(!course) errors.push('No course provided');
        
        if(!grade) errors.push('No grade provided');
        else if(gradeError = gradeHasError(grade)) {
            errors.push(gradeError);
        }

        if(!name) errors.push('No name provided');

        if(errors.length) return res.status(422).jsonp({ errors });

        req.body = {
            course,
            createdAt: Date.now(),
            grade: parseFloat(grade),
            name
        }
    }

    next();
}

exports.validateUpdate = (req, res, next) => {
    const { method, body } = req;

    if(method === 'PATCH'){
        const { course = null, grade = null, name = null } = body;
        const updates = {};
        const gradeError = grade && gradeHasError(grade);

        if(course){
            updates.course = course;
        }
        if(name){
            updates.name = name;
        }
        if(grade && !gradeError){
            updates.grade = parseFloat(grade);
        }

        const hasUpdates = !!(Object.keys(updates).length);

        if(!hasUpdates){
            let error = gradeError || 'No valid update data provided';
            return res.status(422).jsonp({ error });
        }

        req.body = updates;
    }

    next();
}

function gradeHasError(grade){
    if(isNaN(grade)) return 'Grade must be a number between 0-100 (inclusive)';
    if (grade < 0) return 'Grade too low, must be between 0-100 (inclusive)';
    if (grade > 100) return 'Grade too high, must be between 0-100 (inclusive)';

    return false;
}

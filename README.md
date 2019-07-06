# React Student Grade Table - Module 3

> Starting project code for the SGT project

### Setup Instructions

> 1. Fork this repo
> 1. Clone your forked copy of this repo
>    - `git clone https://github.com/[Your Username]/mod_3_sgt_complete.git`
> 1. Change directory into the newly cloned repo
>    - `cd mod_3_sgt_complete`
> 1. Install dependencies 
>    - `npm install`
> 1. Start dev server
>    - `npm start`
> 1. Open a browser and navigate to `localhost:3000`

### API Documentation

#### Add Grade Record

> - **PATH** `/api/grades`
> - **METHOD** `POST`
> - **DATA**
> ```JSON
> {
>     "name": "Student Name",
>     "course": "Course Name",
>     "grade": 97
> }
> ```

#### Get Grade Record List

> - **PATH** `/api/grades`
> - **METHOD** `GET`
> - **DATA** `none`

#### Get Single Grade Record

> - **PATH** `/api/grades/:id`
> - **METHOD** `GET`
> - **DATA** `none`

#### Delete Grade Record

> - **PATH** `/api/grades/:id`
> - **METHOD** `DELETE`
> - **DATA** `none`

#### Update Grade Record

> - **PATH** `/api/grades/:id`
> - **METHOD** `PATCH`
> - **DATA** `Send one or more of the properties you want to update`
> ```JSON
> {
>     "name": "Student Name",
>     "course": "Course Name",
>     "grade": 97
> }
> ```

### Build For Deployment

> 1. Run webpack to build project
>    - `npm run build`
>
> **NOTE:** *After building you can not directly run your app locally. You must run your app from the root directory of a server.*

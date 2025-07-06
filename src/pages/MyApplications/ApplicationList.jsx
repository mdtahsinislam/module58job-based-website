import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';

const ApplicationList = ({myApplicationsPromise}) => {
    const applications =use(myApplicationsPromise);

    return (
        <div>
            <h3 className='text-4xl font-bold text-green-500'>Jobs Applied so far: <span className='text-4xl text-pink-500 font-bold'>{applications.length}</span></h3>


                  <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    
     {
        applications.map((application,index )=><JobApplicationRow
        key={application._id}
index={index}

        application={application}
        ></JobApplicationRow>)
     }
      
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default ApplicationList;
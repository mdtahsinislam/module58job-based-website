import React, { use } from 'react';
import { Link } from 'react-router';

const JobLists = ({jobCreatedByPromise}) => {
    const jobs=use(jobCreatedByPromise)
    return (
        <div>
            <h2 className='text-4xl text-green-500 font-bold'>Jobs created by you: <span className='text-4xl text-pink-500'>{jobs.length}</span></h2>

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='text-black font-serif'>
        <th>#</th>
        <th>Name</th>
        <th>Job Deadline</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}





      {
        jobs.map((job,index) =><tr key={job._id}>
        <th className='font-bold'>{index +1}</th>
        <td className='font-bold'>{job.title}</td>
        <td className='font-bold'>{job.deadline}</td>
        <td className='text-blue-300 font-bold'><Link to={`/applications/${job._id}`}>View Application</Link></td>
      </tr>)
      }
      
      {/* row 2 */}
      
      {/* row 3 */}
     
    </tbody>
  </table>
</div>




        </div>
    );
};

export default JobLists;
// import React, { use } from 'react';

// const HotJobs = ({jobsPromise}) => {
//     const jobs=use(jobsPromise);
//     return (
//         <div>
//             {jobs.length}
//         </div>
//     );
// };

// export default HotJobs;




import React, { useEffect, useState } from 'react';
import Jobcard from '../Shared/Jobcard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div >
            {/* <h2 >🔥 Hot Jobs</h2> */}
            <p className="text-3xl font-bold mb-4">🔥Total jobs: {jobs.length}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                
                {jobs.map(job => <Jobcard key={job._id} job={job}></Jobcard>
                    // <li >{job.title}</li>
                )}
            </div>
         
        </div>
    );
};

export default HotJobs;

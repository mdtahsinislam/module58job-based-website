import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import JobLists from './JobLists';
import { jobCreatedByPromise } from '../../api/jobsApi';

const MyPostedJobs = () => {
    const {user}=useAuth();
    return (
        <div>
            <h2 className='text-4xl font-bold'>My posted job</h2>

          <Suspense>
            <JobLists jobCreatedByPromise={jobCreatedByPromise(user.email)}></JobLists>
          </Suspense>


        </div>
    );
};

export default MyPostedJobs;

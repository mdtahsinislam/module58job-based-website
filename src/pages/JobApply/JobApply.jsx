// import React from 'react';
// import { Link, useParams } from 'react-router';
// import useAuth from '../../hooks/useAuth';

// const JobApply = () => {
//     const {id: jobId} = useParams();
// const {user}=useAuth()


//     console.log(jobId,user);
// const handdleApplyFormSubmit=e=>{
//     e.preventDefault();
//     const form =e.target;
//     const linkedIn=form.linkedIn.value;
//     const github=form.github.value;
//     const resume=form.resume.value;
//     console.log(linkedIn,github,resume);
// }

//     return (
//         <div > i want full content center
//             <h3 className='text-4xl'>Apply for this Job : <Link to={`/jobs/${jobId}`}><span className='text-blue-400'>Details</span></Link></h3>
//             <form action="" onSubmit={handdleApplyFormSubmit}>
//                 <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  

//   <label className="label">LinkedIn Link</label>
//   <input type="url" name='linkedIn' className="input" placeholder="My Linked Link" />

//   <label className="label">Github Link</label>
//   <input type="url" name='github' className="input" placeholder="My Github Link" />

//   <label className="label">Resume Link</label>
//   <input type="url"  name='resume' className="input" placeholder="My Resume Link" />

//     <input type="submit" className='btn btn-neutral'  value="Apply" />
// </fieldset>
//             </form>
//         </div>
//     );
// };

// export default JobApply;
















import React from 'react';
import { Link, useParams } from 'react-router-dom'; // ✅ Corrected: 'react-router' → 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  console.log(jobId, user);

  const handdleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedIn, github, resume);

     const application={
    jobId,
    applicant:user.email,
    linkedIn,
    github,
    resume

  }

axios.post('http://localhost:3000/applications',application)
.then (res =>{
    console.log(res.data)
    if(res.data.insertedId){
        Swal.fire({
            position:"top-end",
            icon:"success",
            title:"Your Application has been saved",
            showConfirmButton:false,
            timer:1500
        });
    }
})
 .catch(error =>{
    console.log(error)
 })

  };
 

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 px-4">
      <h3 className="text-4xl mb-6 text-center">
        Apply for this Job:{' '}
        <Link to={`/jobs/${jobId}`} className="text-blue-500 ">
          Details
        </Link>
      </h3>

      <form onSubmit={handdleApplyFormSubmit} className="w-full max-w-md">
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-6 shadow-md space-y-4">
          <div>
            <label className="label">LinkedIn Link</label>
            <input
              type="url"
              name="linkedIn"
              className="input input-bordered w-full"
              placeholder="Your LinkedIn profile"
              required
            />
          </div>

          <div>
            <label className="label">GitHub Link</label>
            <input
              type="url"
              name="github"
              className="input input-bordered w-full"
              placeholder="Your GitHub profile"
              required
            />
          </div>

          <div>
            <label className="label">Resume Link</label>
            <input
              type="url"
              name="resume"
              className="input input-bordered w-full"
              placeholder="Link to your Resume (Google Drive, etc.)"
              required
            />
          </div>

          <div className="text-center">
            <input type="submit" value="Apply" className="btn btn-neutral w-full" />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;

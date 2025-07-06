// import React from 'react';
// import { useLoaderData } from 'react-router';

// const JobDetails = () => {
//     const {title,company}=useLoaderData();
//     //console.log(job);
//     return (
//         <div>
//            <h2 className='text-6xl'>{title}</h2> 
//            <p>Company: {company}</p>
//         </div>
//     );
// };

// export default JobDetails;

// my data is {
//   "_id": "685ece91f746f329ad020412",
//   "title": "Software Engineer",
//   "location": "Halishohor, Chittagong",
//   "jobType": "Hybrid",
//   "category": "Engineering",
//   "applicationDeadline": "2024-12-31",
//   "salaryRange": {
//     "min": 40000,
//     "max": 60000,
//     "currency": "bdt"
//   },
//   "description": "We are seeking a skilled Software Engineer to join our dynamic team. The candidate will work on diverse projects and contribute to innovative solutions.",
//   "company": "Favorite IT",
//   "requirements": [
//     "JavaScript",
//     "React",
//     "Node.js",
//     "MongoDB"
//   ],
//   "responsibilities": [
//     "Develop and maintain software",
//     "Collaborate with the team",
//     "Participate in code reviews"
//   ],
//   "status": "active",
//   "hr_email": "hr@techsolutions.com",
//   "hr_name": "Farhan Rahman",
//   "company_logo": "https://i.ibb.co/mXD5MNf/facebook.png"
// }   i want to show card nicely give me the card format code 




// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const JobDetails = () => {
//     const job = useLoaderData();
//     const {
//         title,
//         company,
//         location,
//         jobType,
//         category,
//         applicationDeadline,
//         salaryRange,
//         description,
//         requirements,
//         responsibilities,
//         hr_email,
//         hr_name,
//         company_logo
//     } = job;

//     const handlePrint = () => {
//         window.print();
//     };

//     return (
//         <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
//             {/* Company Logo & Title */}
//             <div className="flex items-center gap-4 mb-6">
//                 <img src={company_logo} alt={company} className="w-20 h-20 rounded-full" />
//                 <div>
//                     <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
//                     <p className="text-gray-500 text-lg">{company}</p>
//                 </div>
//             </div>

//             {/* Job Info */}
//             <div className="grid grid-cols-2 gap-6 text-gray-700 mb-6">
//                 <p><strong>📍 Location:</strong> {location}</p>
//                 <p><strong>💼 Job Type:</strong> {jobType}</p>
//                 <p><strong>📅 Deadline:</strong> {applicationDeadline}</p>
//                 <p><strong>🪙 Salary:</strong> {salaryRange.min}–{salaryRange.max} {salaryRange.currency.toUpperCase()}</p>
//                 <p><strong>📂 Category:</strong> {category}</p>
//                 <p><strong>🧑‍💼 HR:</strong> {hr_name} ({hr_email})</p>
//             </div>

//             {/* Description */}
//             <div className="mb-6">
//                 <h3 className="text-xl font-semibold mb-2">📝 Job Description</h3>
//                 <p className="text-gray-600">{description}</p>
//             </div>

//             {/* Requirements */}
//             <div className="mb-6">
//                 <h3 className="text-xl font-semibold mb-2">✅ Requirements</h3>
//                 <ul className="list-disc list-inside text-gray-600">
//                     {requirements.map((req, index) => (
//                         <li key={index}>{req}</li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Responsibilities */}
//             <div>
//                 <h3 className="text-xl font-semibold mb-2">🧩 Responsibilities</h3>
//                 <ul className="list-disc list-inside text-gray-600">
//                     {responsibilities.map((task, index) => (
//                         <li key={index}>{task}</li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Print Button */}
//             <div className="mt-8 text-center no-print">
//                 <button
//                     onClick={handlePrint}
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
//                 >
//                     🖨️ Print Job Details
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default JobDetails;



import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const job = useLoaderData();
  const {
    title,
    company,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
    _id
  } = job;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg print-container">
      {/* Company Logo & Title */}
      <div className="flex items-center gap-4 mb-6">
        <img src={company_logo} alt={company} className="w-20 h-20 rounded-full object-cover" />
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-500 text-lg">{company}</p>
        </div>
      </div>

      {/* Job Info */}
      <div className="grid grid-cols-2 gap-6 text-gray-700 mb-6">
        <p><strong>📍 Location:</strong> {location}</p>
        <p><strong>💼 Job Type:</strong> {jobType}</p>
        <p><strong>📅 Deadline:</strong> {applicationDeadline}</p>
        <p><strong>🪙 Salary:</strong> {salaryRange.min}–{salaryRange.max} {salaryRange.currency.toUpperCase()}</p>
        <p><strong>📂 Category:</strong> {category}</p>
        <p><strong>🧑‍💼 HR:</strong> {hr_name} ({hr_email})</p>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">📝 Job Description</h3>
        <p className="text-gray-600 whitespace-pre-line">{description}</p>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">✅ Requirements</h3>
        <ul className="list-disc list-inside text-gray-600">
          {requirements?.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🧩 Responsibilities</h3>
        <ul className="list-disc list-inside text-gray-600">
          {responsibilities?.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
        <Link to={`/jobApply/${_id}`}>   <button className='btn btn-primary'>Apply Now</button></Link>
      
      </div>

      {/* Print Button */}
      <div className="mt-8 text-center no-print">
        <button
          onClick={handlePrint}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          🖨️ Print Job Details
        </button>
      </div>
    </div>
  );
};

export default JobDetails;

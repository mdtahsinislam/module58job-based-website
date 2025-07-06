// import React from 'react';

// const Jobcard = ({job}) => {
//     const {title,location,jobType,category,applicationDeadline,salaryRange,company}=job;
//     return (
//         <div>
//             <div className="card bg-base-100 w-96 shadow-sm">
//   <figure>
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">{title}</h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default Jobcard;






import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
//import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';


const JobCard = ({ job }) => {
    const { title, location, requirements, _id, salaryRange, description, company, company_logo } = job;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className='flex gap-2'>
                <figure>
                    <img
                        src={company_logo}
                        className='w-16'
                        alt="Shoes" />
                </figure>
                <div>
                    <h3 className="text-4xl">{company}</h3>
                    <p className='flex gap-1 items-center'> <FaMapMarkerAlt></FaMapMarkerAlt> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                <p>{description}</p>
                <div className="card-actions">
                    {
                        requirements.map((skill, index) => <div
                            key={index}
                            className="badge badge-outline"
                        >{skill}</div>)
                    }
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
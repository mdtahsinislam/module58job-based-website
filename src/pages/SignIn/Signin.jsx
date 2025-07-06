import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import SignInLottie from '../../assets/lotties/signIn.json'
import Lottie from 'lottie-react';
import SocialLogin from '../Shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router';
const Signin = () => {
    const {createUser}=use(AuthContext);
    const location=useLocation();
const navigate=useNavigate();
    const from =location.state || '/';

    console.log('Location in sign in Page:', location)
    
    
    const handleSignIn=e=>{
     e.preventDefault();
      
     const form=e.target;
     const email=form.email.value;
     const password=form.password.value;
     console.log(email,password)
    
    
     createUser(email,password)
     .then(result=>{
      console.log(result.user)
      navigate(from);
     })
     .catch(error =>{
      console.log(error);
     })


// create signin





    }
    
    return (
         <div>
               <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
   {/* animation  */}
   <Lottie  style={{width:'200px'}} animationData={SignInLottie} loop={true}></Lottie>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
           <h1 className="text-5xl font-bold">SignIn now!</h1>
           <SocialLogin from={from}></SocialLogin>
           <form action="" onSubmit={handleSignIn}>
   <fieldset className="fieldset">

          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">SignIn </button>
        </fieldset>
           </form>
     
      </div>
    </div>
  </div>
</div>       
        </div>
    );
};

export default Signin;



// Error handled by React Router default ErrorBoundary: ErrorResponseImpl {status: 404, statusText: 'Not Found', internal: true, data: 'Error: No route matches URL "/signIn"', error: Error: No route matches URL "/signIn"
//     at getInternalRouterError (http://localhost:5173/node_mod…}
// DefaultErrorComponent @ react-router.js?v=b4ee97bc:5400
// react-stack-bottom-frame @ react-dom_client.js?v=b4ee97bc:17424
// renderWithHooks @ react-dom_client.js?v=b4ee97bc:4206
// updateFunctionComponent @ react-dom_client.js?v=b4ee97bc:6619
// beginWork @ react-dom_client.js?v=b4ee97bc:7654
// runWithFiberInDEV @ react-dom_client.js?v=b4ee97bc:1485
// performUnitOfWork @ react-dom_client.js?v=b4ee97bc:10868
// workLoopConcurrentByScheduler @ react-dom_client.js?v=b4ee97bc:10864
// renderRootConcurrent @ react-dom_client.js?v=b4ee97bc:10844
// performWorkOnRoot @ react-dom_client.js?v=b4ee97bc:10330
// performWorkOnRootViaSchedulerTask @ react-dom_client.js?v=b4ee97bc:11623
// performWorkUntilDeadline @ react-dom_client.js?v=b4ee97bc:36Understand this error
// react-router.js?v=b4ee97bc:5400 Error handled by React Router default ErrorBoundary: ErrorResponseImpl {status: 404, statusText: 'Not Found', internal: true, data: 'Error: No route matches URL "/signIn"', error: Error: No route matches URL "/signIn"
//     at getInternalRouterError (http://localhost:5173/node_mod…}    help in bangla
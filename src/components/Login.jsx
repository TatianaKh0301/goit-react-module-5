// import { useNavigate, useState } from "react-router-dom";

// export const Login = () => {
//     const navigate = useNavigate();
//     const handleSubmit = async values => {
//         const response = await fakeApi.login(values);
//         if(response.success) {
//             navigate("/profile", {replace: true})
//         }
//     };

//     return(
//         <div>
//             <h1>Login page</h1>
//             <LoginForm onSubmit={handleSubmit}/>
//         </div>
//     );
// };

// export const Login = () => {
//     const [isLoginSuccess, setIsLoginSuccess] = useState(false);
//     const handleSubmit = async values => {
//         const response = await FakeAPI.login(values);
//         setIsLoginSuccess(response.success);
//       };
    
//       if (isLoginSuccess) {
//         return <Navigate to="/profile" replace />;
//       }
    
//       return (
//         <div>
//           <h1>Login page</h1>
//           <LoginForm onSubmit={handleSubmit} />
//         </div>
//       );
// };
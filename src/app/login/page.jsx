import React from "react";

const Login = () => {
    return (
        <div className="flex flex-col justify-start items-center min-h-screen">
            <div className="bg-slate-900 flex flex-col items-center justify-center gap-10 max-w-lg px-20 py-20 mt-20 rounded-md mx-auto">
                <h2 className="text-4xl text-white font-bold"> Login</h2>
                <div className="px-8 py-4 rounded-md text-white bg-orange-600">
                    Login with Google
                </div>
                <div className="px-8 py-4 rounded-md text-white bg-slate-950">
                    Login with Github
                </div>
                <div className="px-8 py-4 rounded-md text-white bg-blue-600">
                    Login with Facebook
                </div>
            </div>
        </div>
    );
};

export default Login;

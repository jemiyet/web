import React from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Login() {
    const handleLogin = () => {
        Inertia.post('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Jemiyet Web Test
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Demo login with first user
                    </p>
                </div>
                <div>
                    <button
                        onClick={handleLogin}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Login as Test User
                    </button>
                </div>
            </div>
        </div>
    );
} 
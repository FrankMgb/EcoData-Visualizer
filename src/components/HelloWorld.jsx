'use client';

import { useState, useEffect } from 'react';

const HelloWorld = () => {
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL;
                if (!apiUrl) {
                    setMessage('API URL not configured');
                    return;
                }

                const res = await fetch(`${apiUrl}/hello-world`);
                const data = await res.json();
                setMessage(data.message);
            } catch (error) {
                console.error('Error fetching message:', error);
                setMessage('Error connecting to API');
            }
        };

        fetchMessage();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center p-8 mt-8 bg-white/5 rounded-2xl border border-white/10 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-white mb-2">Backend Connection</h3>
            <p className="text-primary font-mono text-lg">{message}</p>
        </div>
    );
};

export default HelloWorld;

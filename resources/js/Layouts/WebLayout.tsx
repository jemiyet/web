import React, { ReactNode } from 'react';

interface WebLayoutProps {
    children: ReactNode;
}

export default function WebLayout({ children }: WebLayoutProps) {
    return (
        <div className="min-h-screen bg-black text-white">
            {children}
        </div>
    );
} 
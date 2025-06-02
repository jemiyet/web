import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import WebLayout from '../../Layouts/WebLayout';

interface User {
    id: number;
    name: string;
    username: string;
    avatar?: string;
}

interface Post {
    id: number;
    content: string;
    user: User;
    likes_count: number;
    comments_count: number;
    created_at: string;
    images?: string[];
    is_liked?: boolean;
}

interface PageProps {
    posts: Post[];
    trending_groups: any[];
    suggested_users: User[];
    auth: {
        user: User;
    };
    [key: string]: any;
}

export default function Home() {
    const { posts, trending_groups, suggested_users, auth } = usePage<PageProps>().props;

    const formatTime = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMins / 60);
        const diffDays = Math.floor(diffHours / 24);

        if (diffMins < 1) return 'now';
        if (diffMins < 60) return `${diffMins}m`;
        if (diffHours < 24) return `${diffHours}h`;
        return `${diffDays}d`;
    };

    return (
        <WebLayout>
            <Head title="Home" />
            
            <div className="min-h-screen bg-black text-white">
                {/* Top Header */}
                <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
                    <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                        <Link href="/home" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
                            𝕏 Jemiyet
                        </Link>
                        <div className="flex items-center space-x-6">
                            {auth?.user && (
                                <>
                                    <span className="text-sm text-gray-300">Welcome, {auth.user.name}</span>
                                    <Link href="/profile" className="text-blue-400 hover:text-blue-300 transition-colors">
                                        Profile
                                    </Link>
                                    <Link href="/logout" method="post" as="button" className="text-gray-400 hover:text-white transition-colors">
                                        Logout
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </header>

                <div className="max-w-6xl mx-auto flex">
                    {/* Left Sidebar */}
                    <aside className="w-64 p-6 border-r border-gray-800 sticky top-16 h-screen overflow-y-auto">
                        <nav className="space-y-2">
                            <Link 
                                href="/home" 
                                className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 transition-colors group"
                            >
                                <div className="p-2 rounded-full group-hover:bg-white/10">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                </div>
                                <span className="text-xl font-medium">Home</span>
                            </Link>
                            
                            <Link 
                                href="/groups" 
                                className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 transition-colors group"
                            >
                                <div className="p-2 rounded-full group-hover:bg-white/10">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                    </svg>
                                </div>
                                <span className="text-xl font-medium">Groups</span>
                            </Link>
                            
                            <Link 
                                href="/events" 
                                className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 transition-colors group"
                            >
                                <div className="p-2 rounded-full group-hover:bg-white/10">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-xl font-medium">Events</span>
                            </Link>
                            
                            <Link 
                                href="/profile" 
                                className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 transition-colors group"
                            >
                                <div className="p-2 rounded-full group-hover:bg-white/10">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-xl font-medium">Profile</span>
                            </Link>
                        </nav>
                        
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full mt-8 transition-colors">
                            Post Something
                        </button>
                    </aside>

                    {/* Main Feed */}
                    <main className="flex-1 max-w-2xl border-r border-gray-800">
                        {/* Header */}
                        <div className="sticky top-16 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4 z-40">
                            <h1 className="text-xl font-bold">Home</h1>
                            <p className="text-sm text-gray-500 mt-1">Latest posts from your network</p>
                        </div>

                        {/* Tweet Composer */}
                        <div className="border-b border-gray-800 p-6">
                            <div className="flex space-x-4">
                                <img 
                                    src={auth?.user?.avatar || '/default-avatar.png'} 
                                    alt={auth?.user?.name}
                                    className="w-12 h-12 rounded-full bg-gray-700"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        target.nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                                <div className="w-12 h-12 rounded-full bg-gray-700 hidden flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">
                                        {auth?.user?.name?.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <textarea 
                                        placeholder="What's happening?"
                                        className="w-full bg-transparent text-xl placeholder-gray-500 border-none resize-none focus:outline-none min-h-[120px]"
                                    />
                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex space-x-4 text-blue-500">
                                            <button className="hover:bg-blue-900/20 p-2 rounded-full transition-colors">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                            <button className="hover:bg-blue-900/20 p-2 rounded-full transition-colors">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full disabled:opacity-50 transition-colors">
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Posts Feed */}
                        <div className="divide-y divide-gray-800">
                            {posts.map((post) => (
                                <article key={post.id} className="p-6 hover:bg-gray-950/50 transition-colors">
                                    <div className="flex space-x-4">
                                        <img 
                                            src={post.user.avatar || '/default-avatar.png'} 
                                            alt={post.user.name}
                                            className="w-12 h-12 rounded-full bg-gray-700"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                target.nextElementSibling?.classList.remove('hidden');
                                            }}
                                        />
                                        <div className="w-12 h-12 rounded-full bg-gray-700 hidden flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">
                                                {post.user.name.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <h3 className="font-bold hover:underline cursor-pointer truncate">
                                                    {post.user.name}
                                                </h3>
                                                <span className="text-gray-500 truncate">@{post.user.username}</span>
                                                <span className="text-gray-500">·</span>
                                                <time className="text-gray-500 hover:underline cursor-pointer flex-shrink-0">
                                                    {formatTime(post.created_at)}
                                                </time>
                                            </div>
                                            
                                            <div className="mb-4">
                                                <p className="text-white leading-relaxed whitespace-pre-wrap">{post.content}</p>
                                                
                                                {post.images && post.images.length > 0 && (
                                                    <div className="mt-4 rounded-2xl overflow-hidden">
                                                        <img 
                                                            src={post.images[0]} 
                                                            alt="Post image"
                                                            className="w-full max-h-96 object-cover"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                            
                                            {/* Post Actions */}
                                            <div className="flex justify-between max-w-md text-gray-500">
                                                <button className="flex items-center space-x-2 hover:text-blue-500 group transition-colors">
                                                    <div className="p-2 rounded-full group-hover:bg-blue-900/20 transition-colors">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm">{post.comments_count}</span>
                                                </button>
                                                
                                                <button className={`flex items-center space-x-2 group transition-colors ${post.is_liked ? 'text-red-500' : 'hover:text-red-500'}`}>
                                                    <div className="p-2 rounded-full group-hover:bg-red-900/20 transition-colors">
                                                        <svg className="w-5 h-5" fill={post.is_liked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm">{post.likes_count}</span>
                                                </button>
                                                
                                                <button className="flex items-center space-x-2 hover:text-green-500 group transition-colors">
                                                    <div className="p-2 rounded-full group-hover:bg-green-900/20 transition-colors">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                                        </svg>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </main>

                    {/* Right Sidebar */}
                    <aside className="w-80 p-6 sticky top-16 h-screen overflow-y-auto">
                        {/* Trending Groups */}
                        <div className="bg-gray-900/50 rounded-2xl p-6 mb-6">
                            <h2 className="text-xl font-bold mb-4">Trending Groups</h2>
                            <div className="space-y-3">
                                {trending_groups.slice(0, 5).map((group) => (
                                    <Link 
                                        key={group.id} 
                                        href={`/groups/${group.id}`}
                                        className="block p-3 rounded-xl hover:bg-gray-800/50 transition-colors"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="font-medium">{group.name}</h3>
                                                <p className="text-sm text-gray-400">{group.member_count} members</p>
                                            </div>
                                            <button className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full transition-colors">
                                                Join
                                            </button>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Who to Follow */}
                        <div className="bg-gray-900/50 rounded-2xl p-6">
                            <h2 className="text-xl font-bold mb-4">Who to follow</h2>
                            <div className="space-y-4">
                                {suggested_users.map((user) => (
                                    <div key={user.id} className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <img 
                                                src={user.avatar || '/default-avatar.png'} 
                                                alt={user.name}
                                                className="w-10 h-10 rounded-full bg-gray-700"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    target.nextElementSibling?.classList.remove('hidden');
                                                }}
                                            />
                                            <div className="w-10 h-10 rounded-full bg-gray-700 hidden flex items-center justify-center">
                                                <span className="text-white font-bold text-sm">
                                                    {user.name.charAt(0).toUpperCase()}
                                                </span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium truncate">{user.name}</h4>
                                                <p className="text-sm text-gray-400 truncate">@{user.username}</p>
                                            </div>
                                        </div>
                                        <button className="text-xs bg-white text-black hover:bg-gray-200 font-bold px-4 py-1.5 rounded-full transition-colors">
                                            Follow
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </WebLayout>
    );
} 
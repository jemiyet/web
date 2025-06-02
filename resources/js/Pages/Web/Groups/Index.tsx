import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import WebLayout from '../../../Layouts/WebLayout';

interface Group {
    id: number;
    name: string;
    description: string;
    member_count: number;
    image?: string;
    created_at: string;
}

interface PageProps {
    groups: Group[];
    filters: {
        search?: string;
        category?: string;
    };
}

export default function GroupsIndex() {
    const { groups, filters } = usePage<PageProps>().props;

    return (
        <WebLayout>
            <Head title="Gruplar" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-2xl font-bold">Gruplar</h1>
                                <Link
                                    href={route('web.groups.create')}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Yeni Grup Oluştur
                                </Link>
                            </div>

                            {/* Search and Filter */}
                            <div className="mb-6">
                                <form method="get" className="flex gap-4">
                                    <input
                                        type="text"
                                        name="search"
                                        placeholder="Grup ara..."
                                        defaultValue={filters.search}
                                        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Ara
                                    </button>
                                </form>
                            </div>

                            {/* Groups Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {groups.map((group) => (
                                    <div key={group.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                        {group.image && (
                                            <img 
                                                src={group.image} 
                                                alt={group.name}
                                                className="w-full h-48 object-cover rounded-t-lg"
                                            />
                                        )}
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold mb-2">
                                                <Link 
                                                    href={route('web.groups.show', group.id)}
                                                    className="text-blue-600 hover:text-blue-800"
                                                >
                                                    {group.name}
                                                </Link>
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-3">
                                                {group.description}
                                            </p>
                                            <div className="flex justify-between items-center text-sm text-gray-500">
                                                <span>{group.member_count} üye</span>
                                                <span>{new Date(group.created_at).toLocaleDateString('tr-TR')}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {groups.length === 0 && (
                                <div className="text-center py-12">
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                                        Henüz grup bulunmuyor
                                    </h3>
                                    <p className="text-gray-500 mb-4">
                                        İlk grubu sen oluştur!
                                    </p>
                                    <Link
                                        href={route('web.groups.create')}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Grup Oluştur
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
} 
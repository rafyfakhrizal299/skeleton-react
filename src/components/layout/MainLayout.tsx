import { Outlet } from "react-router-dom";

export function MainLayout() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <header className="p-4 bg-white shadow">
                <h1 className="text-xl font-semibold">
                    React Starter Kit
                </h1>
            </header>
            <main className="p-6">
                <Outlet />
            </main>
        </div>
    )
}
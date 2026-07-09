import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { NewAreveiNavbar, Footer } from './landing';
import '../newapp.css';

export default function NewLayout() {
    useEffect(() => {
        document.body.classList.add('new-layout-active');
        document.body.classList.remove('old-layout-active');
        return () => {
            document.body.classList.remove('new-layout-active');
        };
    }, []);

    return (
        <div className="font-body text-black bg-[#F3EEE6] min-h-screen w-full overflow-x-hidden relative flex flex-col">
            <NewAreveiNavbar />
            <main className="flex-grow w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

import {Link} from 'react-router-dom'

export default function PlacesPage(){
    return (
        <div>
            <div className='text-center mt-6'>
                
                <Link className="flex gap-1 inline-flex bg-primary text-white py-2 px-6 rounded-full" to={'account/places/new'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                Add New Place</Link>

            </div>
        </div>
    );
}

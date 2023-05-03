import {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import Perks from '../perks'

export default function PlacesPage(){
    const {action} = useParams();
    const [title,setTitle] = useState('');
    const [address,setAddress] = useState('');
    const [addedPhotos,setAddedPhotos] = useState([]);
    const [photoLink,setPhotoLink] = useState('');
    const [description,setDescription] = useState('');
    const [perks,setPerks] = useState([]);
    const [extraInfo,setExtraInfo] = useState('');
    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    const [maxGuest,setMaxGuest] = useState(1);
    
    // to avoid multiple h2 tags
    function inputHeader(text){
    return (
        <h2 className='text-2xl mt-4'>{text}</h2>
    );      
    }

    //to avoid multiple p tags
    function inputDescription (text){
        return (
        <p className='text-gray-500 text-sm'>{text}</p> 
        );
    }

    //combination of above two functions
    function preInput(header,description){
        return(
            <>
            {inputHeader(header)}
            {inputDescription(description)}
            </>
        )
    }

    // to add photo by link
    async function addPhotoByLink(ev){
        ev.preventDefault(); 
        await axios.post('/user/upload', {photoLink})
    }

    return (
        <div>
            {action !== "new" && (  //is not new den will add new places
            <div className='text-center mt-6'>
                
                <Link className="flex gap-1 inline-flex bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                Add New Place</Link>

            </div>
            )}
            {action ==='new' && (
                <div>
                    <form>
                            {preInput("Title",'Title for your place should be short')}
                        <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder='title'/>

                            {preInput("Address",'Address for your place')}
                        <input type="text" value={address} onChange={ev => setAddress(ev.target.value)} placeholder='address'/>

                            {preInput("Photos",'more = better')}
                        <div className='flex gap-2'>
                            <input type="text" value={photoLink} onChange={ev => setPhotoLink(ev.target.value)} placeholder='Add using link....jpg'/>
                            <button onClick={addPhotoByLink} className='bg-gray-200 rounded-2xl px-4'>Add&nbsp;photos</button>
                        </div>


                        <div className='grid grid-cols-3 md:grid-cols-4 lg-grid-cols-6 mt-3'>  
                        <button className='flex gap-1 justify-center border bg-transparent rounded-2xl p-8 text-2xl text-gray-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>upload</button>
                        </div>
                            {preInput("Description",'description of your place')}
                        <textarea value={description} onChange={ev => setDescription(ev.target.value)}/>
                            {preInput("Perks",'Select all the perks of your place')}
                       <Perks selected={perks} onChange={setPerks}/>
                            {preInput("Extra info",'House rules, etc')}
                        <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)}/>
                            {preInput("Checkin & out time,max guests",'add chck in and out times,remember to have some time window for cleaning room between guest')}
                        <div className='grid gap-2 sm:grid-cols-3'>
                            <div>
                                <h3 className='mt-2 -mb-1'>Check in time</h3>
                                <input type="text" value={checkIn} onChange={ev => setCheckIn(ev.target.value)} placeholder='14:00' />
                            </div>
                            <div>
                                <h3 className='mt-2 -mb-1'>Check out time</h3>
                                <input type="text" value={checkOut} onChange={ev => setCheckOut(ev.target.value)} placeholder='21:00' />
                            </div>
                            <div>
                                <h3 className='mt-2 -mb-1'>Number of guests</h3>
                                <input type="number" value={maxGuest} onChange={ev => setMaxGuest(ev.target.value)} placeholder='5' />
                            </div>
                        </div>
                        <button className='primary my-3'>Save</button>
                    </form> 
                </div>
            )}
        </div>
    );
}

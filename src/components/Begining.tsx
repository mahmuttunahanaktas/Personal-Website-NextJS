import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { Fade } from '@mui/material';

export default function Begining() {

    return (
        <Fade in={true} timeout={500}>
            <div className="Begin h-screen w-full flex">
                <div className='w-[60%] h-auto flex flex-col justify-center items-center p-5' style={{ marginTop: '7%' }}>
                    <p className="m-5 mb-3 text-xl">
                        <h1 className='text-6xl'><strong>Merhaba 👋🏻</strong></h1> <br></br>
                        Öğrenmeyi tutkuyla seven bir öğrenci ve geleceğin yazılım dünyasında iz bırakmayı hedefleyen bir full-stack developer.
                        Boş vakitlerimde kitapların büyülü dünyasında kaybolur, yeni hikayelere yelken açarım.
                        Her satır kodda, her sayfada yeni bir serüven bulurum.
                    </p>
                    <button className="bg-transparent float-right text-black border-1 border-current rounded-3xl flex items-center text-2xl gap-1 px-4 py-2 transition mr-9">
                        <p className='m-0 p-0'>Hakkımda</p>
                        <GoArrowRight className='text-2xl' />
                    </button>
                </div>
                <div className='w-[40%] bg-sky-200'>
                    <img src='../photos/photo3.jpg' className='bg-sky-400 w-full h-auto cursor-pointer rounded-xl'></img>
                    <div className='order-3 w-full flex flex-col items-center justify-center'>
                        <h1 className='text-5xl text-center'>Mahmut Tunahan <br />Aktaş</h1>
                        <p className='text-gray-500 text-xl'>Full-stack Developer </p>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

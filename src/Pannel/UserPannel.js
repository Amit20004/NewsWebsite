import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/footer/Footer';
import './Pannel.css';

function UserPannel() {
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        // Retrieve the image from localStorage when the component mounts
        const savedImage = localStorage.getItem('userImage');
        if (savedImage) {
            setImageSrc(savedImage);
        }
    }, []);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target.result;
                setImageSrc(result);
                // Save the image in localStorage
                localStorage.setItem('userImage', result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <Header />

            <section>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-2 bg-dark">
                                <div className="card-body text-center">
                                    <div
                                        style={{
                                            width: '300px',
                                            margin: 'auto',
                                            borderRadius: '50%',
                                            height: '300px',
                                            border: '2px solid #ddd',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundImage: imageSrc ? `url(${imageSrc})` : 'none',
                                        }}
                                    >
                                        {!imageSrc && 'Select an image'}
                                    </div>
                                    <h5 className="my-3 text-white">UserName: {localStorage.getItem('userName')}</h5>
                                    <p className="mb-1 text-white">UserEmail: {localStorage.getItem('userEmail')}</p>
                                    <div className="m-auto">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default UserPannel;

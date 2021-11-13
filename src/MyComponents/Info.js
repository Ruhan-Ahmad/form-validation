import React from 'react';
import Typewriter from 'typewriter-effect';

export const Info = () => {
    let infoStyle = {
        minHeight: '91.5vh',
    }
    return (
        <div style={infoStyle} className="bg-success text-light p-5">
            <Typewriter onInit={(Typewriter)=>{
                Typewriter
                .typeString("This is form validation done by formik and yup together, to show how form validate data before sen it to server. You can visit my github for more info about other cool works")
                .start()
            }}
            />
        </div>
    )
}

import React from 'react';
import Navbar from '../../components/navbar/Navbar';      
import Footer from '../../components/footer/Footer';     
import AppointmentForm from '../../components/appointment/AppointmentForm'; 
import './AppointmentFormPage.css'; // Import CSS for additional styling

const AppointmentFormPage = () => {
    return (
        <div className="appointment-page">
            {/* Navbar Component */}
            <Navbar />

            {/* Page Content */}
            <div className="appointment-content">
                <h2>Book an Appointment</h2>
                <p className="appointment-description">
                    We look forward to assisting you. Please fill out the form below to schedule your appointment.
                </p>

                {/* Appointment Form Component */}
                <AppointmentForm />
            </div>

            {/* Footer Component */}
            <Footer />
        </div>
    );
};

export default AppointmentFormPage;

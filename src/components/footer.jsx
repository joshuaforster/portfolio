import React from "react";

export default function Footer() {
    const year = new Date().getFullYear(); // Get the current year

    return (
        <footer style={{
            backgroundColor: '#1A202C', 
            color: 'white', 
            textAlign: 'center', 
            padding: '16px', 
            fontSize: '18px',
            marginTop: 'auto', // This helps in a flex container
        }}>
            @ Joshua Forster {year}
        </footer>
    );
}

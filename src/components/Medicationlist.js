import React, { useState, useEffect } from "react";
import Medication from "./Medication";


function Medicationlist({handleAddItem}) {
    const [medications, setMedications] = useState([]);
    useEffect(() => {
        fetch('https://medicationsapi.herokuapp.com/medications')
            .then((response) => response.json())
            .then((medics) => setMedications(medics))
            .catch((err) => console.log(err));

            return () => console.log('cleanup');
    }, []);

    // function handleAddItem(newItem) {
    //     setMedications([...medications, newItem]);
    //   }

    return (
        <table className="Table-list">
            <h2 className="Header-search">ALL MEDICATIONS</h2>
            <tbody className="Table-body">
                <tr>
                    <th>
                        <h3>Medications</h3>
                    </th>
                    <th>
                        <h3>Form</h3>
                    </th>
                    <th>
                        <h3>Retail Price($)</h3>
                    </th>
                    <th>
                        <h3>Our Price($)</h3>
                    </th>
                    <th>
                        <h3>Savings($)</h3>
                    </th>
                </tr>
                {medications.map((medication, idx) => {
                    return (
                        <Medication
                            key={medication.id}
                            medication={medication}
                        />
                    );
                })}
            </tbody>
        </table>

        
    )

    
}

export default Medicationlist;
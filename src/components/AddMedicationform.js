import React, { useState } from "react";

function AddMedicationform({onAddItem}) {
    const [medication, setMedication] = useState("")
    const [form, setForm] = useState("");
    const [retail, setRetail] = useState();
    const [price, setPrice] = useState();
    const [savings, setSavings] = useState();

    function handleSubmit(e) {
        // e.preventDefault();
        const addFormData = {
            name: medication,
            form: form,
            retail: retail,
            price: price,
            savings: savings,
        };

        fetch("https://medicationsapi.herokuapp.com/medications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addFormData),
        })
            .then((res) => res.json())
            .then((newForm) => onAddItem(newForm))
            .catch((err) => console.log(err))
        alert("New Medication added");
    }


    return (
        <div className="Header-search">
            <h3>All Medications</h3>
            <p>Add new medication below</p>

            <div>
                <form className="Add-form" onSubmit={handleSubmit}>
                    <div className='inline fields'>
                        <input onChange={(e) => setMedication(e.target.value)} id="medication" value={medication} type='text' name='medication' placeholder="Medication name" />
                        <select onChange={(e) => setForm(e.target.value)} id="form" value={medication.form} name="form">
                            <option value=''></option>
                            <option value='tablet'>Tablet</option>
                            <option value='capsule'>Capsule</option>
                            <option value='capsule'>Syrup</option>
                            <option value='capsule'>Injection</option>
                        </select>
                        <input onChange={(e) => setRetail(e.target.value)} id="retail" value={retail} type='number' name='retail' placeholder='Retail price' step='0.01' />
                        <input onChange={(e) => setPrice(e.target.value)} value={price} type='number' name='price' placeholder='Our price' step='0.01' />
                        <input onChange={(e) => setSavings(e.target.value)} value={savings} type='number' name='savings' placeholder='Savings' step='0.01' />
                    </div>
                    <br />
                    <button className='Btn-form' type='submit'>
                        Add Medication
                    </button>
                </form>
                <hr></hr>
            </div>
        </div>


    );
}

export default AddMedicationform;
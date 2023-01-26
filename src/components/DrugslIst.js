import React from "react";
import Search from "./Search";
import AddMedicationForm from "./AddMedicationForm";
import Medicationlist from "./Medicationlist";

function Drugslist() {
    return (
        <div>
        <Search />
        <AddMedicationForm />
        <MedicationList />
        </div>
    )
}

export default Drugslist;
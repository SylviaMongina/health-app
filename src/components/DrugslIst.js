import React from "react";
import Search from "./Search";
import AddMedicationform from "./AddMedicationform";
import Medicationlist from "./Medicationlist";

function Drugslist() {
    return (
        <div>
        <Search />
        <AddMedicationform />
        <Medicationlist />
        </div>
    )
}

export default Drugslist;
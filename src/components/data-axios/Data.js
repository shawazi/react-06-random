import axios from "axios";
import React from "react";

async function Data() {
    try {
        const response = await axios.get("https://randomuser.me/api/");
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export default Data();
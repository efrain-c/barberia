import React from "react";
import { Link } from "react-router-dom";

export function MenuBtn(){
    return(
        <div>
            <Link to='/Cortes'>
                <button type="button" className="btn btn-success btn-lg">
                    Nuestros Cortes
                </button>
            </Link>
        </div>
    )
}
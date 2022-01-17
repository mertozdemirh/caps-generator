import React from "react";
import "./Meme.css"

export default function Meme(){
    return(
        <main>
            <form>
                <div className="text-container">
                    <input 
                        type="text"
                        placeholder="Top text"
                        className="form-input"
                    />
                    <input 
                        type="text"
                        placeholder="Bottom text"
                        className="form-input"
                    />
                </div>
                <button 
                    className="form-button"
                >
                    Get a new meme image 
                </button>
            </form>
        </main>
    )
}
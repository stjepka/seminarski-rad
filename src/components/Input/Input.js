import React from "react";



const Input = function() {
    return (
        <form>
            <fieldset>
                <label>ID</label>
                <input type="text" />
            </fieldset>
            <fieldset>
                <label>Secret Key</label>
                <input type="text" />
            </fieldset>
            <fieldset>
                <legend>Choose your character:</legend>
                <div>
                    <input type="radio" value="phoebe" name="friends" id="phoebe"/>
                    <label>Phoebe</label>
                </div>
                <div>
                    <input type="radio" value="ross" name="friends" id="ross"/>
                    <label>Ross</label>
                </div>
                <div>
                    <input type="radio" value="chandler" name="friends" id="chandler" />
                    <label>Chandler</label>
                </div>
                <div>
                    <input type="radio" value="joey" name="friends" id="joey"/>
                    <label>Joey</label>
                </div>
                <div>
                    <input type="radio" value="rachel" name="friends" id="rachel"/>
                    <label>Rachel</label>
                </div>
                <div>
                    <input type="radio" value="monica" name="friends" id="monica"/>
                    <label>Monica</label>
                </div>
            </fieldset>
        </form>
    );
    const drone = new Scaledrone('cG3HuR7GIhCwzmNN');

};

export default Input;
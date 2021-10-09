import React from 'react';
interface IBtn {
    label: string
}

function Button({label}: IBtn){
    return (
        <div data-testid="button" className="button-style">{label}
        </div>);
}
export default Button;
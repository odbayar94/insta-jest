import React from 'react';

type TErrorMessamge = {
	message: string;
	enable: boolean;
};

function ErrorMessage({message, enable}: TErrorMessamge){
  
  let data: any;
  if(enable){
    data = (<div className="error-message--active">{message}</div>);
  }else{
    data = <div></div>
  }
    return data;
}
export default ErrorMessage;
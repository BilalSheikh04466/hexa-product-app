import Cookies from 'js-cookie';
import React from 'react';

export const Welcome: React.FC = () => {
    const val = Cookies.get('jwt');
    console.log(val);
    return <div>HII</div>;
};

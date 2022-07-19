import React from 'react';

interface ButtonProps {
    onClick: () => void;
    className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({onClick, className, children}) => {

    return (
        <div className={`button ${className}`} onClick={onClick}>
          <span className='text'>{children}</span>
        </div>
    );
}

export default Button;
import React, { useEffect } from 'react';
import { Answer } from '../common/types';

interface SelectorProps {
    onSelect: (index: number) => void;
    options: Array<Answer>;
}

const Selector: React.FC<SelectorProps> = ({onSelect, options}) => {
    const [selected, setSelected] = React.useState(0);

    const handleSelect = (index: number) => {
        setSelected(index);
        onSelect(index);
    }

    useEffect(() => {
        let selectedOption = 0;

        options.map((option: Answer, index: number) => {
            if (option.selected) selectedOption = index;
        });

        setSelected(selectedOption);
    }, [options])
    
    return (
        <div className={`options`}>
            {options.map(({ label, score: { text, value } }, index) => (
                <div key={index} data-testid={`answer-${index}`} className={`option ${selected == index ? `selected` : false}`} onClick={() => handleSelect(index)}> 
                    <div className='content'>
                        <div className='text'>{label}</div>
                        <div className='indicator'>{text}</div>
                    </div> 
                </div>
            ))}
        </div>
    );
}

export default Selector;
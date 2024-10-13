import React from 'react';
import styled from 'styled-components';
import { clampText } from '@/common/styles/mixins';
import { borders, colors, fonts, transitions } from '@/common/styles/styleConstants';

interface TextareaProps {
    value: string;
    placeholder: string;
    onChange: (_: string) => void;
    name?: string;
    cols?: number;
    rows?: number;
    style?: React.CSSProperties;
    styledWrapper?: React.CSSProperties;
    maxlength?: number;
    minlength?: number;
    required?: boolean;
    autocomplete?: string;
    disabled?: boolean;
    border?: boolean;
};

const TextAreaWrapper = styled('div')<{$border: boolean}>`
    height: fit-content;
    padding: 5px 10px 5px 0px;
    ${props=>props.$border && `
        border-radius: ${borders.smallRadius};
        border: 1px solid ${colors.gray};
        transition: ${transitions.mediumTransition};

        &:hover {
            border: 1px solid ${colors.darkAngled};
        }
    `}
`;

const TextareaStyled = styled('textarea')`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    width: 100%;
    border: none;
    outline: none;
    overflow: hidden;
    resize: none;
    border-radius: ${borders.smallRadius};
    padding: 0px 10px;

    &::placeholder{
        color: ${colors.gray};
    }
`;

const Textarea = ({
    value,
    placeholder,
    onChange,
    name,
    cols,
    rows,
    style,
    styledWrapper,
    maxlength,
    minlength,
    required,
    autocomplete,
    disabled,
    border,
}: TextareaProps) => {

    //TODO оптимизировать
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value);
        if(e.currentTarget.scrollHeight < 500){
            e.currentTarget.style.height = 'auto';
            e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
            e.currentTarget.style.overflow = 'hidden';
        }else{
            e.currentTarget.style.overflow = 'auto';
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          onChange(value + '\n');
        }
      };

    return (
        <TextAreaWrapper style={styledWrapper} $border={!!border}>
            <TextareaStyled
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                name={name}
                cols={cols}
                rows={rows}
                style={style}
                maxLength={maxlength}
                minLength={minlength}
                required={required}
                autoComplete={autocomplete}
                disabled={disabled}
            />
        </TextAreaWrapper>
    );
};

export default Textarea;

import React from 'react';
import styled from 'styled-components';
import { clampText } from '@/common/styles/mixins';
import { colors, fonts } from '@/common/styles/styleConstants';

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
};

const TextAreaWrapper = styled('div')`
    height: fit-content;
`;

const TextareaStyled = styled('textarea')`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    width: 100%;
    border: none;
    outline: none;
    overflow: hidden;
    resize: none;
    
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
}: TextareaProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value);
        e.currentTarget.style.height = 'auto';
        e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
    };

    return (
        <TextAreaWrapper style={styledWrapper}>
            <TextareaStyled
                value={value}
                onChange={handleChange}
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

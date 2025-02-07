import styled from 'styled-components';
import { borders, colors, fonts, transitions } from '@/common/styles/styleConstants';
import { clampText } from '@/common/styles/mixins';
import { InputHTMLAttributes, Ref, forwardRef, useState } from 'react';
import { FieldError } from 'react-hook-form';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  type?: string;
  maxLength?: number;
  error?: FieldError;
  name?: string;
};

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

const InputStyled = styled('input') <{ $isValid: boolean}>`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  color: ${colors.black};
  padding: 10px;
  display: block;
  width: 100%;
  background: none;
  border: none;
  border: 2px solid ${props => props.$isValid ? colors.gray : colors.red};
  border-radius: ${borders.extraSmallRadius};

  &:focus {
    outline: none;
  }

  &:focus + label {
    top: -7px;
    font-size: ${fonts.sizes.smallMobile}px;
    /* color: ${colors.lightGray}; */
    background-color: ${colors.backgroundGray};
    padding-inline: 3px;
  }

`;

const LabelStyled = styled('label') <{ $isValid: boolean, $isEmpty: boolean  }>`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  position: absolute;
  color: ${props => props.$isValid ? colors.gray : colors.red};
  font-weight: normal;
  pointer-events: none;
  left: 10px;
  top: 10px;
  transition: ${transitions.fastTransition};

  ${props => props.$isEmpty == false && `
    top: -7px;
    font-size: ${fonts.sizes.smallMobile}px;
    /* color: ${colors.lightGray}; */
    background-color: ${colors.backgroundGray};
    padding-inline: 3px;
  `}
`;

const ErrorWrapper = styled('p')`
  position: absolute;
  left: 10px;
  bottom: -20px;
  color: ${colors.red};
  font-size: ${fonts.sizes.extraSmall}px;
`;

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({
    label,
    type = "text",
    required = false,
    maxLength,
    error,
    onChange,
    name,
    ...props
  }: InputFieldProps, ref: Ref<HTMLInputElement>) => {
    const [value, setValue] = useState("");
    const isEmpty = !value.trim();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      if (onChange) {
        onChange(e); 
      }
    };

    return (
      <InputWrapper>
        <InputStyled
          type={type}
          required={required}
          maxLength={maxLength}
          $isValid={!error}
          placeholder=""
          ref={ref}
          name={name}
          onChange={handleChange}
          {...props}
        />

        <LabelStyled $isValid={!error} $isEmpty={isEmpty} >{label}</LabelStyled>
        {error && <ErrorWrapper>{error.message}</ErrorWrapper>}
      </InputWrapper>
    );
  }
);

export default InputField;
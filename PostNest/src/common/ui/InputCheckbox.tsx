import styled from "styled-components";
import check from "@/common/svg-helper/icons/check.svg";
import { borders, colors, shadows, transitions } from "@/common/styles/styleConstants";
import { useId } from "react";

const Checkbox = styled('input')`
    position: relative;
    appearance: none; 
    width: 25px;
    height: 25px;
    background: ${colors.backgroundGray};
    box-shadow: ${shadows.checkBoxShadow};
    border-radius: ${borders.miniRadius};
    border: 1px solid ${colors.white};
    cursor: pointer;
    transition: ${transitions.fastTransition};

    &:checked {
        background: ${colors.black}
    }

    &:checked::after {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 20px; 
        height: 20px; 
        background-image: url(${check});
        background-repeat: no-repeat;
        background-size: cover;
    }
`;

const CheckboxLabel = styled('label')`
    margin-top: 5px;
    width: fit-content;
    display: flex;
    align-items: center;
`;

interface InputCheckboxProps {
    checked: boolean;
    onChecked: () => void;
    required?: boolean;
}

const InputCheckbox = ({ checked, onChecked, required = false }: InputCheckboxProps) => {
    const id = useId();

    return (
        <>
            <Checkbox type="checkbox" id={id} checked={checked} onChange={onChecked} required={required}/>
            <CheckboxLabel htmlFor={id} />
        </>
    );
};

export default InputCheckbox;

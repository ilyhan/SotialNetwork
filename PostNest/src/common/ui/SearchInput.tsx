import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { clampText } from '@/common/styles/mixins';
import { borders, colors, fonts } from '@/common/styles/styleConstants';
import SvgHelper from '@/common/svg-helper/SvgHelper';
import { useDebounce } from '@/common/hooks/useDebiunce';

interface SearchInputProps {
    onSearch: (_: string) => void;
    placeholder?: string;
    onBlur?: () => void;
    onFocus?: () => void;
};

const StyleInput = styled('input')`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    color: ${colors.black};
    display: block;
    padding-block: 5px;
    width: 100%;
    background: none;
    border: none;
    outline: none;
`;

const InputWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 15px;
    border: 1px solid ${colors.lightGray};  
    border-radius: ${borders.extraSmallRadius};
`;

const SearchInput = memo(({ onSearch, placeholder = 'Поиск', onBlur, onFocus }: SearchInputProps) => {
    const [query, setQuery] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    useEffect(() => {
        searchDebounce(query);
    }, [query]);

    const handleSearch = (val: string) => {
        if (val.trim()) {
            onSearch(val.trim());
        }
    };

    const searchDebounce = useDebounce(handleSearch, 500);

    return (
        <InputWrapper>
            <StyleInput
                type="text"
                value={query}
                onChange={handleChange}
                placeholder={placeholder}
                onBlur={onBlur}
                onFocus={onFocus}
            />
            <SvgHelper iconName='search' color={colors.gray} />
        </InputWrapper>
    );
});

export default SearchInput;
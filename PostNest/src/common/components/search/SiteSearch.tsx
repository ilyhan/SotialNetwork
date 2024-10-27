import SearchInput from "@/common/ui/SearchInput";
import {
    SiteSearchWrapper,
    SearchResult,
    SearchList,
} from "@/common/components/search/style";
import useSearch from "@/common/hooks/useSearch";
import { useCallback, useEffect, useRef, useState } from "react";
import SearchItem from "@/common/components/search/SearchItem";

const SiteSearch = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [show, setShow] = useState(false);
    const [searchText, setSearchText] = useState('');
    const userList = useRef<HTMLDivElement | null>(null);

    const { data, refetch } = useSearch(searchText);

    const handleSearch = useCallback((value: string) => {
        setSearchText(value);
    }, []);

    useEffect(() => {
        if (searchText.length) {
            refetch();
        }
    }, [searchText]);

    useEffect(() => {
        if (userList.current) {
            userList.current.focus();
        };
    });

    const handleBlur = useCallback(() => {
        setShow(true);
        setTimeout(() => {
            setIsOpen(false);
        }, 300);
    }, []);

    const handleFocus = useCallback(() => {
        setShow(false);
        setIsOpen(true);
    }, []);

    return (
        <SiteSearchWrapper >
            <SearchInput
                onSearch={handleSearch}
                onBlur={handleBlur}
                onFocus={handleFocus}
            />
            {isOpen && <SearchResult $show={show}>
                <SearchList>
                    {data?.map(item => (
                        <SearchItem
                            key={item.id}
                            {...item}
                        />
                    ))}
                </SearchList>
            </SearchResult>}
        </SiteSearchWrapper>
    );
};

export default SiteSearch;
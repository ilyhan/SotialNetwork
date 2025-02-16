import { useEffect, useState } from "react";
import {
    SliderWrapper,
    SliderContent,
    ContentWrapper,
    ButtonNext,
    ButtonPrev
} from "@/common/components/slider/style";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { colors } from "@/common/styles/styleConstants";
import IconButton from "@/common/ui/IconButton";

interface SliderProps {
    content: string[];
    onEdit?: (ind: number) => void;
};

const Slider = ({ content, onEdit }: SliderProps) => {
    const [currrent, setCurrent] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (currrent > content.length - 1) {
            setCurrent(content.length - 1);
        }
    }, [content]);

    const handleNext = () => {
        setCurrent(prev => prev < content.length - 1 ? prev + 1 : prev);
    };

    const handlePrev = () => {
        setCurrent(prev => prev > 0 ? prev - 1 : prev);
    };

    return (
        <>
            <SliderWrapper
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
            >
                {content.map((item, index) => (
                    <ContentWrapper
                        key={index}
                        $image={item}
                        $translate={currrent}
                    >
                        <SliderContent src={item} />
                        {!!onEdit && <IconButton icon="trash" onClick={() => onEdit(index)} style={{ position: 'absolute', top: '15px', right: '15px', zIndex: 5, color: 'red' }} />}
                    </ContentWrapper>
                ))}

                {currrent > 0 && isActive &&
                    <ButtonPrev onClick={handlePrev} type="button">
                        <SvgHelper iconName="arrow" height={21} width={21} color={colors.lightGray} />
                    </ButtonPrev>
                }

                {currrent < content.length - 1 && isActive &&
                    <ButtonNext onClick={handleNext} type="button">
                        <SvgHelper iconName="arrow" height={21} width={21} color={colors.lightGray} />
                    </ButtonNext>
                }

            </SliderWrapper>
            <p style={{width: 'fit-content', margin: '0 auto'}}>{content.length > 1 && currrent + 1 + '/' + content.length}</p>
        </>
    );
};

export default Slider;
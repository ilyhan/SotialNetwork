import { useState } from "react";
import {
    SliderWrapper,
    SliderContent,
    ContentWrapper,
    ButtonNext,
    ButtonPrev
} from "@/common/components/slider/style";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { colors } from "@/common/styles/styleConstants";

interface SliderProps {
    content: string[];
};

const Slider = ({ content }: SliderProps) => {
    const [currrent, setCurrent] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const handleNext = () => {
        setCurrent(prev => prev < content.length - 1 ? prev + 1 : prev);
    };

    const handlePrev = () => {
        setCurrent(prev => prev > 0 ? prev - 1 : prev);
    };

    return (
        <SliderWrapper
            onMouseEnter={()=>setIsActive(true)}
            onMouseLeave={()=>setIsActive(false)}
        >
            {content.map((item, index) => (
                <ContentWrapper
                    key={index}
                    $image={item}
                    $translate={currrent}
                >
                    <SliderContent src={item} />
                </ContentWrapper>
            ))}
            
            {currrent > 0 && isActive &&
                <ButtonPrev onClick={handlePrev} type="button">
                    <SvgHelper iconName="arrow" height={21} width={21} color={colors.lightGray} />
                </ButtonPrev>
            }

            {currrent < content.length - 1 && isActive &&
                <ButtonNext onClick={handleNext}  type="button">
                    <SvgHelper iconName="arrow" height={21} width={21} color={colors.lightGray} />
                </ButtonNext>
            }
        </SliderWrapper>
    );
};

export default Slider;
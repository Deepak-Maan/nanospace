import { ButtonArrow } from "./Icons";

const CommonButton = ({ buttonText, buttonClass, arrowColor }) => {
    return (
        <button className={`text-white flex items-center group duration-300 bg-blue rounded-[48px] text-sm md:text-lg font-medium md:w-full font-saira py-1.5 md:py-3 md:px-3 px-3 gap-[7px] h-10 leading-6 ${buttonClass}`}>
            {buttonText}
            <span className="pt-0.5 group-hover:translate-x-1.5 duration-300">
                <ButtonArrow color={arrowColor} />
            </span>
        </button>
    );
};

export default CommonButton;

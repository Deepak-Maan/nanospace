import { ButtonArrow } from "./Icons";

const CommonButton = ({ buttonText, buttonClass, arrowColor }) => {
    return (
        <button className={`text-white flex items-center group duration-300 bg-blue rounded-full text-sm md:text-lg font-medium md:w-full font-saira py-1.5 md:py-3 mx-auto md:ps-4 md:pr-3 px-3 gap-1.5 h-10 leading-6 ${buttonClass}`}>
            {buttonText}
            <span className="mt-0.5 group-hover:translate-x-1 duration-300">
                <ButtonArrow color={arrowColor} />
            </span>
        </button>
    );
};

export default CommonButton;

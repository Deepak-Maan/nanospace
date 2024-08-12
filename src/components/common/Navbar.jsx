import React, { useEffect, useState } from "react";
import CommonButton from "./CommonButton";
import { NAV_DATA } from "../../utils/helper";
import pageLogo from "../../assets/images/svg/page-logo.svg"
import { Link } from "react-router-dom";

export default function Navbar() {
    const [nav, setNav] = useState(true);
    useEffect(() => {
        if (nav === false) {
            document.body.classList.add("max-lg:overflow-hidden");
        } else {
            document.body.classList.remove("max-lg:overflow-hidden");
        }
    }, [nav]);
    return (
        <div className="shadow-nav backdrop-blur-[20px] bg-white bg-opacity-[6%]">
            <div className="container mx-auto xl:max-w-[1304px] px-3">
                <div className="flex justify-between items-center py-3 lg:py-0">
                    <Link href={"/"}>
                        <img
                            src={pageLogo}
                            alt="navlogo"
                            className="w-[154px] h-12 "
                        />
                    </Link>
                    <ul
                        className={`${nav ? "left-[-100%]" : "left-0  z-[50]"
                            } flex items-center max-lg:bg-off-black lg:flex-row max-lg:justify-center max-lg:flex-col top-0 max-lg:min-h-[101vh] max-lg:w-full max-lg:fixed z-[4] lg:pl-[60px] xl:pl-[100px] transition-all duration-300 ease-linear`}
                    >
                        {NAV_DATA.map((data, index) => (
                            <li key={index} className="lg:py-7 py-2 sm:py-4 lg:px-4 lg:hover:bg-off-white !bg-opacity-50">
                                <Link
                                    onClick={() => setNav(!nav)}
                                    href={data.Path}
                                    className="text-white text-base font-saira font-normal transition-all duration-300 ease-linear "
                                >
                                    {data.Link}
                                </Link>
                            </li>
                        ))}
                        <div className="lg:hidden block">
                            <div className="w-[130px] ">
                                <CommonButton buttonText="Find More" />
                            </div>
                        </div>
                    </ul>
                    <div className="lg:block hidden">
                        <div className="flex items-center gap-[25px]">
                            <div className=" w-[130px] ">
                                <CommonButton buttonText="Find More" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center lg:hidden cursor-pointer">
                        <div
                            onClick={() => setNav(!nav)}
                            className="lg:hidden flex w-[30px] h-[20px] justify-between items-center flex-col z-[50] relative"
                        >
                            <span
                                className={`${nav ? "" : "rotate-45 translate-y-[8px]"
                                    } bg-white h-[4px] w-full rounded-[10px] transition-all ease-linear duration-300`}
                            ></span>
                            <span
                                className={`${nav ? "" : "opacity-0"
                                    } bg-white h-[4px] w-full transition-all duration-300 ease-linear rounded-[10px]`}
                            ></span>
                            <span
                                className={`${nav ? "" : "-rotate-45 -translate-y-[8px]"
                                    } bg-white h-[4px] w-full transition-all duration-300 ease-linear rounded-[10px]`}
                            ></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
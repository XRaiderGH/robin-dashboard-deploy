import Image from "next/image";

const Header = () => {
    return (
        <div className="header mt-7 mb-7">
            <div className="flex flex-row justify-between">
                <div className="logo"><Image src="/assets/logo.svg" width='130' height='66' alt="Logo"/>
                </div>
                <div className="flex flex-col justify-center">
                    <button className="sign-out text-xl text-white border-2 border-white rounded-3xl w-186 h-50 py-1 transition duration-200 ease-in-out hover:bg-blue-500">
                        Sign out
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;

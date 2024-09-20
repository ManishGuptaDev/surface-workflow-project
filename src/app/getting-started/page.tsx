import Divider from "~/components/atoms/Divider";
import OnBoarding from "~/components/organisms/OnBoarding";

export default function Page(){
    return (
        <div>
            <h1 className="text-[32px] font-semibold pb-2">Getting started</h1> 
            <Divider />
            <OnBoarding />
        </div>
    )
}
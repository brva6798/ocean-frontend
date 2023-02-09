import Link from "next/link";
import Typography from "/components/Typography";
const Navigation = () => {
    return(
        <div className="block">
            <div className="flex text-white bg-gray-800">
                <div className="flex items-center align-middle justify-center px-2">
                    <Link href="/">
                    <Typography variant="h2">ocean.</Typography></Link>
                </div>
                <div className="flex items-center align-middle justify-center px-2 hover:underline">
                    <Link href="/">
                    <Typography variant="subtitle">Demo</Typography></Link>
                </div>
                <div className="flex items-center align-middle justify-center px-2 hover:underline">
                    <Link href="/">
                    <Typography variant="subtitle">About</Typography></Link>
                </div>
            </div>
        </div>
        
    )
}
export default Navigation;
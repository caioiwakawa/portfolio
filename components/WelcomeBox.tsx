import Image from "next/image";
import Link from "next/link";
import '@/styles/box.css';

function WelcomeBox() {
    return (
        <Link href="/about">
        <button type="button"
        className="zoom click relative w-60 h-60
        border-4 border-blue-400 rounded-3xl
        bg-gray-200">
            <Image src="/WelcomeHappy.png" alt="Welcome" fill
            className="rounded-3xl"/>
        </button>
        </Link>
    );
}

export default WelcomeBox;
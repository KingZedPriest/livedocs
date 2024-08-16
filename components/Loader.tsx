import Image from "next/image";

const Loader = () => {
    return (
        <main className="loader">
            <Image src="/assets/icons/loader.svg" alt="Loader" width={32} height={32} className="animate-spin" />
        </main>
    );
}

export default Loader;
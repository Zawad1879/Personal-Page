import NavItems from './nav-items';

export default function Navbar() {

    return (
        <div class="bg-black text-blue-100 w-56 space-y-10 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
            <img
                className="rounded-full w-40 mx-auto mt-36  border-opacity-50"
                src={`/images/avatars/zawad.jpg`}
                alt=""
            />
            <NavItems />
        </div>
    );
}
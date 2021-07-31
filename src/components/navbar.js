import NavItems from './nav-items';

export default function Navbar() {

    return (
        <div class="bg-blue-900 text-blue-100 w-56 space-y-10">
            <img
                className="rounded-full w-40 mx-auto mt-36 border-8 border-blue-800 border-opacity-50"
                src={`/images/avatars/zawad.jpg`}
                alt=""
            />
            <NavItems />
        </div>
    );
}
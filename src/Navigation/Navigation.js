import HamburgerLines from '../hamburger button lines/HamburgerLines';

const Navigation=(props)=>{

    const sidebar=()=>{
        props.sidebar((prev)=>!prev);
    };

    return(
        <nav className='w-full h-10 flex items-center justify-between sticky bg-red-600 text-white px-2 top-0 z-20'>

            <h1 className='text-xl font-semibold'>Task Manager</h1>

            <div className='w-2/12 flex flex-col items-center justify-between rounded-full py-2 cursor-pointer hover:bg-red-700' onClick={sidebar}>

                <HamburgerLines margin="mb-1" />
                <HamburgerLines margin="mb-1" />
                <HamburgerLines />

            </div>

        </nav>
    );
}
export default Navigation;
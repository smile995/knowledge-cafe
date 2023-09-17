import profile from '../../images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center px-5 py-2 border-b-2 container mx-auto'>
             <h1 className=" text-4xl font-bold">Knowledge Cafe</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;
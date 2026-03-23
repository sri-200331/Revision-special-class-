function ChildProfile(prop){
return(
    <>
    <img src={prop.image} alt="Profile" />
    <p>{prop.name}</p>
    <p>{prop.email}</p>
    </>
)
}
export default ChildProfile
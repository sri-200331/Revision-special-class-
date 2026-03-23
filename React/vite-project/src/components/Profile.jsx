// 2. Create a Profile component that displays: 
// ○ Profile Image ○ Name  ○ Email 
// Pass the data using props.
import  ChildProfile from './ChildProfile'
function Profile(){
    return(
        <>
        <ChildProfile 
        image='https://via.placeholder.com/120\'
        name='Poomani'
        email='poomanibharathi07@gmail.com'
        />
        </>
    )
}
export default Profile

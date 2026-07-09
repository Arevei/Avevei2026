import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useUserContext } from '@/contextApi/AuthContext'

const ControlMeetingStatus = ({status,meetingIdForMarking}:{status : string, meetingIdForMarking : string}) => {

    const {user : userForAuthority} = useUserContext();
    
    const MarkMeetingCompleted = async ()=>{
        try{
            console.log(userForAuthority)
            const response = await fetch(`https://areveibackend.onrender.com/api/v1/meet/markMeetingCompleted/${meetingIdForMarking}`,{
                method : "PATCH",
                headers : {
                    'Authorisation' : `Bearer ${userForAuthority.access}`
                },
                credentials : 'include'
            });
            const data = await response.json();
            if(data.success===false){
                throw new Error(data.message)
            }
            if(data.message){
                toast({
                  title: "Update Successful",
                  description : data.message
                })
              }
        }
        catch(error : any){
            if(error.message){
                toast({
                    variant : "destructive",
                    title: "Update Error",
                    description : error.message
                  })
            }
        }
        
        
    }

  return (
    <div>
        {
            userForAuthority.authority==="Admin" && status==="Pending"? (<Button onClick={MarkMeetingCompleted} className='bg-green-300 text-black mt-2'>Mark Complete</Button>) : (<div className="mt-2">Status : <span className={`${status==="Pending"?"text-white bg-black p-2 rounded-md":"text-black bg-green-400 p-2 rounded-md"}`}>{status}</span></div>)
        }
    </div>
    
  )
}

export default ControlMeetingStatus
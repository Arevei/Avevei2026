import Loader from "@/components/shared/Loader";
import { toast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react"
import { columns, columnsSmallScreen, Meeting } from "./DataTable/columns";
import { DataTable } from "./DataTable/data-table";
import { useUserContext } from "@/contextApi/AuthContext";

const AdminView = () => {

    const [loadingBar, setloadingBar] = useState(false);
    const [meetingArray, setMeetingArray] = useState<Meeting[]>([]);
    const {user : userForGraph} = useUserContext();
    const [totalMeetings,setTotalMeetings] = useState<number>(0);
    const [totalCompletedMeetings, setTotalCompletedMeetings] = useState<number>(0);


    const fetchMeetingDetails = async () => {
        setloadingBar(true);
        try {
            const response = await fetch("https://areveibackend.onrender.com/api/v1/meet/meetdetails", { method: 'GET', headers:{'Authorisation':`Bearer ${userForGraph.access}`}, credentials : "include" });
            const meetdata = await response.json();
            setMeetingArray(meetdata.data);
            
        }
        catch (error) {
            toast({
                variant: "destructive",
                title: "Meeting Fetching Failed",
                description: "No Meeting Found",
            })
        }
        finally {
            setloadingBar(false);
        }
    }

    const countMeetings = ()=>{
        if(meetingArray && meetingArray.length>0){
            setTotalMeetings(meetingArray.length)
            let countCompleted = 0;
            meetingArray.forEach((meeting)=>{
                if(meeting.status==="Completed"){
                    countCompleted = countCompleted + 1;
                }
            })
            setTotalCompletedMeetings(countCompleted);
        }
    }

    useEffect(() => {
        fetchMeetingDetails();
    }, [])

    useEffect(()=>{
        countMeetings();
    },[meetingArray.length])


    return (
        <div className="flex flex-col justify-center items-center w-[80vw] xs:w-full self-center">
            <h1 className="text-center text-2xl">List of Meeting Schedules</h1>
            {
                loadingBar ? <Loader/> : <div className="container mx-auto py-10">
                <div className="hidden xs:block"><DataTable columns={columns} data={meetingArray} /></div>
                <div className="xs:hidden"><DataTable columns={columnsSmallScreen} data={meetingArray} /></div>
              </div>
            }
            {
                userForGraph.authority==="Admin"? (<div className="text-xl sm:text-2xl">
                    <div>Total Meetings : {totalMeetings}</div>
                    <div>Completed Meetings : {totalCompletedMeetings}</div>
                    <div>Pending Meetings : {totalMeetings-totalCompletedMeetings}</div>
                </div>) : null
            }
        </div>

    )
}

export default AdminView
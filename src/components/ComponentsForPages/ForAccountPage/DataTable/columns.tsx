"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircledIcon } from "@radix-ui/react-icons"
import { ColumnDef } from "@tanstack/react-table"
import ControlMeetingStatus from "./ControlMeetingStatus"

export type Meeting = {
  _id: string,
  name: string,
  email: string,
  country: string,
  phone: string,
  service: string,
  appForMeet: string,
  dateForMeet: string,
  timeForMeet: string,
  status : string
}

export const columns: ColumnDef<Meeting>[] = [
  {
    accessorKey: "dateForMeet",
    cell: ({ row }) => {
      const meetDate: string = (row.getValue("dateForMeet"))
      const formatted = meetDate.replace(/ \d{2}:\d{2}:\d{2} GMT[+-]\d{4} \(.+\)$/, '');

      return <div className="text-center font-medium">{formatted}</div>
    },
    header : "Date"
  },
  {
    accessorKey: "timeForMeet",
    header: "Time"
  },
  {
    accessorKey: "status",
    cell : ({row})=>{
      return <div className="text-right flex justify-center">{row.original.status==="Pending"?"Scheduled":<CheckCircledIcon className="text-5xl"/>}</div>
    },
    header : "Status"
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const meetingRow = row.original
      return (
        <Dialog>
          <DialogTrigger className="rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-white hover:text-black">
            ..
          </DialogTrigger>
          <DialogContent className="bg-slate-300 text-black h-[65vh] overflow-y-auto custom-scrollbar">
            <DialogHeader>
              <DialogTitle>Meeting Details</DialogTitle>
              <DialogDescription>

              </DialogDescription>
            </DialogHeader>
            <div>
              <div>
                Description
                <Textarea disabled className="bg-black text-white" value={meetingRow.service} />
              </div>
              <div className="flex flex-col md:flex-row gap-7">
                <div className="flex flex-col  gap-7">
                  <div>
                    Name
                    <Input disabled className="bg-black text-white" value={meetingRow.name} />
                  </div>
                  <div>
                    Country
                    <Input disabled className="bg-black text-white" value={meetingRow.country} />
                  </div>
                  <div>
                    Date
                    <Input disabled className="bg-black text-white" value={(meetingRow.dateForMeet).replace(/ \d{2}:\d{2}:\d{2} GMT[+-]\d{4} \(.+\)$/, '')} />
                  </div>

                </div>
                <div className="flex flex-col gap-7">
                  <div>
                    Email
                    <Input disabled className="bg-black text-white" value={meetingRow.email} />
                  </div>

                  <div>
                    Phone
                    <Input disabled className="bg-black text-white" value={meetingRow.phone} />
                  </div>
                  <div>
                    Time
                    <Input disabled className="bg-black text-white" value={meetingRow.timeForMeet} />
                  </div>
                </div>
              </div>
              <ControlMeetingStatus status={meetingRow.status} meetingIdForMarking={meetingRow._id}/>
            </div>
          </DialogContent>
        </Dialog>
      )
    },
  },
]

export const columnsSmallScreen : ColumnDef<Meeting>[] = [
  {
    accessorKey: "dateForMeet",
    cell: ({ row }) => {
      const meetDate: string = (row.getValue("dateForMeet"))
      const formatted = meetDate.replace(/ \d{2}:\d{2}:\d{2} GMT[+-]\d{4} \(.+\)$/, '');

      return <div className="text-center font-medium">{formatted}</div>
    },
    header : "Date"
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const meetingRow = row.original

      return (
        <Dialog>
          <DialogTrigger className="rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-white hover:text-black">
            ..
          </DialogTrigger>
          <DialogContent className="bg-slate-300 text-black w-[90vw] h-[90vh] overflow-y-auto custom-scrollbar">
            <DialogHeader>
              <DialogTitle>Meeting Details</DialogTitle>
              <DialogDescription>

              </DialogDescription>
            </DialogHeader>
            <div>
              <div>
                Description
                <Textarea disabled className="bg-black text-white" value={meetingRow.service} />
              </div>
              <div className="flex flex-col md:flex-row gap-7">
                <div className="flex flex-col  gap-7">
                  <div>
                    Name
                    <Input disabled className="bg-black text-white" value={meetingRow.name} />
                  </div>
                  <div>
                    Country
                    <Input disabled className="bg-black text-white" value={meetingRow.country} />
                  </div>
                  <div>
                    Date
                    <Input disabled className="bg-black text-white" value={(meetingRow.dateForMeet).replace(/ \d{2}:\d{2}:\d{2} GMT[+-]\d{4} \(.+\)$/, '')} />
                  </div>

                </div>
                <div className="flex flex-col gap-7">
                  <div>
                    Email
                    <Input disabled className="bg-black text-white" value={meetingRow.email} />
                  </div>

                  <div>
                    Phone
                    <Input disabled className="bg-black text-white" value={meetingRow.phone} />
                  </div>
                  <div>
                    Time
                    <Input disabled className="bg-black text-white" value={meetingRow.timeForMeet} />
                  </div>
                </div>
              </div>
              <ControlMeetingStatus status={meetingRow.status} meetingIdForMarking={meetingRow._id}/>
            </div>
          </DialogContent>
        </Dialog>
      )
    },
  },
]

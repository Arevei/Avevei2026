import * as z from "zod"
export const SignUpFormSchema = z.object({
  name : z.string().min(2, { message: "Name must be at least 2 characters." }),
  email : z.string().email(),
  country: z.string({
    required_error: "Please select a language.",
  }),
  phone : z.string().min(1, {message : "Phone No. can't be empty"}),
  password : z.string().min(8, { message: "Password must be at least 8 characters." })
})

export const SignInFormSchema = z.object({
  email : z.string().email(),
  password : z.string().min(8, { message: "Password must be at least 8 characters." })
})

export const MeetFormSchema = z.object({
  name : z.string().min(2, { message: "Name must be at least 2 characters." }),
  email : z.string().email(),
  country : z.string().min(1,{message : "Country is required"}),
  phone : z.string().min(1, {message : "Phone No. can't be empty"}),
  service : z.string().min(1,{message : "Purpose is required"}),
  timeForMeet : z.string().min(1,{message : "Time is required"}),
  appForMeet : z.string().min(1,{message : "App is required"})

})

export const UpdateFormSchema = z.object({
  name : z.string().min(2, { message: "Name must be at least 2 characters." }),
  email : z.string().email(),
  country: z.string({
    required_error: "Please select a language.",
  }),
  phone : z.string().min(1, {message : "Phone No. can't be empty"})
})

export const PasswordFormSchema = z.object({
  oldPassword : z.string().min(8, { message: "Password must be at least 8 characters." }),
newPassword : z.string().min(8, { message: "Password must be at least 8 characters." }),
confirmNewPassword : z.string().min(8, { message: "Password must be at least 8 characters." }),
})

export const DeleteFormSchema = z.object({
  Password : z.string().min(8, { message: "Password must be at least 8 characters." })
})

export const PhoneNumberFormSchema = z.object({
  country : z.string().min(1,{message : "Country is required"}),
  phone : z.string().min(1, {message : "Phone No. can't be empty"}),
})
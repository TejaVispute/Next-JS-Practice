"use client"
const StudentDetails = ({ params }) => {
    console.log(params)
    return (
        <div>
            <h1>Name : {params.student}</h1>
        </div>
    )
}

export default StudentDetails
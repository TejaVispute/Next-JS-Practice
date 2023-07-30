import Link from 'next/link'
import React from 'react'

function StudentList() {
    const studentname = ["tejas", "roshan", "amol"]
    return (
        <div>
            <h1>Students List</h1>
            <ul>
                {
                    studentname.map((student, i) => {
                        const url = `studentlist/${student}`
                        return (
                            <li key={i}>
                                <Link href={url}>{student}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default StudentList
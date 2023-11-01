import React from "react";
import StudentCard from "./card";

import useSWR from "swr";
import { fetcher } from "../../../utils";

const StudentList = () => {
  const { data: students, error } = useSWR("/api/students/getAll", fetcher);
  if (error) return <div>An error occured.</div>;
  if (!students) return <div className="preloader" />;

  return (
    <div className="row">
      {students?.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentList;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ApplicantCard from "../components/ui/Recruiter/ApplicantCard";
import api from "../api";

const Applicants = () => {
  const { id } = useParams();
  const [applicantsdetails, setApplicantsdetails] = useState([]);

  useEffect(() => {
    const getApplicants = async () => {
      try {
        const res = await api.get(`/application/applicants/${id}`)
        console.log(res?.data?.application);
        setApplicantsdetails(res?.data?.application);
      } catch (error) {
        console.log(error.message)
      }
    }

    getApplicants();
  },[])

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">

      <h1 className="text-3xl font-bold text-slate-800">
        Applicants
      </h1>

      <p className="text-slate-500 mt-2">
        Applicants for Job ID: {id}
      </p>

      <div className="space-y-4 mt-8">
        {
          applicantsdetails.map((applicant) => (
            <ApplicantCard key={applicant._id} applicant={applicant}/>
          ))
        }
      </div>

    </div>
  );
};

export default Applicants;
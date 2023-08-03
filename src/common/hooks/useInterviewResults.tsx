import { useEffect, useState } from 'react';
import { InterviewResults } from '../types/InterviewResults';

const useInterviewResults = () => {
  
  const [interviewResults, setInterviewResults] = useState<InterviewResults>();

  useEffect(() => {
  }, []);

  return { setInterviewResults, interviewResults };
};

export default useInterviewResults;
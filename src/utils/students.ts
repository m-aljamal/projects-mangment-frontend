import { useAuthClient } from "src/context/auth-context";
import {
  FindStudentsByProjectQuery,
  useFindStudentsByProjectQuery,
} from "src/generated/generates";

function useFindStudentsByProject() {
  const { client, projectId } = useAuthClient();
  const { data, error, isLoading } = useFindStudentsByProjectQuery<
    FindStudentsByProjectQuery,
    Error
  >(client(), {
    projectId,
  });
  return {
    students: data?.findStudentsByProject || [],
    error,
    isLoading,
  };
}

export { useFindStudentsByProject };

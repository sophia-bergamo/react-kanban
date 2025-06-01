import {
  LoginDocument,
  LoginMutation,
  LoginMutationVariables,
} from "@/app/data/graphql/generated/graphql";
import { useMutation } from "@apollo/client";

type loginProps = {
  onCompleted?: (data?: LoginMutation) => void;
  onError?: (data?: Error) => void;
};

export function useLogin({ onCompleted, onError }: loginProps) {
  const [loginMutation, { loading }] = useMutation(LoginDocument, {
    onCompleted,
    onError,
  });

  const login = (variables: LoginMutationVariables) => {
    loginMutation({ variables });
  };

  return { login, loading };
}

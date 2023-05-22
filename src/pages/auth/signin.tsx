import type {
  GetServerSidePropsContext, InferGetServerSidePropsType
} from 'next';
import {authOptions} from '../api/auth/[...nextauth]';
import {getProviders} from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import Login from '@/components/features/login/login';

export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      {Object.values(providers).map((provider:any) => (
        <Login name={provider.name} id={provider.id} key={provider.id} />
      ))}
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { redirect: { destination: '/' } };
  }

  const providers = await getProviders();

  return {props: { providers: providers ?? {}}};
}

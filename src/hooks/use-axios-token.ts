import {
  useEffect, useLayoutEffect, useMemo, useState
} from 'react';
import axiosIntance from '@/core/axios-config';
import {getSession} from 'next-auth/react';
import {Session} from 'next-auth';
import { useRouter } from 'next/router';

interface tokenConf extends Session {
  accessToken?:string,
}

const useAxiosToken = () => {
  const router = useRouter();

  const interceptors = useMemo(
    () => ({
      error: (error: any) => Promise.reject(error),
      request: async (config: any) => {
        const session:tokenConf = await getSession();

        if (session) {
          config.headers.Authorization = `Bearer ${ session.accessToken }`;
        }

        return config;
      },
      response: (response: any) => response
    }),
    []
  );

  useEffect(() => {
    const reqInterceptor = axiosIntance.interceptors.request.use(interceptors.request, interceptors.error);
    const resInterceptor = axiosIntance.interceptors.response.use(interceptors.response, interceptors.error);

    return () => {
      axiosIntance.interceptors.request.eject(reqInterceptor);
      axiosIntance.interceptors.response.eject(resInterceptor);
    };
  }, []);
};

export default useAxiosToken;

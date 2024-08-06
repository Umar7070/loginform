import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyContext from '@/Components/MyContext';


export default function App({ Component, pageProps }: AppProps) {
  return  (
  <MyContext>
  <Component {...pageProps} />
  </MyContext>)
}

import { wrapper } from '../store/configureStore'; // Sesuaikan path store Anda
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // Gunakan Component dan pageProps seperti biasa
  return <Component {...pageProps} />;
}

// Gunakan wrapper.withRedux untuk membungkus komponen aplikasi.
// Ini yang menggantikan wrapper.with(MyApp) di versi lama/kode yang dimodifikasi.
export default wrapper.withRedux(MyApp);
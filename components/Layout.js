import Header from './Header';
import Navigation from './Navigation';
import Main from './Main';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navigation />
      <Main>{children}</Main>
      <Footer></Footer>
    </>
  );
}

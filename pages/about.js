import Link from "next/link";
import Advertise from "../src/components/Advertise";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";

const About = () => {
  return (
    <Layout>
      <PageBanner pageName={"Sobre nosotros"} />
      {/* Page Banner End */}
      {/* About Section Start */}
      <section className="about-page-section pt-120 rpt-90">
        <div className="container">
          <div className="row align-items-center large-gap">
            <div className="col-lg-5">
              <div className="about-page-content wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title-two">Sobre nosotros</span>
                  <h2>Universidad de Manizales</h2>
                </div>
                <p>
                  La Universidad Manizales es una institución educativa
                  comprometida con la excelencia académica y la formación
                  integral de sus estudiantes. Fundada en 1972, nuestra
                  universidad ha sido un faro de conocimiento y crecimiento
                  personal en la región de Manizales y más allá.
                </p>
                <div className="about-btns pt-25">
                  <Link href="https://umanizales.edu.co/">
                    <a className="theme-btn my-15">
                      Conoce Más <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-page-middle rpt-55 rpb-30 wow fadeInRight delay-0-2s">
                <img src="assets/images/about/about-page.png" alt="About" />
                <div className="circle-content">
                  <b>51</b>
                  <span>Años de experiencia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
      {/* Features Section Start */}
      <section className="features-section-three rel z-1 pt-110 rpt-85 pb-100 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-55">
            <span className="sub-title-two">How About Learn Us</span>
            <h2>Opportunity for Online Learning</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="feature-three-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-reading-book" />
                </div>
                <h4>Innovación Educativa</h4>
                <p>
                  La innovación es un pilar fundamental en nuestra filosofía
                  educativa. Explora cómo utilizamos enfoques pedagógicos
                  modernos y tecnología de vanguardia para brindar a nuestros
                  estudiantes una educación de calidad.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-three-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <img src="assets/images/features/icon7.png" alt="Icon" />
                </div>
                <h4>Reconocimientos y Alianzas Estratégicas</h4>
                <p>
                  La Universidad Manizales ha recibido reconocimientos por su
                  excelencia académica y ha establecido alianzas estratégicas
                  con instituciones destacadas. Descubre nuestros logros y
                  colaboraciones que enriquecen la experiencia de nuestros
                  estudiantes.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="feature-three-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <img src="assets/images/features/icon8.png" alt="Icon" />
                </div>
                <h4>Éxito de Nuestros Graduados</h4>
                <p>
                  Aprende sobre los éxitos de nuestros graduados y cómo han
                  aplicado su educación de la Universidad Manizales en diversas
                  industrias y roles, contribuyendo al desarrollo de la
                  sociedad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section End */}
      {/* Advertise Area Start */}
      <section className="advertise-area pt-130 rpt-100 pb-90 rpb-60">
        <div className="container">
          <Advertise />
        </div>
      </section>
    </Layout>
  );
};
export default About;

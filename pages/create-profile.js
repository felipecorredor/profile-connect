import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import CreateStudent from "../src/components/students/create";

const CourseDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Course Details"} />
      <section className="course-details-area pt-130 rpt-100">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-8">
              <div className="course-details-content">
                <div className="course-header">
                  <span className="category">Universidad de Manizales</span>
                  <img src="assets/images/shapes/line-shape.png" alt="Line" />
                </div>
                <h2>Crea tu perfil</h2>
                <ul className="author-date-enroll">
                  <li>
                    <img
                      src="assets/images/coachs/couse-author.jpg"
                      alt="Authro"
                    />
                    <h6>Donald J. Miller</h6>
                  </li>
                  <li>
                    <i className="fas fa-cloud-upload-alt" /> Last Update
                    February 15, 2022
                  </li>
                </ul>

                <section>
                  <h3>Información principal</h3>
                  <CreateStudent />
                </section>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="course-sidebar rmt-75">
                <div className="widget widget-course-details wow fadeInUp delay-0-2s">
                  <div className="widget-video">
                    <img
                      src="assets/images/widgets/course-details.jpg"
                      alt="Course Details"
                    />
                    <a
                      href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                      className="mfp-iframe youtube-video-play"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <div className="price-off">
                    <span className="price">259.83</span>
                    <span className="off">25% off</span>
                  </div>
                  <ul className="course-details-list mb-25">
                    <li>
                      <i className="far fa-file-alt" />{" "}
                      <span>Course Level</span> <b>Beginner</b>
                    </li>
                    <li>
                      <i className="far fa-clock" /> <span>Duration</span>{" "}
                      <b>25.5 Hr</b>
                    </li>
                    <li>
                      <i className="far fa-play-circle" /> <span>Lectures</span>{" "}
                      <b>9 Lectures</b>
                    </li>
                    <li>
                      <i className="far fa-clipboard" /> <span>Subject</span>{" "}
                      <b>Web Design</b>
                    </li>
                    <li>
                      <i className="fas fa-globe" /> <span>Language</span>{" "}
                      <b>English</b>
                    </li>
                  </ul>
                  <p>
                    Sit amet consectetur adipiscin sed eiusmod tempor incidide
                  </p>
                  <Link href="/contact">
                    <a className="theme-btn">
                      add to cart <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two d-flex">
                    <Link href="/contact">
                      <a>
                        <i className="fab fa-twitter" />
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a>
                        <i className="fab fa-facebook-f" />
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a>
                        <i className="fab fa-instagram" />
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a>
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default CourseDetails;

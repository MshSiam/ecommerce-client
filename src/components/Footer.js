import React from "react"
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from "mdb-react-ui-kit"

export default function App() {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted my-5">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <h4> Social Links</h4>
        </div>

        <div>
          <a
            target="_blank"
            href="https://www.facebook.com/seam.kenway"
            className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>

          <a
            target="_blank"
            href="https://www.instagram.com/siam_kenway/"
            className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/muhammad-siam-77703520b/"
            className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a
            target="_blank"
            href="https://github.com/MshSiam"
            className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Ecommerce
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                eligendi minus inventore aut tempore dolorum, fugit adipisci
                numquam quaerat laboriosam consequatur quia facilis dicta
                tempora animi accusamus iste ad recusandae?
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="" className="text-reset">
                  Phones
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Pc Components
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Monitors
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Keyboards
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Mouse
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laptops
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Other Tech
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                siyamkenway@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +880 1765871554
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +880 1765871554
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2022 Copyright Reserved By :
        <a className="text-reset fw-bold">Muhammad Siam</a>
      </div>
    </MDBFooter>
  )
}

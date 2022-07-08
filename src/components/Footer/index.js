import React from 'react';
import Logo from '../../assets/images/logo.png';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <div className='container'>
        <div className='row responsive-mobile d-flex pt-5 pb-4 px-4 px-md-0'>
          <div className='col d-flex justify-content-center'>
            <div>
              <div className='d-flex justify-content-center'>
                <img src={Logo} alt="Logo MIG" title='Logo MIG' width='210px' />
              </div>
              <p className='mig-desc-footer mt-4 px-5'>Bringing the advantages to you</p>
            </div>
          </div>

          <div className='col'>
            <div className='row mt-4 mt-md-0'>
              <h5 className="mx-1 fw-bold">Our Service</h5>
              <ul>
                <li className="nav-item mb-2 mx-3">
                  <a className='nav-link p-0 text-muted' href="https://www.mig.id" target='blank' rel='noreferrer'>Fully Managed Hardware Solutions</a>
                </li>
                <li className="nav-item mb-2 mx-3">
                  <a className='nav-link p-0 text-muted' href="https://www.mig.id" target='blank' rel='noreferrer'>Software Development and Manage Services</a>
                </li>
              </ul>
            </div>
            <div className='row mt-4 mt-md-0'>
              <h5 className="mx-1 fw-bold">Sosial Media</h5>
              <ul>
                <li className="nav-item mb-2 mx-3">
                  <a href="https://www.instagram.com/mitramasglobal/?utm_medium=copy_link&hl=en" className='nav-link p-0 text-muted' target='blank' rel='noreferrer'><i class="fa fa-instagram text-danger"></i> Instagram</a>
                </li>
                <li className="nav-item mb-2 mx-3">
                  <a href="https://www.facebook.com/pages/PT-Mitramas-Infosys-Global/238498532871571" className='nav-link p-0 text-muted' target='blank' rel='noreferrer'><i class="fa fa-facebook-square text-primary"></i> Facebook</a>
                </li>
                <li className="nav-item mb-2 mx-3">
                  <a href="https://www.linkedin.com/company/pt-mitramas-infosys-global/?trk=similar-pages_result-card_full-click" className='nav-link p-0 text-muted' target='blank' rel='noreferrer'><i className='fa fa-linkedin text-primary'></i> Linkedin</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className='col'>
            
            <div className='row mt-4 mt-md-0'>
              <h5 className="mx-1 fw-bold">Help Center</h5>
              <ul>
                <li className="nav-item mb-2 mx-3">
                  <p className='m-0 text-muted'><i className='fa fa-phone'></i> (021) 8314522</p>
                </li>
                <li className="nav-item mb-2 mx-3">
                  <p className='m-0 text-muted'><i className='fa fa-envelope text-grey'></i> hiring@mitrasolusi.group</p>
                </li>
              </ul>
            </div>
            
            <div className='row mt-4 mt-md-0'>
              <h5 className="mx-1 fw-bold">Address</h5>
              <ul>
                <li className="nav-item mb-2 mx-3">
                  <p className='m-0 text-muted'>
                  <i className="fa fa-map-marker text-success"></i>&nbsp;
                    Jl. Tebet Raya No.44, RT.4/RW.4, Tebet Tim., Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12820
                  </p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className="footer__bottom d-flex text-center align-items-center justify-content-center">
         <span className="mx-2">&copy; 2022 MIG - Bringing the advantages to you</span>
      </div>
    </footer>
  )
}

export default Footer

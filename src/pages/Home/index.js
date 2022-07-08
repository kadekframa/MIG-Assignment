import React, {useState} from 'react';
import './home.css'

const Home = () => {
const [isAktif, setIsAktif] = useState(false);
console.info(isAktif);
  
  return (
    
    <div  className='container home-wrapper mt-5 pt-5'>
      <div className='column'>
        <div className='hero-jumbotron'>
          <img src="" alt="mig_background" />
        </div>
        <div className='hero-mig'>
          <h2 className='fw-bold'>Mitramas Infosys Global</h2>
          <p className='text-muted'>Layanan IT</p>
        </div>
        <div className='hero-informasi row justify-content-center'>
          <div className='left col-5'>
            <p className='text-muted'>Status Perusahaan</p>
            <div className='is-aktif-wrapper'>
              <p className='text-value fw-bold text-success col-10'>{isAktif ? 'Aktif' : 'Non Aktif'}</p>
              <label className="switch col-2">
                <input type="checkbox" onClick={() => { setIsAktif(!isAktif) }}></input>
                <span className="slider round"></span>
              </label>
            </div>
            
            <p className='text-muted'>Singkatan</p>
            <p className='text-value'>MIG</p>
            <p className='text-muted'>Alamat Perusahaan</p>
            <p className='text-value'>Jl. Tibet Raya No.42, Jakarta Selatan</p>
            <p className='text-muted'>Penanggung Jawab (PIC)</p>
            <p className='text-value'>John Doe</p>
          </div>
          <div className='right col-5'>
            <p className='text-muted'>Tanggal PKP</p>
            <p className='text-value'>03 Maret 2021</p>
            <p className='text-muted'>E-mail</p>
            <p className='text-value'><i className='fa fa-envelope text-success'></i><a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='blank' rel='noreferrer'> mig@mitrasolusi.group</a></p>
            <p className='text-muted'>No. Telp</p>
            <p className='text-value'><i className=' fa fa-phone text-success'></i> 021-5678-1234</p>
            <p className='text-muted'>Situs Web</p>
            <p className='text-value'><i className='fa fa-globe text-success'></i> <a href="https://www.mig.id/" target='blank' rel='noreferrer'>mitramas.com</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;

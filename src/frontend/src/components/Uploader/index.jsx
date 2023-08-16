import React, {useState} from 'react'
import "./styles.css"

import Camera from '../../assets/camera.svg'
import Upload from '../../assets/upload.svg'

const Uploader = ({setImage}) => {
    const onHandleSelectFile = async(rawFile) => {
        let reader = new FileReader();
        reader.readAsDataURL(rawFile);
        reader.onload = () => {
            setImage(reader.result)
        }
    }

  return (
    <div className='uploader-container'>
        <h3>Fotos do imóvel</h3>
        <div className='uploader-content'>
            <img width={35} height={35} src={Upload} alt="Uploader" />
            <span>Vpcê pode adiocionar 30 fotos ao seu anuncio</span>
            <div className='input-container'>
                <label htmlFor="files" className="file-label">
                <img height={20} width={20} className="img-camera" src={Camera} alt="Camera" />
                <span>Selecionar do computador</span></label>
                <input id="files" multiple={false} onChange={e => onHandleSelectFile(e.target.files[0])} type="file" className='file-input'/>
            </div>
        </div>
    </div>

  )
}

export default Uploader
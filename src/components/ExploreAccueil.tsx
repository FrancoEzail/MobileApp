import React, { useState, useCallback  } from 'react';
import data_img from '../data_img';
import { useDropzone } from 'react-dropzone';

const UploadImage: React.FC = () =>  {
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      setUploadedFile(file);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div>
            <div {...getRootProps()} className="dropzone-style">
                <input {...getInputProps()} />
                {uploadedFile ? (
                    <div className='image-uploaded'>
                        <img
                            src={URL.createObjectURL(uploadedFile)}
                            alt="type de fichier invalide"
                            style={{
                                width: '100%',
                                maxHeight: '150px',
                                borderRadius: '15px',
                                display: 'flex',
                                alignItems:'center'
                            }}
                        />
                    </div>
                ) : null}
                {!uploadedFile && (
                    <>
                        <p>Drag and drop an image or clicked here</p>
                        <span><i className='fas fa-image'></i></span>
                    </>
                )}
            </div>
        </div>
    );
};

const Comp_SubTitle: React.FC = () =>  {
    return(
        <div className="sub-title">
            <div className="circle">
                <span><i className="fas fa-circle"></i></span>
                <span><i className="far fa-circle"></i></span>
            </div>
            <div className="text-sub-title">
                <h1>Liste des</h1>
                <h1>cultures</h1>
            </div>
        </div>
    );  
};

const Comp_filtre: React.FC = () =>  {
    const [boutonActif, setBoutonActif] = useState<number | null>(1);
    const handleClick = (bouton: number) => {
      setTimeout(() => {
        setBoutonActif(bouton);
      }, 200);
    };
    return(
        <div className='filtre-box1'>
            <nav className='_bar'>
                <div className="_links">
                    <ul>
                        <li className={boutonActif === 1 ? 'active' : ''} onClick={() => handleClick(1)}><a>All</a></li>
                        <li className={boutonActif === 2 ? 'active' : ''} onClick={() => handleClick(2)}><a>Rice</a></li>
                        <li className={boutonActif === 3 ? 'active' : ''} onClick={() => handleClick(3)}><a>Corn</a></li>
                        <li className={boutonActif === 4 ? 'active' : ''} onClick={() => handleClick(4)}><a>Vegetable</a></li>
                    </ul>
                </div>
            </nav>
            <div className="table-culture">
                <div className='right-arrow'>
                    <span><i className="fas fa-arrow-right"></i></span>
                </div>
                <div className="tableau_style">
                    <div className='title_bar'>
                        <div className='title_links'>
                            <ul>
                                <li>Proprio</li>
                                <li>Parcelle</li>
                                <li>Culture</li>
                            </ul>
                        </div>
                    </div>
                    <div className="limit-scroll">
                        <div className='list_bar'>
                            <div className='list_links'>
                                <ul>
                                    <li>Jean Rakoto</li>
                                    <li>P1</li>
                                    <li>Rice</li>
                                    <li><span><i className="far fa-comment"></i></span></li>
                                    <li><span><i className="fas fa-microphone"></i></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className='list_bar'>
                            <div className='list_links'>
                                <ul>
                                    <li>Jean Rakoto</li>
                                    <li>P1</li>
                                    <li>Rice</li>
                                    <li><span><i className="far fa-comment"></i></span></li>
                                    <li><span><i className="fas fa-microphone"></i></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className='list_bar'>
                            <div className='list_links'>
                                <ul>
                                    <li>Jean Rakoto</li>
                                    <li>P1</li>
                                    <li>Rice</li>
                                    <li><span><i className="far fa-comment"></i></span></li>
                                    <li><span><i className="fas fa-microphone"></i></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className='list_bar'>
                            <div className='list_links'>
                                <ul>
                                    <li>Jean Rakoto</li>
                                    <li>P1</li>
                                    <li>Rice</li>
                                    <li><span><i className="far fa-comment"></i></span></li>
                                    <li><span><i className="fas fa-microphone"></i></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Comp_profil: React.FC = () =>  {
    return(
       <div className="profil-box">
            <div className="profil-img">
            {
                data_img.map((profil, index) => (
                    <img src={profil.profil} alt=""/>            
                ))
            }  
            </div>
            <div className="profil-card">
                <div className="nom-email">
                    <h5>Jean Rakoto</h5>
                    <p>jean@gmail.com</p>
                </div>
                <div className='ellipsis'>
                    <span><i className="fas fa-ellipsis-v"></i></span>
                </div>
            </div>
        </div>
    );  
};

const Comp_formulaire: React.FC = () =>  {
    return(
        <div className="card-form">
            <div className="sub-title-form">
                <h3>Creer un terrain</h3>
                <div className="circle2">
                    <span><i className="fas fa-circle"></i></span>
                    <span><i className="far fa-circle"></i></span>
                </div>
            </div>
            <div className="form-group">
                <div className="form-input">
                    <select name="">
                        <option value="">Lieu</option>
                        <option value="">Marovoay</option>
                    </select>
                </div>
                <div className="form-input">
                    <input type="text" placeholder="Nombre de parcelle" name=""/>
                </div>
                <div className="upload-photo">
                    <UploadImage  />
                </div>
                <div className='sub-btn'>
                    <input type="submit" value="Valider" />
                    <div className='right-arrow-btn'>
                        <span><i className="fas fa-arrow-right"></i></span>
                    </div>
                </div>
            </div>
        </div>
    );  
};

const Comp_Card: React.FC = () =>  {
    return(
        <div className='card-pub'>
            <div className='card_pub-img'>
            {
                data_img.map((katsaka, index) => (
                    <img src={katsaka.katsaka} alt=""/>            
                ))
            }  
            </div>
            <div className='descrit'>
                <div className='left-descrit'>
                    <h5>Corn</h5>
                    <span><i className='fas fa-map-marked-alt'></i><p>Marovoay</p></span>
                </div>
                <div className='right-descrit'>
                    <p>150Kg</p>
                    <h5>$200.99</h5>
                </div>
            </div>
        </div>
    );  
};

const Comp_img: React.FC = () =>  {
    return(
        <div className='sary'>
        {
            data_img.map((parcelle, index) => (
                <img src={parcelle.parcelle} alt=""/>            
            ))
        } 
        </div>
    ); 
};
export {Comp_SubTitle, Comp_filtre, Comp_profil, Comp_formulaire, Comp_Card, Comp_img};
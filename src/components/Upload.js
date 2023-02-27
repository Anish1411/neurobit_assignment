import { ChangeEvent, useState } from 'react';
import {Link} from 'react-router-dom';
import "./Upload.css"
function Upload() {
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }

    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: file,
      headers: {
        'content-type': file.type,
        'content-length': `${file.size}`, 
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const newdata=JSON.parse(data.data);
        console.log(newdata.channels);
        localStorage.setItem('channels', JSON.stringify(newdata.channels));
    })
    

    };

  return (
    <div className='Browse-files'>
      <input type="file" onChange={handleFileChange} />

      <div>{file && `${file.name} - ${file.type}`}</div>
      <Link to="/uploaded">
      <button onClick={handleUploadClick} className="btn Back">Upload</button>
      </Link>
    </div>
  );
}

export default Upload;
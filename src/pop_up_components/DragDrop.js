import React from 'react';
import {useDropzone} from 'react-dropzone';

const DragDrop = ({setimportedData}) => {

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: {
      'application/JSON':[]
    }
  });
  const func=(file)=>{
    const r=new FileReader();
    r.readAsText(file);
    r.onload=()=>{
      setimportedData(JSON.parse(r.result));
    }
  }
  const acceptedFileItems = acceptedFiles.map(file => (
    <div key={file.path}>
      {func(file)}
      {file.path}
    </div>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <div key={file.path}>
      {file.path}<br/>
      <ul>
        {errors.map(e => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        Drag 'n' drop some files here, or click to select files<br/>
        <em>(Only *json file will be accepted)</em>
      </div><br/>
      <aside>
        <div>Accept<br/>{acceptedFileItems}</div><br/>
        <div>Reject<br/>{fileRejectionItems}</div>
      </aside>
    </div>
  );
}

export default DragDrop;
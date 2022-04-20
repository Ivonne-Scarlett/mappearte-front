import { useState, useEffect } from "react";
import Uppy from "@uppy/core";
import Transloadit from "@uppy/transloadit";

export default function UploadImg() {
  const [uppy, setUppy] = useState();
  const [isUploadingFile, setIsUploadingFile] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const onCompleteUploadFiles = (assembly) => {
    const image = assembly.results?.compress_image[0].ssl_url;

    setImageUrl(image);

    
    setIsUploadingFile(false);
};

const onFileInputChange = (event) => {
    setIsUploadingFile(true);
    
    const file = Array.from(event.target.files)[0] || null;
    
    if (file) {
      uppy.reset();
      uppy.addFile({
        name: file.name,
        type: file.type,
        data: file,
      });
      uppy.upload();
    }
  };

  useEffect(() => {
    const uppyInstance = new Uppy({
      restrictions: {
        maxNumberOfFiles: 1,
      },
    })
      .use(Transloadit, {
        params: {
          auth: { key: process.env.NEXT_PUBLIC_TRANSLOADIT_AUTH_KEY },
          template_id: process.env.NEXT_PUBLIC_TRANSLOADIT_TEMPLATE_ID,
        },
        waitForEncoding: true,
      })
      .on("transloadit:complete", onCompleteUploadFiles);

    setUppy(uppyInstance);
  }, []);

  return (
    <>
      <h1>Sube tu arte</h1>
      <div className="container">
        <div className="plugin">
          <input
            type="file"
            name="file"
            id="file"
            onChange={onFileInputChange}
          />
          <p>{isUploadingFile ? "Cargando" : "👍"}</p>
        </div>
        <div className="image">
          <img src={imageUrl} alt="image" />
        </div>
      </div>
    </>
  );
}
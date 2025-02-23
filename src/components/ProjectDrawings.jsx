import React from "react";


const pdfFolder = [
    {
      name: 'ALTERNATIVE PLAN-2 22-07-2024',
      image: 'https://cdn-icons-png.flaticon.com/512/337/337946.png',
      path: 'assets/pdfs-file/ALTERNATIVE PLAN-2 22-07-2024.pdf',
    },
    {
      name: 'COLUMN DETAILS',
      image: 'https://cdn-icons-png.flaticon.com/512/337/337946.png',
      path: 'assets/pdfs-file/COLUMN DETAILS.pdf',
    },
    {
      name: 'BM DETAILS',
      image: 'https://cdn-icons-png.flaticon.com/512/337/337946.png',
      path: 'assets/pdfs-file/BM DETAILS.pdf',
    },
    {
      name: 'FLOOR PLAN 1',
      image: 'https://cdn-icons-png.flaticon.com/512/337/337946.png',
      path: 'assets/pdfs-file/fLOOR PLAN.pdf',
    },
    {
      name: 'FLOOR PLAN 2',
      image: 'https://cdn-icons-png.flaticon.com/512/337/337946.png',
      path: 'assets/pdfs-file/fLOOR PLAN 1.pdf',
    },
    {
      name: 'FLOOR PLAN 3',
      image: 'https://cdn-icons-png.flaticon.com/512/337/337946.png',
      path: 'assets/pdfs-file/fLOOR PLAN 2.pdf',
    },
    {
      name: 'FOOTING',
      image: 'https://cdn-icons-png.flaticon.com/512/337/337946.png',
      path: 'assets/pdfs-file/FOOTING.pdf',
    },
    {
      name: 'FOOTING DETAILS',
      image: 'https://cdn-icons-png.flaticon.com/512/337/337946.png',
      path: 'assets/pdfs-file/FOOTING DETAILS.pdf',
    },
    {
      name: 'FOOTING EXCAVATION',
      image: 'https://cdn-icons-png.flaticon.com/512/337/337946.png',
      path: 'assets/pdfs-file/FOOTING EXCAVATION.pdf',
    },
    {
      name: 'PB',
      image: 'https://cdn-icons-png.flaticon.com/512/337/337946.png',
      path: 'assets/pdfs-file/PB.pdf',
    },
    {
      name: 'SLB LAYOUT',
      image: 'https://cdn-icons-png.flaticon.com/512/337/337946.png',
      path: 'assets/pdfs-file/SLB LAYOUT.pdf',
    },
    {
      name: 'STR',
      image: 'https://cdn-icons-png.flaticon.com/512/337/337946.png',
      path: 'assets/pdfs-file/STR.pdf',
    },
    {
      name: 'More Floor Plans',
      image:
        'https://img.icons8.com/?size=100&id=VLr4hUR8iMGF&format=png&color=000000',
      path: 'https://drive.google.com/drive/folders/1it43AJ5u4nsIOgPBnOgmxapBRNlLXxmr?usp=sharing',
    },
    {
      name: 'More Structural Plans',
      image:
        'https://img.icons8.com/?size=100&id=VLr4hUR8iMGF&format=png&color=000000',
      path: 'https://drive.google.com/drive/folders/16G5wjnmtmNICubNxlTldXXyzyX0mCJEt?usp=sharing',
    },
  ];
const ProjectDrawings = () => {
  return (
    <div className="container" style={{height:"100vh",marginTop:"10%"}}>
      <h2 className="text-center mb-2">Project Drawings</h2>
      <p className="text-center md-3 container-content">
        View our PDFs of projects we have worked on.
      </p>
      <div className="row row-cols-1 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-1">
        {pdfFolder.map((item, index) => (
          <div key={index} className="col col-6 mb-3">
            <div className="card pdf-card">
              <div className="card-body p-2 d-flex align-items-center justify-content-between">
                <a href={item.path} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-decoration-none w-100">
                  <div className="pdf-thumbnail">
                    <img src={item.image} alt="PDF Icon" width={40} height={40} />
                  </div>
                  <p className="pdf-title text-truncate m-0 flex-grow-1">{item.name}</p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDrawings;

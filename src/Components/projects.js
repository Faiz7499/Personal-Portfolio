import React from 'react'

function Projects() {
  return (
   <>
   <div className='fade-in' style={{marginTop:'100px'}} id='PROJECT'>
   <div  style={{width:"200px",textAlign:'left'}}>
    <h2 className='sectionname scroll-animation' ><span style={{marginRight:"10px",color:'white',fontSize:'20px',}}>03</span>Projects</h2>
</div>
    <h3 className='fontstylee' style={{marginTop:'20px',color:'red',fontWeight:"600"}}>Some Things I've Build..</h3>
      <div style={{marginTop:'50px'}}>
        <div className='row'>
            <div className='col-4 col-12 col-lg-4 col-md-12 col-sm-12 imgcontainer' >
               <img className='imgesstyling scroll-animation' src='/images/Sharing articles-rafiki.png' alt="NoteVista "  />
            </div>
            <div className='col-8 col-12 col-lg-8 col-md-12 col-sm-12'>
            <h4 className='fontstylee projectname'>NoteVista </h4>
            <br/>
            <p className='projectdescription scroll-animation descriptivestyle'>
NoteVista is a dynamic MERN stack social media platform that empowers users to engage with a vibrant community. Users can seamlessly share and explore blogs, express their appreciation through likes and comments, and safeguard private thoughts in personal notes. The platform boasts a robust authentication system, ensuring the security and privacy of its users. NoteVista fosters connectivity, creativity, and self-expression, offering a comprehensive social experience for individuals looking to connect, communicate, and contribute within a supportive digital environment.</p>
            </div>
        </div>
        <div className='row mt-5'>
            <div className='col-4 col-12 col-lg-4 col-md-12 col-sm-12 imgcontainer' >
               <img className='imgesstyling scroll-animation' src='/images/Analysis-amico.png' alt="NoteVista "   />
            </div>
            <div className='col-8 col-12 col-lg-8 col-md-12 col-sm-12'>
            <h4 className='fontstylee projectname'>InsightED</h4>
            <br/>
            <p className='projectdescription scroll-animation descriptivestyle'>
            The Android application, built in Java, offers users a unique self-improvement experience. Users input their personal details, and the app leverages cutting-edge AI APIs to perform in-depth analysis. It provides insightful feedback on both positive and negative aspects of their lives, fostering personal growth and well-being. This innovative approach empowers individuals to make informed decisions for self-improvement, making it a valuable tool for personal development. The integration of AI technology in conjunction with a Node.js backend enhances the accuracy and utility of the analysis, ensuring users receive personalized and constructive insights for a brighter future.</p>
            </div>
        </div>
        <div className='row mt-5'>
            <div className='col-4 col-12 col-lg-4 col-md-12 col-sm-12 imgcontainer' >
               <img className='imgesstyling scroll-animation' src='/images/QR Code-bro.png' alt="NoteVista "   />
            </div>
            <div className='col-8 col-12 col-lg-8 col-md-12 col-sm-12'>
            <h4 className='fontstylee projectname'>Qr Scanner </h4>
            <br/>
            <p className='projectdescription scroll-animation descriptivestyle'>
             Web-based QR Scanner application, powered by Next.js and a Node.js backend, streamlines access control at Ashoka Hall within our college. Students scan their unique barcodes, granting or denying entry. Registered data is efficiently stored in a CSV file, ensuring a record of attendees. The system automatically updates the CSV to prevent unauthorized access by students attempting to use the same barcode. This secure and user-friendly solution enhances access management for the college, ensuring a streamlined and efficient process for entry while maintaining accurate records and enhancing security.</p>
            </div>
        </div>
      </div>

   </div>
   </>
  )
}

export default Projects
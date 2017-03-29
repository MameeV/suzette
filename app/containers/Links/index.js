/*
 *
 * Links
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import {Link} from "react-router";
 import NavMobile from 'components/NavMobile';
 import MessageButton from 'components/MessageButton';

 export default class Articles extends React.PureComponent {
   render() {
   const footerStyle={
     background: "#74D1EA",
     position: "fixed",
     bottom: "10px",
     right: "10px",
     padding: "15px",
     borderRadius: "50px"
   }
   const body2Style={
     width: "100%",
     height: "100vh",
     background: "#FAE0EE",
     fontFamily: "Raleway",
     fontWeight: "Bold",
     fontSize: "20px",
     color: "#3E262A",
     paddingTop: "30px",
     paddingLeft: "25px"
   }

   const headTextStyle={
     width: "100%",
     height: "80px",
     top: "auto",
     borderTop:"3px solid #74D1EA",
     borderBottom:"3px solid #74D1EA",
     background: "#FAE0EE",
     display: "flex",
     flexDirection: "row",
     justifyContent: "center",
     fontFamily: "Fredericka the Great",
     fontStyle: "cursive",
     fontWeight: "bold",
     fontSize: "40px",
     color: "#3E262A",
     textTransform: "uppercase",
     textAlign: "center",
     paddingTop: "10px"
   }
   const indentStyle={
     margin: "15px"
   }
   const resourceContainer={
     display: "flex",
     flexDirection: "row",
     flexWrap: "wrap",
     width: "100%",
     maxWidth: "1000px",
     justifyContent: "space-around",
     paddingTop: "10px",
   }
   const resource={
     width: "25%",
     display: "flex",
     flexDirection: "column"
   }
   const resourceImage={
     width: "100%",
     height: "300px",
     background: "#333333"
   }
   const resourceTitle={
     width: "100%",
     height: "100px",
     background: "#555555"
   }
   const resourceBody={
     width: "100%",
     height: "100px",
     background: "#777777"
   }
   return (
     <div>
       <Helmet title="Links" meta={[ { name: 'description', content: 'Description of Links' }]}/>
       <div style={headTextStyle}>
         Resource Links
       </div>
       <main>
         <NavMobile active={3}/>
           <div style={resourceContainer}>
             <div style={resource}>
               <div style={resourceImage}>
               Image Tag for Resource
               </div>
               <div style={resourceTitle}>
               Resource Title
               </div>
               <div style={resourceBody}>
               Resource Highlight Copy
               </div>
             </div>
           </div>
         <MessageButton/>
       </main>
     </div>
    );
  }
}

import React from "react";
import { withRouter } from "react-router-dom";

import ImageSection from "../components/worksPage/imageSection/ImageSection";

function Works(props) {
  return (
    <div className='works'>
      <ImageSection imageList={props.projectList} props={props} />
    </div>
  );
}

export default withRouter(Works);

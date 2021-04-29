import React from "react";


function PortfolioCard(props) {
  return (
    <div className="wrap">
          <section className="img">
            <div className="card imgmarginbig">
              <img src={props.projects.imagesrc} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{props.projects.projecttitle}</h5>
                <p className="card-text">{props.projects.projecttext}</p>
                <a href={props.projects.githubrepo} className="btn btn-primary">
                  {props.projects.githubrepotext}
                </a>
              </div>
            </div>
          </section>
    </div>
  );
}
export default PortfolioCard;

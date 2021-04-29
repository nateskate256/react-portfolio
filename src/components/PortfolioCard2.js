import React from "react";


function PortfolioCard2(props) {
  var trimmedArr = props.projects.slice(2)
  return (
    <section className="wrap">
      {trimmedArr.map((data) => {
        return (
          <section className="img">
            <div className="card imgmarginsmall">
              <img src={data.imagesrc} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{data.projecttitle}</h5>
                <p className="card-text">{data.projecttext}</p>
                <a href={data.githubrepo} className="btn btn-primary">
                  {data.githubrepotext}
                </a>
              </div>
            </div>
          </section>
        );
      })}
    </section>
  );
}
export default PortfolioCard2;

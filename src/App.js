import React from "react";
import Navbar from "./components/Navbar";
import projectData from "./Assets/projectData";
import PortfolioCard from "./components/PortfolioCard";
import PortfolioCard2 from "./components/PortfolioCard2";

class App extends React.Component {
  state = {
    projectInfo: projectData,
  };

  async componentDidMount() {
    console.log(this.state.projectInfo);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <section className="photo"></section>
        <section class="content">
        <section class="header">
          <section id="About-Me"><h2>About Me</h2></section>
        </section>
        
        <section class="text">
        <div class="about">
          <img
            src="https://user-images.githubusercontent.com/77896188/116487930-03364f00-a846-11eb-80ef-fa7e61ac4968.jpg"
            width="200px"
            height="auto"
            alt="Portrait"
          />
          
            My name is Nate Shipp and I am a Graphic Designer living in Phoenix,
            AZ. My design philosophy is simple. If you’re not having fun, you’re
            doing it wrong. While studying design at the University of Arizona
            from 2018-2020, I became heavily inspired by the works that came out
            of postmodernist era of the 70’s and 80’s. I found breaking
            graphical rules and doing exactly what you aren’t supposed to
            thrilling. My teachers… not so much. However, during critique, they
            often told me they felt like I was challenging them and there was no
            better feeling than being told by them that my “anti-design” style
            worked when it worked. Today I am currently working as a freelancer
            designer. I am also spending the next couple of months learning how
            to code. I never learned how to code in college, so I’m excited to
            take this next step and acquire some new skills.
          </div>
        </section>
      </section>
      <br />
        <section class="content">
          <section class="header">
            <section id="Work">
              <h2>Work</h2>
            </section>
          </section>
          <section class="text">
            <PortfolioCard projects={this.state.projectInfo[0]} />
            <PortfolioCard projects={this.state.projectInfo[1]} />
            <PortfolioCard2 projects={this.state.projectInfo} />
          </section>
        </section>
        <section class="content">
        <section class="header">
          <section id="Contact"><h2>Contact</h2></section>
        </section>
        <section class="text2">
          <p>Nate Shipp</p>
          <p>480-524-3935</p>
          <p>nateshipp.myportfolio.com</p>
        </section>
      </section>
      </div>
    );
  }
}

export default App;

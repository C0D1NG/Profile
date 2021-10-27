import reactLogo from './assets/reactjs.png';
import angularLogo from './assets/angularjs.jpeg';
import reactNativeLogo from './assets/reactnative.jpeg';
import expressLogo from './assets/expressjs.png';
import phpLogo from './assets/php.png';
import mySqlLogo from './assets/mysql.webp';
import gitLogo from './assets/github.png';
import 'bulma/css/bulma.min.css';
import './App.css';

function App() {
  return (
    <div className="main">
      <section className="hero is-info is-medium is-bold">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <div className="tabs is-right">
                    <span className="navbar-item">
                      <a className="button is-white is-outlined" href="https://github.com/C0D1NG/Profile/tree/master/Portfolio/alejandroestrada">
                        <span className="icon">
                          <img src={gitLogo} alt="Logo GitHub"/>
                        </span>
                        <span title="Hello from the other side">View Source</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              Alejandro Estrada Hernandez
            </h1>
            <h2 className="subtitle">
              Short Bio
            </h2>
            <p>
              Alejandro has worked in multiple IT positions for the past 6 years. From technical support positions in computing, software, databases and networks, to positions as a developer. The latter is the one that I am most passionate about.

              Throughout my professional development, I have stood out as a self-preservative, self-taught person and researcher. I love learning about new technologies to solve the problems that come my way.
            </p>
          </div>
        </div>
      </section>
      <div className="box cta">
        <div className="has-text-centered">
          <h2 className="subtitle">SoftSkills</h2>
        </div>
      </div>
      <section className="container">
        <div className="columns features">
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <img src={reactLogo}
                      className="logo"
                      alt="Logo ReactJS" />
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>ReactJS </h4>
                  <p><a href="https://reactjs.org/">Learn more</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <img src={angularLogo} 
                      className="logo"
                      alt="Logo AngularJS" />
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>AngularJS</h4>
                  <p><a href="https://angular.io/">Learn more</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <img src={reactNativeLogo} 
                        className="logo"
                        alt="Logo React Native" />
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>React Native</h4>
                  <p><a href="https://reactnative.dev/">Learn more</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns features">
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <img src={expressLogo}
                      className="logo"
                      alt="Logo ExpressJS" />
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>ExpressJS </h4>
                  <p><a href="https://expressjs.com/es/">Learn more</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <img src={phpLogo}
                      className="logo"
                      alt="Logo PHP" />
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>PHP</h4>
                  <p><a href="https://www.php.net/manual/en/intro-whatis.php">Learn more</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <img src={mySqlLogo}
                      className="logo"
                      alt="Logo MySql" />
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>MySql</h4>
                  <p><a href="https://www.mysql.com/">Learn more</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="intro column is-8 is-offset-2">
          <h2 className="title">Experience</h2><br />
        </div>

        <div className="sandbox">
          <div className="tile is-ancestor">
            <div className="tile is-parent is-shady">
              <article className="tile is-child notification is-white">
                <p className="title">Full Stack Developer</p>
                <p className="subtitle">Shockoe (Jun 2019 – Current)</p>
                <p className="subtitle">Colima, Col. Mexico</p>
              </article>
            </div>

            <div className="tile is-parent is-shady">
              <article className="tile is-child notification is-white">
                <p className="title">Full Stack Developer</p>
                <p className="subtitle">Creatools (Apr 2019 – Oct 2019)</p>
                <p className="subtitle">Colima, Col. Mexico</p>
              </article>
            </div>

            <div className="tile is-parent is-shady">
              <article className="tile is-child notification is-white">
                <p className="title">Full Stack Developer</p>
                <p className="subtitle">Complejo administrativo del gobierno del estado (Feb 2019 – Jul 2019)</p>
                <p className="subtitle">Colima, Col. Mexico</p>
              </article>
            </div>
          </div>
        </div>

        <div className="sandbox">
          <div className="tile is-ancestor">
            <div className="tile is-parent is-shady">
              <article className="tile is-child notification is-white">
                <p className="title">Front-End Developer Jr</p>
                <p className="subtitle">CantaloopMX (Sept 2017 – Dic 2018)</p>
                <p className="subtitle">Colima, Col. Mexico</p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <div className="control level-item">
              <a href="https://hacktoberfest.digitalocean.com/">
                <div className="tags has-addons">
                  <span className="tag is-dark">Hacktoberfest 2021</span>
                  <span className="tag is-info">ReactJS</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

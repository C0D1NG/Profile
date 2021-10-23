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
    <div classname="main">
      <section class="hero is-info is-medium is-bold">
        <div class="hero-head">
          <nav class="navbar">
            <div class="container">
              <div id="navbarMenu" class="navbar-menu">
                <div class="navbar-end">
                  <div class="tabs is-right">
                    <span class="navbar-item">
                      <a class="button is-white is-outlined" href="https://github.com/C0D1NG/Profile/tree/master/Portfolio/alejandroestrada">
                        <span class="icon">
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
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">
              Alejandro Estrada Hernandez
            </h1>
            <h2 class="subtitle">
              Short Bio
            </h2>
            <p>
              Alejandro has worked in multiple IT positions for the past 6 years. From technical support positions in computing, software, databases and networks, to positions as a developer. The latter is the one that I am most passionate about.

              Throughout my professional development, I have stood out as a self-preservative, self-taught person and researcher. I love learning about new technologies to solve the problems that come my way.
            </p>
          </div>
        </div>
      </section>
      <div class="box cta">
        <p class="has-text-centered">
          <h2 class="subtitle">SoftSkills</h2>
        </p>
      </div>
      <section class="container">
        <div class="columns features">
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-image has-text-centered">
                <img src={reactLogo}
                      classname="logo"
                      alt="Logo ReactJS" />
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>ReactJS </h4>
                  <p><a href="https://reactjs.org/">Learn more</a></p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-image has-text-centered">
                <img src={angularLogo} 
                      classname="logo"
                      alt="Logo AngularJS" />
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>AngularJS</h4>
                  <p><a href="https://angular.io/">Learn more</a></p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-image has-text-centered">
                <img src={reactNativeLogo} 
                        classname="logo"
                        alt="Logo React Native" />
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>React Native</h4>
                  <p><a href="https://reactnative.dev/">Learn more</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns features">
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-image has-text-centered">
                <img src={expressLogo}
                      classname="logo"
                      alt="Logo ExpressJS" />
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>ExpressJS </h4>
                  <p><a href="https://expressjs.com/es/">Learn more</a></p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-image has-text-centered">
                <img src={phpLogo}
                      classname="logo"
                      alt="Logo PHP" />
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>PHP</h4>
                  <p><a href="https://www.php.net/manual/en/intro-whatis.php">Learn more</a></p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-image has-text-centered">
                <img src={mySqlLogo}
                      classname="logo"
                      alt="Logo MySql" />
              </div>
              <div class="card-content">
                <div class="content">
                  <h4>MySql</h4>
                  <p><a href="https://www.mysql.com/">Learn more</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="intro column is-8 is-offset-2">
          <h2 class="title">Experience</h2><br />
        </div>

        <div class="sandbox">
          <div class="tile is-ancestor">
            <div class="tile is-parent is-shady">
              <article class="tile is-child notification is-white">
                <p class="title">Full Stack Developer</p>
                <p class="subtitle">Shockoe (Jun 2019 – Current)</p>
                <p class="subtitle">Colima, Col. Mexico</p>
              </article>
            </div>

            <div class="tile is-parent is-shady">
              <article class="tile is-child notification is-white">
                <p class="title">Full Stack Developer</p>
                <p class="subtitle">Creatools (Apr 2019 – Oct 2019)</p>
                <p class="subtitle">Colima, Col. Mexico</p>
              </article>
            </div>

            <div class="tile is-parent is-shady">
              <article class="tile is-child notification is-white">
                <p class="title">Full Stack Developer</p>
                <p class="subtitle">Complejo administrativo del gobierno del estado (Feb 2019 – Jul 2019)</p>
                <p class="subtitle">Colima, Col. Mexico</p>
              </article>
            </div>
          </div>
        </div>

        <div class="sandbox">
          <div class="tile is-ancestor">
            <div class="tile is-parent is-shady">
              <article class="tile is-child notification is-white">
                <p class="title">Front-End Developer Jr</p>
                <p class="subtitle">CantaloopMX (Sept 2017 – Dic 2018)</p>
                <p class="subtitle">Colima, Col. Mexico</p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            <div class="control level-item">
              <a href="https://hacktoberfest.digitalocean.com/">
                <div class="tags has-addons">
                  <span class="tag is-dark">Hacktoberfest 2021</span>
                  <span class="tag is-info">ReactJS</span>
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

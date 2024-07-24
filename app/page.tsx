import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div id="root">
              <div id="nav">
                  <a href="#home"><h3 className="logo">IngerslevSoftware</h3></a>
                  <div id="buttonMenu" className="btn not-active"><span></span><span></span><span></span></div>
                  <ul className="navigation">
                      <li>
                          <a href="#home">Home</a>
                      </li>
                      <li>
                          <a href="#about">About</a>
                      </li>
                      <li>
                          <a href="#projects">Projects</a>
                      </li>
                      <li>
                          <a href="#contact">Contact</a>
                      </li>
                  </ul>
              </div>
        </div>
        
        <section id="home" className="profileSection">
            <div className="container">
                <div className="content">
                    <div className="profile-main">
                        <div className="profile-text">
                            <h1>Frontend/Backend <br/> Developer <Image src="/images/coding.svg" className="laptop" alt="laptop icon"/></h1>
                            <p>Hello, I'm Rasmus Ingerslev. Welcome to my portfolio. I'm a dedicated Developer based in Aarhus, Denmark.</p>
                        </div>
                        <Image src="images/punktbilledeRamme.png" alt="" className="profile" alt="ramme"/>
                    </div>
                    <div className="skills">
                        <p>Primary Languages</p>
                        <div className="logos">
                            <ul>
                                <li>
                                    <Image src="/images/java-original-wordmark.svg" title="Java" alt="java logo"/>
                                </li>
                                <li>
                                    <Image src="/images/csharp.svg" title="C#" alt="c# logo"/>
                                </li>
                                <li>
                                    <Image src="/images/swift.svg" title="SwiftUI" alt="swift logo"/>
                                </li>
                                <li>
                                    <Image src="/images/javascript-js.svg" title="JavaScript" alt="JavaScript logo"/>
                                </li>
                                <li>
                                    <Image src="/images/html.svg" title="HTML5" alt="html logo"/>
                                </li>
                                <li>
                                    <Image src="/images/css-3.svg" title="CSS3" alt="css logo"/>
                                </li>
                            </ul>
                        </div> 
                    </div>
                </div>
            </div>
        </section>


        <section className="about" id="about">
            <div className="container">
                <h4>About me</h4>
                <div className="about-content">
                    <div className="text-side">
                        <h4>Frontend/Backend Developer</h4>
                        <p>As a Developer, I am getting better in different skills. Most of my Education has focused on Java, JavaScript and Swift. I am collaborative by nature, I work seamlessly in teams to deliver exceptional applications. My commitment to staying updated with the latest technologies guarantees quality code and optimal solutions.</p>
                    </div>
                    <div className="img-side">
                        <div className="placement">
                            <p>Backend & Mobile</p>
                            <Image src="/images/java-original-wordmark.svg" title="Java" className="skill-icon" alt="skill-icon"/>
                            <Image src="/images/csharp.svg" title="C#" className="skill-icon" alt="skill-icon"/>
                            <Image src="/images/nodejs.svg" title="NodeJS" className="skill-icon" alt="skill-icon"/>
                            <Image src="/images/swift.svg" title="SwiftUI" className="skill-icon" alt="skill-icon"/>
                            <Image src="/images/reactNative.png" title="ReactNative" className="skill-icon" alt="skill-icon"/>
                            <p>Frontend</p>
                            <Image src="/images/javascript-js.svg" title="Javascript" className="skill-icon" alt="skill-icon"/>
                            <Image src="/images/html.svg" title="HTML5" className="skill-icon" alt="skill-icon"/>
                            <Image src="/images/css-3.svg" title="CSS3" className="skill-icon" alt="skill-icon"/>
                            <Image src="/images/pug.svg" title="Pug" className="skill-icon" alt="skill-icon"/>
                            <p>Database</p>
                            <Image src="/images/database-sql.svg" title="MS SQL" className="skill-icon" alt="skill-icon"/>
                            <Image src="/images/file-type-firebase.svg" title="Firebase" className="skill-icon" alt="skill-icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="projects" className="project">
            <div className="container">
                <h4>Portfolio</h4>
                <div className="project-content">
                  <div className="projects-grid">
                      <div className="pro pro__1 undefined">
                          <div className="pro__img">
                              <a target="_blank" href="https://play.google.com/store/apps/details?id=com.UrDiscFriend" rel="noreferrer">
                                  <Image src="/images/UrDiscFriend.png" alt="website" className="transform: translateY(0%); transition: transform 10s ease-in-out 0s;"/>
                              </a>
                          </div>
                          <div className="pro__text">
                              <h3>Ur Disc Friend</h3>
                              <p>The essential companion for seasoned players. Whether it's a casual enthusiast or pro. Helps players elevate their game with an intuitive, user-friendly interface.</p>
                              <div className="stack">
                                  <p>React Native</p>
                              </div>
                              <div className="links">
                                  <a target="_blank" href="https://play.google.com/store/apps/details?id=com.UrDiscFriend" rel="noreferrer"><i className="fa-solid fa-share"></i>Go to Google Playstore</a>
                              </div>
                          </div>
                      </div>
                      <div className="pro pro__1">
                        <div className="pro__img">
                            <a target="_blank" href="https://grauballemikrobryggeri.dk/" rel="noreferrer">
                                <Image src="/images/GBhjem.png" alt="website" className="transform: translateY(0%); transition: transform 10s ease-in-out 0s;"/></a>
                            </div>
                            <div className="pro__text">
                                <h3>Grauballe Mikrobryggeri</h3>
                                <p>Beer portfolio website for my dads breewery, where you can explore the past and upcoming beer creations.</p>
                                <div className="stack">
                                    <p>HTML</p>
                                    <p>JavaScript</p>
                                    <p>CSS</p>
                                </div>
                                <div className="links">
                                    <a target="_blank" href="https://grauballemikrobryggeri.dk/" rel="noreferrer"><i className="fa-solid fa-share"></i>Go to website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="contact" className="contact">
            <div className="container">
                <h4>Contact</h4>
                <div className="contact__content">
                    <div className="contact__info">
                        <a href="mailto:Rasprivat@hotmail.com">Rasprivat@hotmail.com</a>
                    </div>
                </div>
            </div>
        </section>
        
        <footer>
            <div className="container">
                <div className="footerc">
                    <h3>Copyright © 2023. All rights are reserved</h3>
                    <div className="footerc__socials">
                        <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/ingerslev/"><i className="fa-brands fa-linkedin"></i></a>
                        <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/RIngerslev"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
}

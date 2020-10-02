import React, { Component } from "react";
import styled from "styled-components";
import { IoIosBook, IoIosCalculator, IoIosHourglass } from "react-icons/io";


 export default class Services extends Component {
                  state = {
                    services: [
                      {
                        id: 1,
                        icon: <IoIosBook />,
                        title: "continuous learner",
                        text:
                          "Time well-spent is getting a grasp on a new coding language, or improving upon one."
                      },
                      {
                        id: 2,
                        icon: <IoIosCalculator />,
                        title: "tomorrow's planner",
                        text:
                          "Whether in business or at home, it is necessary to look for the most cost-effective & efficient ways of doing things."
                      },
                      {
                        id: 3,
                        icon: <IoIosHourglass />,
                        title: "timely deliverer ",
                        text:
                          "Whether personal or work project, completion of work early is essential for gathering feedback prior to submission."
                      }
                    ]
                  };
                  render() {
                    return (
                      <ServiceWrapper className="py-5">
                        <div className="container">
                          <div className="row">
                            {this.state.services.map(item => {
                              return (
                                <div
                                  className="col-10 mx-auto col-sm-6 col-md-4 
                            text-center my-3"
                                  key={item.id}
                                >
                                  <div className="service-icon">
                                    {item.icon}
                                  </div>
                                  <div className="mt-3 text-capitalize">
                                    {item.title}
                                  </div>
                                  <div className="mt-3">{item.text}</div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </ServiceWrapper>
                    );
                  }
                }

const ServiceWrapper = styled.section`
  background: rgba(95, 183, 234, 0.5);
  .service-icon {
    font-size: 2.5em;
    color: var(--primaryColor);
  }
  p {
    color: var(--darkGrey);
  }
`;

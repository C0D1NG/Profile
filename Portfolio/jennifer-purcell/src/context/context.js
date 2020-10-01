import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./socialData";
import { items } from "./projectData";
const ProjectContext = React.createContext();

class ProjectProvider extends Component {
  state = {
    sidebarOpen: false,
    links: linkData,
    socialIcons: socialData,
    storeProjects: [],
    filteredProjects: [],
    featuredProjects: [],
    singleProject: {},
    loading: true
  };
  componentDidMount() {
    //from contentful items

    this.setProjects(items);
  }

  //set projects

  setProjects = projects => {
    let storeProjects = projects.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const project = { id, ...item.fields, image };
      return project;
    });
    //  featured projects
    let featuredProjects = storeProjects.filter(item => item.featured === true);
    this.setState({
      storeProjects,
      filteredProjects: storeProjects,
      featuredProjects,
      singleProject: this.getStorageProject(),
      loading: false
    });
  };

  // get project from local storage
  getStorageProject = () => {
    return localStorage.getItem("singleProject")
      ? JSON.parse(localStorage.getItem("singleProject"))
      : {};
  };

  // set single project
  setSingleProject = id => {
    let project = this.state.storeProjects.find(item => item.id === id);
    localStorage.setItem("singleProject", JSON.stringify(project));
    this.setState({
      singleProject: { ...project },
      loading: false
    });
  };

  // handle sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  render() {
    return (
      <ProjectContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          setSingleProject: this.setSingleProject
        }}
      >
        {this.props.children}
      </ProjectContext.Provider>
    );
  }
}

const ProjectConsumer = ProjectContext.Consumer;

export { ProjectProvider, ProjectConsumer };

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import langSchl from "../../Assets/Projects/language-school.png";
import toyMarket from "../../Assets/Projects/toy-marketplace.png";
import chefRecipe from "../../Assets/Projects/chef-recipe-hunter.png";
import ProjectCard from './ProjectCards';

const ProjectBox = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
                <ProjectCard
                    imgPath={langSchl}
                    isBlog={false}
                    title="Language School"
                    description="● Integrated Firebase for authenticating the users.
● Different user roles (Admin, Instructor, Student) have different access levels.
● It uses JWT for secure user authorization.
● Uses Stripe payment gateway to receive payment for the enrolled students.
● Uses CRUD operations to add or update new users, classes, transaction IDs etc

Technologies: ReactJS | MongoDB | Stripe Payment Gateway | Firebase | Express.js | Tailwind CSS"
                    ghLink1="https://github.com/sh-bd/summer-camp-client-side"
                    ghLink2="https://github.com/sh-bd/summer-camp-server-side"
                    demoLink="https://summer-camp-sh4mim.netlify.app/" />
            </Col>

            <Col md={4} className="project-card">
                <ProjectCard
                    imgPath={toyMarket}
                    isBlog={false}
                    title="Shoes
Toy Marketplace"
                    description="● Integrated Firebase for authenticating the users.
● CRUD Operations to add, delete or update toys added by the user.
● It uses Firebase for user authentications.
● It uses private routes for specific pages, and the user must log in to see the page.
● The client-side is hosted on Netlify, and the server is on Vercel.

Technologies: ReactJS | MongoDB | Firebase | Express.js | Tailwind CSS | Node.js | Netlify"
                    ghLink1="https://github.com/sh-bd/toy-marketplace-client-side"
                    ghLink2="https://github.com/sh-bd/toy-marketplace-server-side"
                    demoLink="https://marvelous-kashata-09fb13.netlify.app/" />
            </Col>

            <Col md={4} className="project-card">
                <ProjectCard
                    imgPath={chefRecipe}
                    isBlog={false}
                    title="Chef Recipe Hunter"
                    description="● It uses private routes for the chef details page, so the user must be logged in to view it.
● It uses Firebase to both authenticate the users as well as host the client side.
● The user can log in using either email and password or using a Google or GitHub account.
● It uses Vercel to host the server side of the website.
● This uses a slider to show different menu items on the homepage.

Technologies: ReactJS | Firebase | ExpressJS | NodeJs | Tailwind CSS | DaisyUI | Vercel"
                    ghLink1="https://github.com/sh-bd/chef-recipe-hunter-client-side"
                    ghLink2="https://github.com/sh-bd/chef-recipe-hunter-server-side"
                    demoLink="https://assignment-10-4a34a.web.app/" />
            </Col>
        </Row>
    );
};

export default ProjectBox;
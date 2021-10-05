import React from "react";
import { internship } from "../portfolio";
import { Container, Row } from "reactstrap";

import { Fade } from "react-reveal";

import InternshipCard from "../components/InternshipCard";

const Internship = () => {
	return (
		<section className="section section-lg">
			<Container>
				<Fade bottom duration={1000} distance="40px">
					<div className="d-flex p-4">
						<div>
							<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                            <i class="ni ni-briefcase-24 text-info"></i>
							</div>
						</div>
						<div className="pl-4">
							<h4 className="display-3 text-info"> Internship </h4>
						</div>
					</div>
					<Row className="row-grid align-items-center">
						{internship.map((data, i) => {
							return <InternshipCard key={i} data={data} />;
						})}
					</Row>
				</Fade>
			</Container>
		</section>
	);
};

export default Internship;
